//modifier profil
import {Customer} from "../models/client_models.js";

//récupere le client connecter
const get_customerID = (req) => 1;

// Prend le profil
export const customer_profile = async (req, res) => {
    try {
        const customerId = get_customerID(req);

        const profile = await Customer.info_profil(customerId);

        res.status(200).json(profile);} 
        catch (error) {
        res.status(500).json({ error: "Erreur profil" });
    }
};

// Modifier le profil
export const update_customerProfile = async (req, res) => {
    try {
        const customerId = get_customerID(req);

        const {firstname, lastname, phone,} = req.body;

        await Customer.update_profile(
            customerId,
            firstname,
            lastname,
            phone,
        );

        res.status(200).json({
            message: "Profil mise à jour"
        });

    } catch (error) {
        res.status(500).json({
            error: "Erreur modification profil"
        });
    }
};

// Récupérer les commandes
export const customer_orders = async (req, res) => {
    try {
        const customerId = get_customerID(req);

        const orders = await Customer.traking_order(customerId);

        res.status(200).json(orders);

    } catch (error) {
        res.status(500).json({
            error: "Erreur commandes"
        });
    }
};

// Historique des commandes
export const customer_purchase_History = async (req, res) => {
    try {
        const customerId = get_customerID(req);

        const purchases = await Customer.purchase_history(customerId);

        res.status(200).json(purchases);

    } catch (error) {
        res.status(500).json({
            error: "Erreur historique achats"
        });
    }
};

//Favoris
//......

//Panier
//......

//Event
//......

// Recommandations
export const get_recommendations = async (req, res) => {
    try {

        const recommendations = await Customer.product_recommendations();

        res.status(200).json(recommendations);

    } catch (error) {
        res.status(500).json({
            error: "Erreur recommandations"
        });
    }
};

//acceder panier