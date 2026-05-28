import express from "express";
import { PORT } from './config.js'; // recup du port de co
import cors from 'cors'; // Permet de gérer les requêtes cross-origin
import { Client } from 'pg'; // on utilise le client postgres de Sélène
import path from "path";
import jwt from "jsonwebtoken"; // generation de token de session securisé
import cookieParser from "cookie-parser"; // tu peut ecrire et lire ez dans les cookies nav
import bcryptjs from "bcryptjs"; // cryptage pour hacher les passw avant de les stocker
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config(); // charge les variables d'environnement depuis le fichier .env

const app = express();
app.use(express.json()); // permet de lire le json dans le body des requetes
app.use(cookieParser()) // active l'analyse auto des cookies nav
app.use(express.urlencoded({ extended: false })) // permet de parser les donnees des formulaires html
app.use(cors()); // active la securite cors pour l'api

// Connexion Postgres avec les variables d'environnement de Sélène
// note : sur l'EC2 y aura juste a modifier le .env, le code bouge pas !
const db = new Client({
    user: process.env.user,
    host: process.env.host, // ip de l'EC2 a mettre ici dans le .env plus tard
    database: process.env.name,
    password: process.env.password,
    port: process.env.port,
});

// Configuration de __dirname pour trouver les dossiers
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Liaison avec ton dossier frontend
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "../frontend")); 
app.use(express.static(path.join(__dirname, "../frontend")));

// hachage du passw avec bcrypt (securite bdd)
async function hashPass(password) { 
    const res = await bcryptjs.hash(password, 10)
    return res;
}

// comp du passw tape avec le hash cache de la bdd
async function compare(userPass, hashPass) {
    const res = await bcryptjs.compare(userPass, hashPass)
    return res;
}

// route d'accueil : check si t'es co avec le cookie jwt. si oui home, si non login
app.get("/", (req, res) => {
    if (req.cookies.jwt) {
        const verify = jwt.verify(req.cookies.jwt, "HelloAndWelcometoSaoneLocal");
        res.render("Authentification/home", { name: verify.firstname });
    } else {
        res.render("page.accueil/index");
    }
});

// affichage de la page d'inscription
app.get("/signup", (req, res) => {
    res.render('Authentification/signupclient')
})

// traitement de l'inscription : verif doublon, genere le token cookie et save en bdd
app.post("/signup", async (req, res) => {
    try {
        const checkResult = await db.query('SELECT * FROM "users" WHERE email = $1', [req.body.email]) // check par email sur la db de Selene
        const check = checkResult.rows[0]

        if (check) {
            res.send("user already exist") // bloque si l'email est deja pris
        }
        else {
            const token = jwt.sign({ email: req.body.email }, "HelloAndWelcometoSaoneLocal")

            // envoi du token dans un cookie
            res.cookie("jwt", token, {
                maxAge: 600000,
                httpOnly: true // bloque le vol de session en js client
            })
            
            const hashedPassword = await hashPass(req.body.password) // hachage du passw avant stockage

            // insertion SQL stricte avec les colonnes de sélène (role_id 3 = customer)
            const sql = `
                INSERT INTO "users" (firstname, lastname, email, password, role_id, inscription) 
                VALUES ($1, $2, $3, $4, 3, CURRENT_DATE)
            `
            await db.query(sql, [req.body.firstname, req.body.lastname, req.body.email, hashedPassword])

            res.render("Authentification/home", { name: req.body.firstname })
        }
    } catch {
        res.send("wrong details") // catch des erreurs sur la db et/ou reseau
    }
})

// traitement du login : verif user et passw, puis renvoi du cookie de session
app.post("/login", async (req, res) => {
    try {
        // Récupération par email dans la table 
        const checkResult = await db.query('SELECT * FROM "users" WHERE email = $1', [req.body.email])
        const check = checkResult.rows[0]

        const passCheck = await compare(req.body.password, check.password) // comp du hash passw
        if (check && passCheck) {
            
            // On réutilise le token de session généré
            const token = jwt.sign({ email: check.email }, "HelloAndWelcometoSaoneLocal")

            res.cookie("jwt", token, {
                maxAge: 600000,
                httpOnly: true
            })
            // res.render("Authentification/home", { name: req.body.firstname })
            res.json({ check }) // renvoie les donnees du user au format json
        }
        else {
            res.send("wrong details")
        }
    }
    catch {
        res.send("wrong details")
    }
})

// note : une fois sur l'EC2, ce bloc lancera l'app sur le web grace au .env mis a jour !
db.connect().then(() => {
    console.log(`app connect to database`);
    app.listen(PORT, () => {
        console.log(`app is listening to port:${PORT}`);
    });
}).catch((error) => {
    console.log(error);
})