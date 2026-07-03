import express from "express";
import { authRequired } from "../middleware/auth.js";
import {
    getProducerProfilePublic,
    updateProducerProfile,
    getProducerStats,
    getProducerProducts,
    addProducerProduct,
    addProducerEvent,
    getProducerOrders,
    updateOrderStatus,
    getAllProducers,
    getProducerTopProducts
} from "../controller/producter_controller.js";

const router = express.Router();
// Public
router.get('/catalog', getAllProducers);            // tous les producteurs
router.get('/producers/:id', getProducerProfilePublic);
router.get('/:id/top-products', getProducerTopProducts);

// Espace producteur (connecté)
router.put('/profile', authRequired, updateProducerProfile);
router.get('/stats/monthly', authRequired, getProducerStats);
router.get('/products', authRequired, getProducerProducts);
router.post('/products', authRequired, addProducerProduct);
router.post('/events', authRequired, addProducerEvent);
router.get('/orders', authRequired, getProducerOrders);
router.patch('/orders/:id/status', authRequired, updateOrderStatus);

export default router;