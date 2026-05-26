import express from "express";
import { PORT, mongoDBURL } from './config.js'; // recup du port et de l'URI de co
import cors from 'cors'; // Permet de gérer les requêtes cross-origin
import mongoose from "mongoose";
import { Collection } from "./mongo.js"; // recup du modele de la bdd
import path from "path";
import jwt from "jsonwebtoken"; // generation de token de session securisé
import cookieParser from "cookie-parser"; // tu peut ecrire et lire ez dans les cookies nav
import bcryptjs from "bcryptjs"; // cryptage pour hacher les passw avant de les stocker

const app = express();
app.use(express.json()); // permet de lire le json dans le body des requetes
app.use(cookieParser()) // active l'analyse auto des cookies nav
app.use(express.urlencoded({ extended: false })) // permet de parser les donnees des formulaires html
app.use(cors()); // active la securite cors pour l'api

// config des dossiers de rendu html dynamiques (hbs)
const templatePath = path.dirname("./tempelates")
const publicPath = path.dirname("./public")

app.set('view engine', 'hbs')
app.set("views", templatePath)
app.use(express.static(publicPath)) // donne un acces ez aux fichiers du dossier public (css, images)


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
        const verify = jwt.verify(req.cookies.jwt, "HelloAndWelcometoSaoneLocal")
        res.render("./tempelates/home", { name: verify.name }) // injecte le nom du user dans la page
    } else {
        res.render("./tempelates/login")
    }
})

// affichage de la page d'inscription
app.get("/signup", (req, res) => {
    res.render('./tempelates/signup')
})

// traitement de l'inscription : verif doublon, genere le token cookie et save en bdd
app.post("/signup", async (req, res) => {
    try {
        const check = await Collection.findOne({ name: req.body.name }) // check si le nom existe deja
        if (check) {
            res.send("user already exist") // bloque si le nom est deja pris
        } else {
            const token = jwt.sign({ name: req.body.name }, "HelloAndWelcometoSaoneLocal")

            // envoi du token dans un cookie securise httpOnly
            res.cookie("jwt", token, {
                maxAge: 600000,
                httpOnly: true // bloque le vol de session en js client
            })
            const data = {
                name: req.body.name,
                password: await hashPass(req.body.password), // hachage du passw avant stockage
                token: token
            }
            await Collection.insertMany([data]) // insertion du nouveau user en bdd
            res.render("./tempelates/home", { name: req.body.name })
        }
    } catch {
        res.send("wrong details") // catch des erreurs bdd ou reseau
    }
})

// traitement du login : verif user et passw, puis renvoi du cookie de session
app.post("/login", async (req, res) => {
    try {
        const check = await Collection.findOne({ name: req.body.name }) // recup du user
        const passCheck = await compare(req.body.password, check.password) // comp du hash passw
        if (check && passCheck) {
            res.cookie("jwt", check.token, {
                maxAge: 600000,
                httpOnly: true
            })
            res.json({ check }) // renvoie les donnees du user au format json
        } else {
            res.send("wrong details")
        }
    } catch {
        res.send("wrong details")
    }
})


// co a la bdd mongoose et lancement du serveur sur le port de config  ATTENTION ; CEST LA DB DE LA VIDEO  IL FAUDRA CHANGER AVEC DB DE MYSQL
mongoose.connect(mongoDBURL).then(() => {
    console.log(`app connect to database`);
    app.listen(PORT, () => {
        console.log(`app is listening to port:${PORT}`);
    });
}).catch((error) => {
    console.log(error);
})