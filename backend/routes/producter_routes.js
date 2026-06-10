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
    updateOrderStatus,
    getAllProducers,
    getProducerTopProducts
} from "../controller/producter_controller.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Route pour afficher la page du catalogue des producteurs
router.get('/catalogue', (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/catalogue/catalogue_producter.html"));
});

// Route pour afficher la fiche d'un producteur spécifique
router.get('/producers', (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/page.accueil/ficheproducter.html"));
});

// Route API appelée en arrière-plan par le script de ta page
router.get('/api/producers/:id', getProducerProfilePublic);

router.put('/profile', updateProducerProfile);
router.get('/stats/monthly', getProducerStats);
router.get('/products', getProducerProducts);
router.post('/products', addProducerProduct);
router.post('/events', addProducerEvent);
router.get('/orders', getProducerOrders);
router.patch('/orders/:id/status', updateOrderStatus);
router.patch('/events/:id/status', updateEventStatus);

router.get('/catalog', getAllProducers); // C'est cette route qui donne tous les producteurs !
router.get('/:id/top-products', getProducerTopProducts);

export default router;