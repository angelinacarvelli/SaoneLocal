import express from "express";
import { 
    updateProducerProfile, 
    getProducerStats, 
    getProducerProducts, 
    addProducerProduct, 
    addProducerEvent, 
    getProducerOrders, 
    updateOrderStatus 
} from "../controller/producter_controller.js"; // Import des fonctions du contrôleur

const router = express.Router();

// Routes pour le profil et les stats
router.put('/profile', updateProducerProfile);
router.get('/stats/monthly', getProducerStats);

// Routes pour la gestion des produits
router.get('/products', getProducerProducts);
router.post('/products', addProducerProduct);

// Route pour les événements
router.post('/events', addProducerEvent);

// Routes pour la gestion des commandes
router.get('/orders', getProducerOrders);
router.patch('/orders/:id/status', updateOrderStatus); // ":id" est une variable dynamique

export default router; // Permet d'importer ce fichier dans ton app.js / server.js principal