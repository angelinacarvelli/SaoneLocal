import { Client } from 'pg';
import dotenv from "dotenv";

dotenv.config();

const dbConfig = {
    user: process.env.user,
    host: process.env.host,
    database: process.env.name,
    password: process.env.password,
    port: process.env.port,
};

export const getProducerProfile = async (req, res) => {
    const client = new Client(dbConfig);
    try {
        await client.connect();
        const producerId = req.params.id;

        // 1. Récupération du producteu
        const producerQuery = `
            SELECT 
                p.id AS producer_id,
                p.compagnyname,
                p.presentation,
                p.image AS producer_image,
                u.firstname,
                u.lastname,
                e.title AS event_title,
                e.location AS event_location
            FROM producer p
            JOIN users u ON p.user_id = u.id
            LEFT JOIN event e ON p.event_id = e.id
            WHERE p.id = $1;
        `;
        
        const producerRes = await client.query(producerQuery, [producerId]);
        
        if (producerRes.rows.length === 0) {
            return res.status(404).render('errors/404', { title: "Producteur introuvable" });
        }

        const producer = producerRes.rows[0];

        const productsQuery = `
            SELECT 
                p.id,
                p.name,
                p.description,
                p.price,
                p.image,
                p.sales_count,
                c.label AS category_label
            FROM product p
            JOIN category c ON p.category_id = c.id
            WHERE p.producer_id = $1
            ORDER BY p.sales_count DESC;
        `;
        
        const productsRes = await client.query(productsQuery, [producerId]);
        const topProducts = productsRes.rows;

        res.render('producer-profile', {
            title: `Fiche de ${producer.compagnyname}`,
            producer: producer,
            products: topProducts
        });

    } catch (error) {
        console.error("Erreur lors de la récupération de la fiche producteur :", error);
        res.status(500).render('errors/500', { error: "Erreur serveur" });
    } finally {
        await client.end();
    }
};

// Action d'ajout au panier (POST) sans quitter la page
export const addToCart = async (req, res) => {
    const { productId, producerId } = req.body;

    // Exemple de stockage temporaire en session HTTP (standard en MVC)
    if (!req.session) req.session = {}; 
    if (!req.session.cart) req.session.cart = [];

    req.session.cart.push({
        product_id: productId,
        quantity: 1
    });

    res.redirect(`/producers/${producerId}`);
};