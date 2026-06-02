import { ProducterModel } from "../models/producter_models.js"; // Import du modèle

export const getProducerProfilePublic = async (req, res) => {
    try {
        const producerId = req.params.id; // On capte l'id dans l'URL
        const producer = await ProducterModel.getProfilePublic(producerId);
        const products = await ProducterModel.getProductsPublic(producerId);

        if (!producer) {
            return res.status(404).json({error: "Producteur introuvable" });
        }

        // Envoi de la réponse combinée en JSON pur
        return res.status(200).json({
            producer: producer,
            products: products
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erreur serveur lors de la récupération du profil public." });
    }
};

const getProducerId = (req) => 1; 

// Modifier le profil
export const updateProducerProfile = async (req, res) => {
    try {
        const producerId = getProducerId(req);
        const { compagnyName, presentation } = req.body; // Récupère les données reçues
        
        await ProducterModel.updateProfile(producerId, compagnyName, presentation);
        res.status(200).json({ message: "Profil mis à jour" }); // Réponse Succès
    } catch (error) {
        res.status(500).json({ error: "Erreur modification profil" }); // Réponse Erreur
    }
};

export const getAllProducersPublic = async (req, res) => {
    const client = new Client(dbConfig);
    try {
        await client.connect();

        // On demande à la base de données le nom, l'image et le nom de l'artisan
        const query = `
            SELECT 
                p.id AS producer_id,
                p.compagnyname,
                p.image AS producer_image,
                u.firstname,
                u.lastname
            FROM producer p
            JOIN users u ON p.user_id = u.id;
        `;
        
        const result = await client.query(query);
        // On renvoie le résultat au format JSON
        res.status(200).json(result.rows);

    } catch (error) {
        console.error("Erreur catalogue :", error);
        res.status(500).json({ error: "Erreur serveur" });
    } finally {
        await client.end();
    }
};

// Obtenir les statistiques mensuelles
export const getProducerStats = async (req, res) => {
    try {
        const producerId = getProducerId(req);
        const stats = await ProducterModel.getStats(producerId);
        res.status(200).json(stats); 
    } catch (error) {
        res.status(500).json({ error: "Erreur statistiques" });
    }
};

// Obtenir le catalogue de produits
export const getProducerProducts = async (req, res) => {
    try {
        const producerId = getProducerId(req);
        const products = await ProducterModel.getProducts(producerId);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: "Erreur catalogue" });
    }
};

// Ajouter un produit
export const addProducerProduct = async (req, res) => {
    try {
        const producerId = getProducerId(req);
        const { name, description, price, image, category_id, subcategory_id } = req.body;
        
        await ProducterModel.addProduct(name, description, price, image, producerId, category_id, subcategory_id);
        res.status(201).json({ message: "Produit ajouté !" });
    } catch (error) {
        res.status(500).json({ error: "Erreur ajout produit" });
    }
};

// Ajouter un événement
export const addProducerEvent = async (req, res) => {
    try {
        const { title, date, description, location } = req.body;
        
        await ProducterModel.addEvent(title, date, description, location);
        res.status(201).json({ message: "Événement créé !" });
    } catch (error) {
        res.status(500).json({ error: "Erreur événement" });
    }
};

// Obtenir la liste des commandes reçues
export const getProducerOrders = async (req, res) => {
    try {
        const producerId = getProducerId(req);
        const orders = await ProducterModel.getOrders(producerId);
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: "Erreur commandes" });
    }
};

// Modifier le statut d'une commande (ex: En préparation -> Prêt)
export const updateOrderStatus = async (req, res) => {
    try {
        const orderId = req.params.id; // Récupère l'ID dans l'URL
        const { status } = req.body;
        
        await ProducterModel.updateStatus(orderId, status);
        res.status(200).json({ message: "Statut mis à jour !" });
    } catch (error) {
        res.status(500).json({ error: "Erreur statut" });
    }
};