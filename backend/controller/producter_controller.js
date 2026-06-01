import { ProducterModel } from "../models/producter_models.js"; // Import du modèle

// Simule la récupération de l'ID du producteur connecté
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
