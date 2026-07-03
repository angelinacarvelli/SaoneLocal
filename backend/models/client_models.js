import db from "../config/db.js";

export const Customer = {

////// PROFIL //////
    info_profil: async (id) => {
        const sql = `SELECT id, firstname, lastname, email, phone, image
            FROM users WHERE id = $1`;
        const result = await db.query(sql, [id]);
        return result.rows[0];
    },

    update_profile: async (id, firstname, lastname, email, phone, image) => {
        const sql = `UPDATE users
            SET firstname = $1, lastname = $2, email = $3, phone = $4, image = $5
            WHERE id = $6`;
        return await db.query(sql, [firstname, lastname, email, phone, image, id]);
    },

////// COMMANDES //////
    // Suivi de toutes les commandes (avec le détail des articles)
    traking_order: async (id) => {
        const sql = `SELECT o.*,
                COALESCE(json_agg(
                    json_build_object(
                        'product_id', oi.product_id,
                        'name', p.name,
                        'quantity', oi.quantity,
                        'unit_price', oi.unit_price
                    )
                ) FILTER (WHERE oi.id IS NOT NULL), '[]') AS items
            FROM orders o
            LEFT JOIN order_item oi ON oi.order_id = o.id
            LEFT JOIN product p ON p.id = oi.product_id
            WHERE o.user_id = $1
            GROUP BY o.id
            ORDER BY o.id DESC`;
        const result = await db.query(sql, [id]);
        return result.rows;
    },

    // Historique = commandes livrées
    purchase_history: async (id) => {
        const sql = `SELECT * FROM orders WHERE user_id = $1 AND status = 'livré' ORDER BY id DESC`;
        const result = await db.query(sql, [id]);
        return result.rows;
    },

    // CHECKOUT : transforme le panier de l'utilisateur en commande.
    checkout: async (userId) => {
        const client = await db.connect();
        try {
            await client.query("BEGIN");

            const itemsRes = await client.query(
                `SELECT bi.product_id, bi.quantity, p.price
                 FROM basket_item bi
                 JOIN basket b ON b.id = bi.basket_id
                 JOIN product p ON p.id = bi.product_id
                 WHERE b.user_id = $1`,
                [userId]
            );
            const items = itemsRes.rows;
            if (items.length === 0) {
                await client.query("ROLLBACK");
                return { error: "Panier vide" };
            }

            const total = items.reduce((sum, it) => sum + Number(it.price) * it.quantity, 0);
            const number = Math.floor(100000 + Math.random() * 900000); // n° de commande

            const orderRes = await client.query(
                `INSERT INTO orders (user_id, "totalExclTax", status, number)
                 VALUES ($1, $2, 'en préparation', $3) RETURNING *`,
                [userId, total, number]
            );
            const order = orderRes.rows[0];

            for (const it of items) {
                await client.query(
                    `INSERT INTO order_item (order_id, product_id, quantity, unit_price)
                     VALUES ($1, $2, $3, $4)`,
                    [order.id, it.product_id, it.quantity, it.price]
                );
                await client.query(
                    `UPDATE product SET sales_count = COALESCE(sales_count, 0) + $1 WHERE id = $2`,
                    [it.quantity, it.product_id]
                );
            }

            // On vide le panier une fois la commande créée
            await client.query(
                `DELETE FROM basket_item WHERE basket_id = (SELECT id FROM basket WHERE user_id = $1)`,
                [userId]
            );

            await client.query("COMMIT");
            return { order };
        } catch (error) {
            await client.query("ROLLBACK");
            throw error;
        } finally {
            client.release();
        }
    },

////// FAVORIS //////
    list_favorites: async (id) => {
        const sql = `SELECT p.*
            FROM product p
            JOIN favorite_product fp ON fp.product_id = p.id
            WHERE fp.user_id = $1`;
        const result = await db.query(sql, [id]);
        return result.rows;
    },

////// PANIER //////
    list_basket: async (id) => {
        const sql = `SELECT p.*, bi.quantity, bi.id AS basket_item_id
            FROM product p
            JOIN basket_item bi ON bi.product_id = p.id
            JOIN basket b ON bi.basket_id = b.id
            WHERE b.user_id = $1
            ORDER BY bi.id`;
        const result = await db.query(sql, [id]);
        return result.rows;
    },

    // Mettre à jour la quantité d'une ligne
    update_basket_item: async (userId, productId, quantity) => {
        if (quantity <= 0) {
            return Customer.remove_basket_item(userId, productId);
        }
        const sql = `UPDATE basket_item
            SET quantity = $3
            WHERE product_id = $2
              AND basket_id = (SELECT id FROM basket WHERE user_id = $1)`;
        return await db.query(sql, [userId, productId, quantity]);
    },

    remove_basket_item: async (userId, productId) => {
        const sql = `DELETE FROM basket_item
            WHERE product_id = $2
              AND basket_id = (SELECT id FROM basket WHERE user_id = $1)`;
        return await db.query(sql, [userId, productId]);
    },

////// ÉVÉNEMENTS //////
    listAllEvents: async () => {
        const result = await db.query(`SELECT * FROM event ORDER BY date`);
        return result.rows;
    },

    joinEvent: async (id, event_id) => {
        const sql = `UPDATE users SET event_id = $2 WHERE id = $1`;
        return await db.query(sql, [id, event_id]);
    },

    list_events: async (id) => {
        const sql = `SELECT e.*
            FROM event e
            JOIN users u ON u.event_id = e.id
            WHERE u.id = $1`;
        const result = await db.query(sql, [id]);
        return result.rows;
    },

////// RECOMMANDATIONS //////
    product_recommendations: async () => {
        const sql = `SELECT * FROM product ORDER BY RANDOM() LIMIT 3`;
        const result = await db.query(sql);
        return result.rows;
    },
};
