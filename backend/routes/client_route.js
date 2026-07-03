import express from "express";
import { authRequired } from "../middleware/auth.js";
import {
    customer_profile,
    update_customerProfile,
    customer_orders,
    customer_purchase_History,
    checkout,
    get_recommendations,
    get_favorites,
    get_basket,
    update_basket_item,
    remove_basket_item,
    MyEvents,
    getAllEvents,
    joinEvent
} from "../controller/client_controller.js";

const router = express.Router();

// Public
router.get('/events/all', getAllEvents);
router.get('/recommendations', get_recommendations);

// Tout le reste nécessite d'être connecté
router.use(authRequired);

// Profil
router.get('/profile', customer_profile);
router.put('/profile', update_customerProfile);

// Commandes / historique / checkout
router.get('/orders', customer_orders);
router.get('/purchases', customer_purchase_History);
router.post('/checkout', checkout);

// Favoris
router.get('/favorites', get_favorites);

// Panier
router.get('/basket', get_basket);
router.patch('/basket/:id', update_basket_item);  // :id = product_id
router.delete('/basket/:id', remove_basket_item);

// Événements
router.get('/events', MyEvents);
router.post('/events/:id/join', joinEvent);

export default router;
