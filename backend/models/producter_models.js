import db from "../config/db.js"; // Réutilise l'unique connexion partagée à la DB

export const ProducterModel = {
    // Résout l'id de la fiche producteur à partir de l'id utilisateur connecté
    getIdByUser: async (userId) => {
        const result = await db.query('SELECT id FROM "producer" WHERE user_id = $1', [userId]);
        return result.rows[0]?.id ?? null;
    },

    // modifier le nom et la présentation
    updateProfile: async (id, name, desc) => {
        const sql = `UPDATE "producer" SET "compagnyName" = $1, presentation = $2 WHERE id = $3`;
        return await db.query(sql, [name, desc, id]);
    },

    //  le CHIFFRE D'AFFAIRES et le nombre de commandes du mois
    getStats: async (id) => {
        const sql = `
            SELECT COALESCE(SUM(oi.quantity * oi.unit_price), 0) AS "chiffreAffaires",
            COUNT(DISTINCT o.id) AS "nombreCommandes"
            FROM "orders" o
            JOIN "order_item" oi ON o.id = oi.order_id
            JOIN "product" p ON oi.product_id = p.id
            WHERE p.producer_id = $1;
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