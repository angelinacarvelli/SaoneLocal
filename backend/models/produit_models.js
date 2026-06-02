import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new Client({
    user: process.env.user,
    host: process.env.host,
    database: process.env.name,
    password: process.env.password,
    port: process.env.port,
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
    }
};