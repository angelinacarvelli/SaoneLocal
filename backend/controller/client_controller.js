import { Customer } from "../models/customer_models.js";

// ID client simulé en dur (id = 1) comme convenu dans votre architecture actuelle
const get_customerID = (req) => 1;

// PROFIL CLIENT
export const customer_profile = async (req, res) => {
    try {
        const id = get_customerID(req);
        const profile = await Customer.info_profil(id);
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ error: "Erreur récupération profil client" });
    }
};

export const update_customerProfile = async (req, res) => {
    try {
        const id = get_customerID(req);
        const { firstname, lastname, email, phone, image } = req.body;
        await Customer.update_profile(id, firstname, lastname, email, phone, image);
        res.status(200).json({ message: "Profil mis à jour avec succès" });
    } catch (error) {
        res.status(500).json({ error: "Erreur modification profil client" });
    }
};

// COMMANDES
export const customer_orders = async (req, res) => {
    try {
        const id = get_customerID(req);
        const orders = await Customer.traking_order(id);
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: "Erreur suivi des commandes" });
    }
};

export const customer_purchase_History = async (req, res) => {
    try {
        const id = get_customerID(req);
        const history = await Customer.purchase_history(id);
        res.status(200).json(history);
    } catch (error) {
        res.status(500).json({ error: "Erreur historique d'achats" });
    }
};

// FAVORIS (La fonction qui résout votre problème)
export const get_favorites = async (req, res) => {
    try {
        const id = get_customerID(req);
        const favorites = await Customer.list_favorites(id);
        res.status(200).json(favorites); // Envoie le tableau p.* de la table product
    } catch (error) {
        res.status(500).json({ error: "Erreur lors du chargement des favoris" });
    }
};

// PANIER
export const get_basket = async (req, res) => {
    try {
        const id = get_customerID(req);
        const basket = await Customer.list_basket(id);
        res.status(200).json(basket);
    } catch (error) {
        res.status(500).json({ error: "Erreur récupération du panier" });
    }
};
export const customer_purchase_History = async (req, res) => {
    try {
        const history = await Customer.purchase_history(get_customerID(req));
        res.status(200).json(history);
    } catch (error) { res.status(500).json({ error: "Erreur" }); }
};

export const get_favorites = async (req, res) => {
    try {
        const favorites = await Customer.list_favorites(get_customerID(req));
        res.status(200).json(favorites);
    } catch (error) { res.status(500).json({ error: "Erreur" }); }
};

export const getAllEvents = async (req, res) => {
    try {
        const events = await Customer.listAllEvents();
        res.status(200).json(events);
    } catch (error) { res.status(500).json({ error: "Erreur" }); }
};

export const joinEvent = async (req, res) => {
    try {
        await Customer.joinEvent(get_customerID(req), req.body.event_id);
        res.status(200).json({ message: "Inscrit" });
    } catch (error) { res.status(500).json({ error: "Erreur" }); }
};

// ÉVÉNEMENTS
export const MyEvents = async (req, res) => {
    try {
        const id = get_customerID(req);
        const events = await Customer.list_events(id);
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: "Erreur récupération des événements" });
    }
};

export const joinEvent = async (req, res) => {
    try {
        const id = get_customerID(req);
        const eventId = req.params.id;
        await Customer.joinEvent(id, eventId);
        res.status(200).json({ message: "Inscription à l'événement validée" });
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de l'inscription à l'événement" });
    }
};

// RECOMMANDATIONS
export const get_recommendations = async (req, res) => {
    try {
        const recommendations = await Customer.product_recommendations();
        res.status(200).json(recommendations);
    } catch (error) {
        res.status(500).json({ error: "Erreur récupération des recommandations" });
    }
};