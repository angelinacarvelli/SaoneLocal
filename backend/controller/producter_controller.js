import { ProducterModel } from "../models/producter_models.js";
import db from "../config/db.js";

const resolveProducerId = (req) => ProducterModel.getIdByUser(req.user.id);

// STATS / CHIFFRE D'AFFAIRES
export const getProducerStats = async (req, res) => {
    try {
        const producerId = await resolveProducerId(req);
        if (!producerId) return res.status(403).json({ error: "Aucune fiche producteur associée" });
        const stats = await ProducterModel.getStats(producerId);
        res.status(200).json(stats);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors du calcul des statistiques" });
    }
};

// PROFIL PRO
export const updateProducerProfile = async (req, res) => {
    try {
        const producerId = await resolveProducerId(req);
        if (!producerId) return res.status(403).json({ error: "Aucune fiche producteur associée" });
        const { compagnyName, presentation } = req.body;
        await ProducterModel.updateProfile(producerId, compagnyName, presentation);
        res.status(200).json({ message: "Profil mis à jour" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur modification profil" });
    }
};

// PRODUITS
export const getProducerProducts = async (req, res) => {
    try {
        const producerId = await resolveProducerId(req);
        if (!producerId) return res.status(403).json({ error: "Aucune fiche producteur associée" });
        res.status(200).json(await ProducterModel.getProducts(producerId));
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur catalogue" });
    }
};

export const addProducerProduct = async (req, res) => {
    try {
        const producerId = await resolveProducerId(req);
        if (!producerId) return res.status(403).json({ error: "Aucune fiche producteur associée" });
        const { name, description, price, image, category_id, subcategory_id } = req.body;
        await ProducterModel.addProduct(name, description, price, image, producerId, category_id, subcategory_id);
        res.status(201).json({ message: "Produit inséré avec succès !" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur ajout produit" });
    }
};

// ÉVÉNEMENTS
export const addProducerEvent = async (req, res) => {
    try {
        const { title, date, description, location } = req.body;
        await ProducterModel.addEvent(title, date, description, location);
        res.status(201).json({ message: "Événement créé avec succès !" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur création événement" });
    }
};

// COMMANDES DU PRODUCTEUR
export const getProducerOrders = async (req, res) => {
    try {
        const producerId = await resolveProducerId(req);
        if (!producerId) return res.status(403).json({ error: "Aucune fiche producteur associée" });
        res.status(200).json(await ProducterModel.getOrders(producerId));
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur commandes" });
    }
};

// MISE EN LIGNE DU STATUT D'UNE COMMANDE
export const updateOrderStatus = async (req, res) => {
    try {
        const orderId = req.params.id;
        const { status } = req.body;
        await ProducterModel.updateStatus(orderId, status);
        res.status(200).json({ message: "Statut mis à jour !" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur mise à jour statut" });
    }
};

// ---- ROUTES PUBLIQUES ----
export const getProducerProfilePublic = async (req, res) => {
    try {
        const producerId = req.params.id;
        const queryProducer = `
            SELECT p.id, p."compagnyName", p.presentation, p.image, u.firstname, u.lastname
            FROM "producer" p JOIN "users" u ON p.user_id = u.id WHERE p.id = $1`;
        const producerRes = await db.query(queryProducer, [producerId]);
        if (producerRes.rows.length === 0) return res.status(404).json({ error: "Producteur introuvable" });

        const productsRes = await db.query('SELECT * FROM "product" WHERE producer_id = $1', [producerId]);
        return res.status(200).json({ producer: producerRes.rows[0], products: productsRes.rows });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erreur serveur profil public." });
    }
};

export const getAllProducers = async (_req, res) => {
    try {
        const result = await db.query('SELECT * FROM "producer"');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getProducerTopProducts = async (req, res) => {
    try {
        const result = await db.query(
            'SELECT * FROM "product" WHERE producer_id = $1 ORDER BY sales_count DESC LIMIT 4',
            [req.params.id]
        );
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
