import {Client} from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_NAME,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
});

db.connect();

export const WineCatalog = {

// classer par sous-categories
    WineSubcategory: async () => {
        const sql = `SELECT
                p.id,
                p.name,
                p.description,
                p.price,
                p.image,
                s.id AS subcategory_id,
                s.label AS subcategory_label
            FROM product p
            JOIN category c
                ON p.category_id = c.id
            JOIN subcategory s
                ON p.subcategory_id = s.id
            WHERE LOWER(c.label) = 'vin'
            ORDER BY s.label, p.name`;

        const result = await db.query(sql);
        return result.rows;
    },

//classés par producteur
    WineProducer: async () => {
        const sql = `SELECT
                p.id,
                p.name,
                p.description,
                p.price,
                p.image,
                pr.id AS producer_id,
                pr."compagnyName" AS producer_name
            FROM product p
            JOIN category c
                ON p.category_id = c.id
            JOIN producer pr
                ON p.producer_id = pr.id
            WHERE LOWER(c.name) = 'vin'
            ORDER BY pr."compagnyName", p.name`;

        const result = await db.query(sql);
        return result.rows;
    }
};