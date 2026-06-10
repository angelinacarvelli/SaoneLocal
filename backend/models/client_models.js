import db from "../config/db.js";

////// Profil //////

export const Customer = {

// Informations du profil pris de la table users
    info_profil: async (id) => {
        const sql = `SELECT id, firstname, lastname, email, phone, image
            FROM users
            WHERE id = $1
        `;

        const result = await db.query(sql, [id]);
        return result.rows[0];
    },

    // Historique complet (ajout)
    purchase_history: async (id) => {
        const sql = `SELECT * FROM orders WHERE user_id = $1 AND status = 'livré'`;
        const result = await db.query(sql, [id]);
        return result.rows;
    },

    // Catalogue complet événements (ajout)
    listAllEvents: async () => {
        const sql = `SELECT * FROM event`;
        const result = await db.query(sql);
        return result.rows;
    },

    // Inscription événement (ajout)
    joinEvent: async (id, event_id) => {
        const sql = `UPDATE users SET event_id = $2 WHERE id = $1`;
        return await db.query(sql, [id, event_id]);
    },

    // Modifier le profil
    update_profile: async (id, firstname, lastname, email, phone, image) => {
        const sql = `UPDATE users
            SET firstname = $1, lastname = $2, email = $3, phone = $4, image = $5
            WHERE id = $6
        `;

        return await db.query(sql, [
            firstname,
            lastname,
            email,
            phone,
            image,
            id
        ]);
    },

////// Commandes //////

    // Suivi des commandes
    traking_order: async (id) => {
        const sql = `SELECT *
            FROM orders
            WHERE user_id = $1`;

        const result = await db.query(sql, [id]);
        return result.rows;
    },

    // Historique des commandes
    purchase_history: async (id) => {
        const sql = `SELECT *
            FROM orders
            WHERE user_id = $1
            AND status = 'livré'`;

        const result = await db.query(sql, [id]);
        return result.rows;
    },

//////// Favoris //////////:
    list_favorites: async (id) => {
        const sql = `SELECT p.*
            FROM product p
            JOIN favorite_product fp
                ON fp.product_id = p.id
            WHERE fp.user_id = $1`;

        const result = await db.query(sql, [id]);
        return result.rows;
    },

//////// Panier //////////:
    list_basket: async (id) => {
        const sql = `SELECT p.*, bi.quantity
            FROM product p
            JOIN basket_item bi
                ON bi.product_id = p.id
            JOIN basket b
                ON bi.basket_id = b.id
            WHERE b.user_id = $1`;

        const result = await db.query(sql, [id]);
        return result.rows;
    },

//////// Evenement //////////:

    // Participer à un événement
    joinEvent: async (id, event_id) => {
        const sql = `UPDATE users SET event_id = $2 WHERE id = $1`;

        return await db.query(sql, [
            id,
            event_id
        ]);
    },

    // Mes événements
    list_events: async (id) => {
        const sql = `SELECT e.*
            FROM event e
            JOIN users u
                ON u.event_id = e.id
            WHERE u.id = $1`;

        const result = await db.query(sql, [id]);
        return result.rows;
    },


////// Recommandation //////
    product_recommendations: async () => {
        const sql = `SELECT *
            FROM product
            ORDER BY RANDOM()
            LIMIT 3`;

        const result = await db.query(sql);
        return result.rows;
    },
};