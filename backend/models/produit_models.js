import db from "../config/db.js";

export const Product = {

// PRODUIT
    get_productId: async (productId) => {
        const sql = `SELECT * FROM product WHERE id = $1`;
        const result = await db.query(sql, [productId]);
        return result.rows[0];
    },

// RATING
    rating_moyenne: async (productId) => {
        const sql = `
            SELECT
                COALESCE(ROUND(AVG(rating), 1), 0) AS average_rating,
                COUNT(*) AS total_reviews
            FROM review
            WHERE product_id = $1`;
        const result = await db.query(sql, [productId]);
        return result.rows[0];
    },

// COMMENTAIRES
    comment_product: async (productId) => {
        const sql = `SELECT r.id, r.comment, r.rating, r.date, u.firstname, u.lastname
            FROM "review" r
            JOIN "users" u ON u.id = r.user_id
            WHERE r.product_id = $1
            ORDER BY r.date DESC`;
        const result = await db.query(sql, [productId]);
        return result.rows;
    },

    addToBasket: async (userId, productId, quantity = 1) => {
        // 1) garantir l'existence du panier
        await db.query(
            'INSERT INTO "basket" (user_id) VALUES ($1) ON CONFLICT (user_id) DO NOTHING',
            [userId]
        );
        const sql = `
            INSERT INTO "basket_item" (basket_id, product_id, quantity)
            VALUES ((SELECT id FROM basket WHERE user_id = $1), $2, $3)
            ON CONFLICT (basket_id, product_id)
            DO UPDATE SET quantity = basket_item.quantity + EXCLUDED.quantity
            RETURNING *`;
        const result = await db.query(sql, [userId, productId, quantity]);
        return result.rows[0];
    },

// FAVORIS 
    favorites_product: async (userId, productId) => {
        const sql = `INSERT INTO "favorite_product" (user_id, product_id)
            VALUES ($1, $2)
            ON CONFLICT (user_id, product_id) DO NOTHING`;
        return await db.query(sql, [userId, productId]);
    },

    remove_favorite: async (userId, productId) => {
        const sql = `DELETE FROM "favorite_product" WHERE user_id = $1 AND product_id = $2`;
        return await db.query(sql, [userId, productId]);
    },

// CATALOGUE
    getCommonCatalogBySubcategory: async (categoryLabel) => {
        const sql = `SELECT
                p.id, p.name, p.description, p.price, p.image,
                s.id AS subcategory_id, s.label AS subcategory_label
            FROM product p
            JOIN category c ON p.category_id = c.id
            JOIN subcategory s ON p.subcategory_id = s.id
            WHERE LOWER(c.label) = LOWER($1)
            ORDER BY s.label, p.name`;
        const result = await db.query(sql, [categoryLabel]);
        return result.rows;
    },

    getCommonCatalogByProducer: async (categoryLabel) => {
        const sql = `SELECT
                p.id, p.name, p.description, p.price, p.image,
                pr.id AS producer_id, pr."compagnyName" AS producer_name
            FROM product p
            JOIN category c ON p.category_id = c.id
            JOIN producer pr ON p.producer_id = pr.id
            WHERE LOWER(c.label) = LOWER($1)
            ORDER BY pr."compagnyName", p.name`;
        const result = await db.query(sql, [categoryLabel]);
        return result.rows;
    }
};
