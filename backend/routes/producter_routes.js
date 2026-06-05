import express from "express";
import { 
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

router.put('/profile', updateProducerProfile);
router.get('/stats/monthly', getProducerStats);
router.get('/products', getProducerProducts);
router.post('/products', addProducerProduct);
router.post('/events', addProducerEvent);
router.get('/orders', getProducerOrders);
router.patch('/orders/:id/status', updateOrderStatus);

router.get('/catalog', getAllProducers);
router.get('/:id/top-products', getProducerTopProducts);

export default router;