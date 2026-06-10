import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
});

db.connect();

export const Product = {

// PRODUIT
    get_productId: async (productId) => {
        const sql = `SELECT *
            FROM product
            WHERE id = $1`;

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
            WHERE product_id = $1
        `;

        const result = await db.query(sql, [productId]);
        return result.rows[0];
    },

    
// COMMENTAIRES
    comment_product: async (productId) => {
        const sql = `SELECT 
                r.id,
                r.comment,
                r.rating,
                r.date,
                u.firstname,
                u.lastname
            FROM "review" r
            JOIN "users" u ON u.id = r.users_id
            WHERE r.product_id = $1
            ORDER BY r.date DESC
        `;

        const result = await db.query(sql, [productId]);
        return result.rows;
    },

//Panier
    addToBasket: async (id, product_id, quantity) => {
        const sql = `FROM basket_item bi
            INSERT INTO "basket_item" (product_id, quantity)
            VALUES ($2, $3)
            JOIN basket b ON b.id = bi.basket_id
            WHERE b.user_id = $1`;

        return await db.query(sql, [
            id,
            product_id,
            quantity
        ]);
    },

// FAVORIS
    favorites_product: async (userId, productId) => {
        const sql = `INSERT INTO "favorite_product" (user_id, product_id)
            VALUES ($1, $2)
        `;

        return await db.query(sql, [
            userId,
            productId
        ]);
    }
};