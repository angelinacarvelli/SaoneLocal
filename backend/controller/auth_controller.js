import db from "../config/db.js";
import bcryptjs from "bcryptjs";
import { signToken, cookieOptions } from "../middleware/auth.js";

const hashPass = (password) => bcryptjs.hash(password, 10);
const comparePass = (plain, hash) => bcryptjs.compare(plain, hash);

// ---- Inscription CLIENT (role_id 3 = customer) ----
export const register = async (req, res) => {
    try {
        const { firstname, lastname, email, phone, password } = req.body;

        const exists = await db.query('SELECT id FROM "users" WHERE email = $1', [email]);
        if (exists.rows[0]) return res.status(409).json({ error: "Cet email est déjà utilisé" });

        const hashed = await hashPass(password);

        const insert = await db.query(
            `INSERT INTO "users" (firstname, lastname, email, phone, password, role_id, inscription)
             VALUES ($1, $2, $3, $4, $5, 3, CURRENT_DATE)
             RETURNING id, firstname, lastname, email, phone, role_id`,
            [firstname, lastname, email, phone, hashed]
        );
        const user = insert.rows[0];

        // IMPORTANT : on crée le panier du client tout de suite,
        // sinon l'ajout au panier échoue (basket_id NULL).
        await db.query('INSERT INTO "basket" (user_id) VALUES ($1) ON CONFLICT (user_id) DO NOTHING', [user.id]);

        res.cookie("jwt", signToken(user), cookieOptions);
        res.status(201).json({ message: "Inscription réussie", user });
    } catch (error) {
        console.error("Erreur register :", error);
        res.status(500).json({ error: "Erreur lors de l'inscription" });
    }
};

// ---- Inscription PRODUCTEUR (role_id 2 = producer) ----
export const registerProducer = async (req, res) => {
    try {
        const { firstname, lastname, siret, phone, email, password } = req.body;

        const exists = await db.query('SELECT id FROM "users" WHERE email = $1', [email]);
        if (exists.rows[0]) return res.status(409).json({ error: "Cet email est déjà utilisé" });

        const hashed = await hashPass(password);

        const insert = await db.query(
            `INSERT INTO "users" (firstname, lastname, phone, email, password, role_id, inscription)
             VALUES ($1, $2, $3, $4, $5, 2, CURRENT_DATE)
             RETURNING id, firstname, email, role_id`,
            [firstname, lastname || null, phone, email, hashed]
        );
        const user = insert.rows[0];

        await db.query('INSERT INTO "producer" (user_id, siret) VALUES ($1, $2)', [user.id, siret]);
        // Un producteur peut aussi commander, donc on crée un panier pour lui aussi
        await db.query('INSERT INTO "basket" (user_id) VALUES ($1) ON CONFLICT (user_id) DO NOTHING', [user.id]);

        res.cookie("jwt", signToken(user), cookieOptions);
        res.status(201).json({ message: "Profil producteur créé avec succès", user });
    } catch (error) {
        console.error("Erreur registerProducer :", error);
        res.status(500).json({ error: "Erreur lors de la création du profil producteur" });
    }
};

// ---- Connexion ----
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const result = await db.query('SELECT * FROM "users" WHERE email = $1', [email]);
        const user = result.rows[0];
        if (!user) return res.status(401).json({ error: "Identifiants incorrects" });

        const ok = await comparePass(password, user.password);
        if (!ok) return res.status(401).json({ error: "Identifiants incorrects" });

        // MODIFICATION ICI : On vérifie d'abord si le panier existe
        const basketExists = await db.query('SELECT id FROM "basket" WHERE user_id = $1', [user.id]);
        
        // Si aucun panier n'existe pour cet utilisateur, on le crée
        if (basketExists.rows.length === 0) {
            await db.query('INSERT INTO "basket" (user_id) VALUES ($1)', [user.id]);
        }

        await db.query('UPDATE "users" SET last_connexion = CURRENT_DATE WHERE id = $1', [user.id]);

        res.cookie("jwt", signToken(user), cookieOptions);
        delete user.password; 
        res.json({ message: "Connexion réussie", user });
    } catch (error) {
        console.error("Erreur login :", error);
        res.status(500).json({ error: "Erreur lors de la connexion" });
    }
};

// ---- Déconnexion ----
export const logout = (_req, res) => {
    res.clearCookie("jwt", cookieOptions);
    res.json({ message: "Déconnexion réussie" });
};

// ---- Utilisateur courant (pour restaurer la session côté React) ----
export const me = async (req, res) => {
    try {
        const result = await db.query(
            'SELECT id, firstname, lastname, email, phone, image, role_id FROM "users" WHERE id = $1',
            [req.user.id]
        );
        if (!result.rows[0]) return res.status(404).json({ error: "Utilisateur introuvable" });
        res.json({ user: result.rows[0] });
    } catch (error) {
        console.error("Erreur me :", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
};
