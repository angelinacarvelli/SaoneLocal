import express from "express";
import cors from 'cors'; // Permet de gérer les requêtes cross-origin
import cookieParser from "cookie-parser"; // tu peut ecrire et lire ez dans les cookies nav
import dotenv from "dotenv";
import path from "path";
import jwt from "jsonwebtoken"; // generation de token de session securisé
import bcryptjs from "bcryptjs"; // cryptage pour hacher les passw avant de les stocker
import { fileURLToPath } from "url";
import db from "../config/db.js";
// Import de tes routes modulaires
import clientRoutes from "../routes/client_route.js";
import producterRoutes from "../routes/producter_routes.js";
import produitRoutes from "../routes/produit_routes.js";

dotenv.config(); // charge les variables d'environnement depuis le fichier .env

const app = express();

// Configuration de __dirname pour trouver les dossiers frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:5173", credentials: true })); // autorise le frontend (Vite en dev) à appeler l'API avec les cookies
app.use(express.json()); // permet de lire le json dans le body des requetes
app.use(cookieParser()); // active l'analyse auto des cookies nav
app.use(express.urlencoded({ extended: false })); // permet de parser les donnees des formulaires html

// Liaison avec ton dossier frontend pour servir tous tes fichiers HTML, CSS et images statiques
app.use(express.static(path.join(__dirname, "../realfrontend/dist"), {
    setHeaders: (res, path) => {
        if (path.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        } else if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
    }
}));
// Hachage du passw avec bcrypt (securite bdd)
async function hashPass(password) { 
    const res = await bcryptjs.hash(password, 10);
    return res;
}

// Comp du passw tape avec le hash cache de la bdd
async function compare(userPass, hashPass) {
    const res = await bcryptjs.compare(userPass, hashPass);
    return res;
}

// Secret JWT : DOIT venir d'une variable d'environnement (jamais en dur dans le code)
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    console.warn("⚠️  JWT_SECRET n'est pas défini dans le .env — à corriger avant la mise en prod !");
}

// Traitement de l'inscription client : verif doublon, genere le token cookie et save en bdd
app.post("/signup", async (req, res) => {
    try {
        const checkResult = await db.query('SELECT * FROM "users" WHERE email = $1', [req.body.email]); // check par email sur la db
        const check = checkResult.rows[0];

        if (check) {
            return res.status(409).send("user already exist"); // bloque si l'email est deja pris
        }

        const token = jwt.sign({ email: req.body.email }, JWT_SECRET);

        const hashedPassword = await hashPass(req.body.password); // hachage du passw avant stockage

        // insertion SQL stricte (role_id 3 = customer)
        const sql = `
            INSERT INTO "users" (firstname, lastname, email, phone, password, role_id, inscription) 
            VALUES ($1, $2, $3, $4, $5, 3, CURRENT_DATE)
        `;
        await db.query(sql, [req.body.firstname, req.body.lastname, req.body.email, req.body.phone, hashedPassword]);

        // envoi du token dans un cookie une fois l'inscription confirmée en bdd
        res.cookie("jwt", token, {
            maxAge: 600000,
            httpOnly: true // bloque le vol de session en js client
        });

        res.status(201).json({ message: "Inscription réussie" });
    } catch (error) {
        console.error("Erreur signup :", error);
        res.status(500).send("wrong details"); // catch des erreurs sur la db et/ou reseau
    }
});

// Inscription producteur : même logique que /signup mais crée aussi une fiche "producer" (role_id 2)
app.post("/signup-producer", async (req, res) => {
    try {
        const { firstname, siret, phone, email, password } = req.body;

        const checkResult = await db.query('SELECT * FROM "users" WHERE email = $1', [email]);
        if (checkResult.rows[0]) {
            return res.status(409).send("user already exist");
        }

        const hashedPassword = await hashPass(password);

        const userSql = `
            INSERT INTO "users" (firstname, phone, email, password, role_id, inscription)
            VALUES ($1, $2, $3, $4, 2, CURRENT_DATE)
            RETURNING id
        `;
        const userResult = await db.query(userSql, [firstname, phone, email, hashedPassword]);
        const userId = userResult.rows[0].id;

        await db.query(
            'INSERT INTO "producer" (user_id, siret) VALUES ($1, $2)',
            [userId, siret]
        );

        const token = jwt.sign({ email }, JWT_SECRET);
        res.cookie("jwt", token, { maxAge: 600000, httpOnly: true });

        res.status(201).json({ message: "Profil producteur créé avec succès" });
    } catch (error) {
        console.error("Erreur signup-producer :", error);
        res.status(500).send("wrong details");
    }
});

// Traitement du login : verif user et passw, puis renvoi du cookie de session
app.post("/login", async (req, res) => {
    try {
        // Récupération par email dans la table 
        const checkResult = await db.query('SELECT * FROM "users" WHERE email = $1', [req.body.email]);
        const check = checkResult.rows[0];

        // On vérifie d'abord que l'utilisateur existe AVANT de comparer le mot de passe
        if (!check) {
            return res.status(401).send("wrong details");
        }

        const passCheck = await compare(req.body.password, check.password); // comp du hash passw
        if (!passCheck) {
            return res.status(401).send("wrong details");
        }

        // On réutilise le token de session généré
        const token = jwt.sign({ email: check.email }, JWT_SECRET);

        res.cookie("jwt", token, {
            maxAge: 600000,
            httpOnly: true
        });

        // On ne renvoie jamais le hash du mot de passe au client
        delete check.password;
        res.json({ user: check });
    }
    catch (error) {
        console.error("Erreur login :", error);
        res.status(500).send("wrong details");
    }
});


app.use("/api/client", clientRoutes);
app.use("/api/producer", producterRoutes); // Gère le catalogue et les fiches producteurs
app.use("/api/products", produitRoutes); // Gère les fiches produits et le catalogue commun

app.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../realfrontend/dist/index.html"));
});

const PORT = process.env.PORT || process.env.port || 3000;

app.listen(PORT, () => {
    console.log(`Serveur unifié connecté et démarré sur le port ${PORT}`);
});