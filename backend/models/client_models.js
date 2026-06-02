import { Client } from 'pg';
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


/////// modifier le profil//////

export const Customer = {

// Informations du profil pris de la table users
    info_profil: async (id) => {
        const sql = `SELECT id, firstname, lastname, email, phone
            FROM users
            WHERE id = $1
        `;

        const result = await db.query(sql, [id]);
        return result.rows[0];
    },

    
// Modifier le profil
    update_profil: async (id, firstname, lastname, phone) => {
        const sql = `UPDATE users
            SET firstname = $1, lastname = $2, phone = $3,
            WHERE id = $4
        `;

        return await db.query(sql, [
            firstname,
            lastname,
            phone,
            id
        ]);
    }
}