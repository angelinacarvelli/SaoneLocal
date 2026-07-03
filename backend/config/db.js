import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const db = new pg.Pool({
    user: process.env.POSTGRES_USER || process.env.user,
    host: process.env.POSTGRES_HOST || process.env.host,
    database: process.env.POSTGRES_DB || process.env.name,
    password: process.env.POSTGRES_PASSWORD || process.env.password,
    port: process.env.POSTGRES_PORT || process.env.port || 5432,
});

db.connect()
    .then((client) => {
        console.log("Connexion réussie à la base de données PostgreSQL !");
        client.release();
    })
    .catch((err) => console.error("Erreur de connexion à la base de données :", err));

export default db;