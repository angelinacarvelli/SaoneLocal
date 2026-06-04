import express from "express";

import {
    customer_profile,
    update_customerProfile,
    customer_orders,
    customer_purchase_History,
    get_recommendations,
    get_favorites,
    get_basket
} from "../controller/client_controller.js";

const router = express.Router();

// Profil client
router.get('/profile', customer_profile);
router.put('/profile', update_customerProfile);

// Commandes / historique
router.get('/orders', customer_orders);
router.get('/purchases', customer_purchase_History);

// Favoris
router.get('/favorites', get_favorites);

//Panier
router.get('/basket', get_basket);

// Événements
router.get('/events', MyEvents);
router.post('/events/:id/join', joinEvent);

// Recommandations
router.get('/recommendations', get_recommendations);