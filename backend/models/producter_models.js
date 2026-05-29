import { Client } from 'pg';
import dotenv from "dotenv";

dotenv.config(); // Charge les variables d'environnement (.env)

// Configuration de la connexion DB
const db = new Client({
    user: process.env.user,
    host: process.env.host,
    database: process.env.name,
    password: process.env.password,
    port: process.env.port,
});
db.connect(); // Connexion à la DB

export const ProducterModel = {
    // modifier le nom et la présentation
    updateProfile: async (id, name, desc) => {
        const sql = `UPDATE "producer" SET "compagnyName" = $1, presentation = $2 WHERE id = $3`;
        return await db.query(sql, [name, desc, id]);
    },

    //  le CHIFFRE D'AFFAIRES et le nombre de commandes du mois
    getStats: async (id) => {
        const sql = `
            SELECT COALESCE(SUM("order_item".quantity * "order_item".unit_price), 0) AS "chiffreAffaires", //somme de tous les articles vendus (quantité \times prix), affiche 0 au lieu de vide si rien n'a été vendu.
    COUNT(DISTINCT "orders".id) AS "nombreCommandes"
    FROM "orders"
    JOIN "order_item" ON "orders".id = "order_item".order_id
    JOIN "product" ON "order_item".product_id = "product".id
    WHERE 
        "product".producer_id = $1
        AND EXTRACT(MONTH FROM "orders".date) = EXTRACT(MONTH FROM CURRENT_DATE)
        AND EXTRACT(YEAR FROM "orders".date) = EXTRACT(YEAR FROM CURRENT_DATE);
        `;
        const result = await db.query(sql, [id]);
        return result.rows[0]; // Retourne la première ligne de résultat
    },

    // récupérer tous les produits du producteur
    getProducts: async (id) => {
        const sql = 'SELECT * FROM "product" WHERE producer_id = $1';
        const result = await db.query(sql, [id]);
        return result.rows; // Retourne la liste des produits
    },

    // insérer un nouveau produit
    addProduct: async (name, desc, price, img, prodId, catId, subCatId) => {
        const sql = `INSERT INTO "product" (name, description, price, image, producer_id, category_id, subcategory_id) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
        return await db.query(sql, [name, desc, price, img, prodId, catId, subCatId]);
    },

    //créer un événement
    addEvent: async (title, date, desc, location) => {
        const sql = `INSERT INTO "event" (title, date, description, location) VALUES ($1, $2, $3, $4)`;
        return await db.query(sql, [title, date, desc, location]);
    },

    // récupérer les commandes du producteur
    getOrders: async (id) => {
        const sql = `
            SELECT DISTINCT o.* FROM "orders" o
            JOIN "order_item" oi ON o.id = oi.order_id
            JOIN "product" p ON oi.product_id = p.id
            WHERE p.producer_id = $1 ORDER BY o.id DESC
        `;
        const result = await db.query(sql, [id]);
        return result.rows; // Retourne la liste des commandes
    },

    // mettre à jour le statut d'une commande
    updateStatus: async (orderId, status) => {
        const sql = 'UPDATE "orders" SET status = $1 WHERE id = $2';
        return await db.query(sql, [status, orderId]);
    }
};