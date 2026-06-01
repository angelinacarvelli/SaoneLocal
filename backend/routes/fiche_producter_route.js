import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { 
    getProducerProfilePublic,
    updateProducerProfile, 
    getProducerStats, 
    getProducerProducts, 
    addProducerProduct, 
    addProducerEvent, 
    getProducerOrders, 
    updateOrderStatus 
} from "../controller/producter_controller.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Route qui renvoie l'écran HTML brut sur le navigateur
router.get('/producers', (req, res) => {
    // CORRECTION ICI : "ficheproducter.html" pile comme ton fichier !
    res.sendFile(path.join(__dirname, "../frontend/ficheproducter.html"));
});

// Route API appelée en arrière-plan par le script de ta page
router.get('/api/producers', getProducerProfilePublic);

router.put('/profile', updateProducerProfile);
router.get('/stats/monthly', getProducerStats);
router.get('/products', getProducerProducts);
router.post('/products', addProducerProduct);
router.post('/events', addProducerEvent);
router.get('/orders', getProducerOrders);
router.patch('/orders/:id/status', updateOrderStatus);

export default router;