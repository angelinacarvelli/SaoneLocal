import express from "express";

import {
    customer_profile,
    update_customerProfile,
    customer_orders,
    customer_purchase_History,
    get_recommendations
} from "../controller/client_controller.js";

const router = express.Router();

// Profil client
router.get('/profile', customer_profile);
router.put('/profile', update_customerProfile);

// Commandes / historique
router.get('/orders', customer_orders);
router.get('/purchases', customer_purchase_History);

//////// Favoris //////////:
//......
// acceder aux favoris 
    //-> lien vers la page favoris
    //-> affiche les produits mis en favoris
    //->peut appuiyer sur le coeur pour les enlevés

//////// Panier //////////
//......

//////// Event //////////:
//......
// acceder aux événement
    //-> lien vers la page des evenement
    //-> affiche les evenement auquel il participe
    //-> bouton pour enlever l'evenement (comme favoris) ?
// Recommandations
router.get('/recommendations', get_recommendations);