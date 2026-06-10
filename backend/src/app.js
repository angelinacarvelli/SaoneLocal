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
import clientRoutes from "./routes/client_routes.js";
import producterRoutes from "./routes/producter_routes.js";
import produitRoutes from "./routes/produit_routes.js";
import boulangerieRoutes from "./routes/boulangerie_routes.js";


dotenv.config(); // charge les variables d'environnement depuis le fichier .env

const app = express();

// Configuration de __dirname pour trouver les dossiers frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json()); // permet de lire le json dans le body des requetes
app.use(cookieParser()); // active l'analyse auto des cookies nav
app.use(express.urlencoded({ extended: false })); // permet de parser les donnees des formulaires html

// Liaison avec ton dossier frontend pour servir tous tes fichiers HTML, CSS et images statiques
app.use(express.static(path.join(__dirname, "../frontend")));

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

app.get("/", (req, res) => {
    if (req.cookies.jwt) {
        // Si connecté, on l'envoie sur la page home.html dans page.accueil
        res.sendFile(path.join(__dirname, "../frontend/page.accueil/home.html"));
    } else {
        // Sinon, page d'accueil déconnectée classique
        res.sendFile(path.join(__dirname, "../frontend/page.accueil/index.html"));
    }
});

// Affichage de la page d'inscription client
app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/page.accueil/signupclient.html"));
});

// Traitement de l'inscription : verif doublon, genere le token cookie et save en bdd
app.post("/signup", async (req, res) => {
    try {
        const checkResult = await db.query('SELECT * FROM "users" WHERE email = $1', [req.body.email]); // check par email sur la db
        const check = checkResult.rows[0];

        if (check) {
            res.send("user already exist"); // bloque si l'email est deja pris
        }
        else {
            const token = jwt.sign({ email: req.body.email }, "HelloAndWelcometoSaoneLocal");

            // envoi du token dans un cookie
            res.cookie("jwt", token, {
                maxAge: 600000,
                httpOnly: true // bloque le vol de session en js client
            });
            
            const hashedPassword = await hashPass(req.body.password); // hachage du passw avant stockage

            // insertion SQL stricte (role_id 3 = customer)
            const sql = `
                INSERT INTO "users" (firstname, lastname, email, password, role_id, inscription) 
                VALUES ($1, $2, $3, $4, 3, CURRENT_DATE)
            `;
            await db.query(sql, [req.body.firstname, req.body.lastname, req.body.email, hashedPassword]);

            // Une fois inscrit, on l'envoie sur la page d'accueil connectée
            res.sendFile(path.join(__dirname, "../frontend/page.accueil/home.html"));
        }
    } catch (error) {
        res.send("wrong details"); // catch des erreurs sur la db et/ou reseau
    }
});

// Traitement du login : verif user et passw, puis renvoi du cookie de session
app.post("/login", async (req, res) => {
    try {
        // Récupération par email dans la table 
        const checkResult = await db.query('SELECT * FROM "users" WHERE email = $1', [req.body.email]);
        const check = checkResult.rows[0];

        const passCheck = await compare(req.body.password, check.password); // comp du hash passw
        if (check && passCheck) {
            
            // On réutilise le token de session généré
            const token = jwt.sign({ email: check.email }, "HelloAndWelcometoSaoneLocal");

            res.cookie("jwt", token, {
                maxAge: 600000,
                httpOnly: true
            });
            
            // On renvoie un JSON pour que ton script ou ton formulaire sache que c'est bon
            res.json({ check });
        }
        else {
            res.status(401).send("wrong details");
        }
    }
    catch (error) {
        res.status(500).send("wrong details");
    }
});


app.use("/api/client", clientRoutes);
app.use("/api/producer", producterRoutes); // Gère le catalogue et les fiches producteurs
app.use("/api/products", produitRoutes); // Gère les fiches produits et le catalogue commun
app.use('/api/producer', router); // Gère les routes spécifiques aux producteurs (profil, stats, commandes, etc.)

const PORT = process.env.PORT || process.env.port || 3000;

app.listen(PORT, () => {
    console.log(`Serveur unifié connecté et démarré sur le port ${PORT}`);
});