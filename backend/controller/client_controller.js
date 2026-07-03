import { Customer } from "../models/client_models.js";

const uid = (req) => req.user.id;

// PROFIL
export const customer_profile = async (req, res) => {
    try {
        const profile = await Customer.info_profil(uid(req));
        res.status(200).json(profile);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur récupération profil client" });
    }
};

export const update_customerProfile = async (req, res) => {
    try {
        const { firstname, lastname, email, phone, image } = req.body;
        await Customer.update_profile(uid(req), firstname, lastname, email, phone, image);
        res.status(200).json({ message: "Profil mis à jour avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur modification profil client" });
    }
};

// COMMANDES
export const customer_orders = async (req, res) => {
    try {
        const orders = await Customer.traking_order(uid(req));
        res.status(200).json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur suivi des commandes" });
    }
};

export const customer_purchase_History = async (req, res) => {
    try {
        const history = await Customer.purchase_history(uid(req));
        res.status(200).json(history);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur historique d'achats" });
    }
};

// CHECKOUT (panier -> commande)
export const checkout = async (req, res) => {
    try {
        const result = await Customer.checkout(uid(req));
        if (result.error) return res.status(400).json({ error: result.error });
        res.status(201).json({ message: "Commande créée", order: result.order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la validation de la commande" });
    }
};

// FAVORIS
export const get_favorites = async (req, res) => {
    try {
        const favorites = await Customer.list_favorites(uid(req));
        res.status(200).json(favorites);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors du chargement des favoris" });
    }
};

// PANIER
export const get_basket = async (req, res) => {
    try {
        const basket = await Customer.list_basket(uid(req));
        res.status(200).json(basket);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur récupération du panier" });
    }
};

export const update_basket_item = async (req, res) => {
    try {
        const productId = req.params.id;
        const { quantity } = req.body;
        await Customer.update_basket_item(uid(req), productId, Number(quantity));
        res.status(200).json({ message: "Panier mis à jour" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur mise à jour du panier" });
    }
};

export const remove_basket_item = async (req, res) => {
    try {
        await Customer.remove_basket_item(uid(req), req.params.id);
        res.status(200).json({ message: "Produit retiré du panier" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur suppression du panier" });
    }
};

// ÉVÉNEMENTS
export const getAllEvents = async (_req, res) => {
    try {
        res.status(200).json(await Customer.listAllEvents());
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur récupération des événements" });
    }
};

export const MyEvents = async (req, res) => {
    try {
        res.status(200).json(await Customer.list_events(uid(req)));
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur récupération des événements" });
    }
};

export const joinEvent = async (req, res) => {
    try {
        await Customer.joinEvent(uid(req), req.params.id);
        res.status(200).json({ message: "Inscription à l'événement validée" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de l'inscription à l'événement" });
    }
};

// RECOMMANDATIONS (public)
export const get_recommendations = async (_req, res) => {
    try {
        res.status(200).json(await Customer.product_recommendations());
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur récupération des recommandations" });
    }
};
