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
            JOIN "users" u ON u.id = r.user_id
            WHERE r.product_id = $1
            ORDER BY r.date DESC
        `;

        const result = await db.query(sql, [productId]);
        return result.rows;
    },

//Panier
    addToBasket: async (id, product_id, quantity) => {
        const sql = `
            INSERT INTO "basket_item" (basket_id, product_id, quantity)
            VALUES ((SELECT id FROM basket WHERE user_id = $1), $2, $3)`;

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