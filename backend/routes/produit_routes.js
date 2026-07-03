import express from "express";
import { authRequired } from "../middleware/auth.js";
import {
    getAllProducts,
    Product_info,
    addProductToBasket,
    addToFavorites,
    removeFromFavorites,
    getCatalogBySubcategory,
    getCatalogByProducer
} from "../controller/produit_controller.js";

const router = express.Router();

// Public : catalogue et fiche produit
router.get("/", getAllProducts);
router.get("/common/subcategory", getCatalogBySubcategory);
router.get("/common/producer", getCatalogByProducer);
router.get("/:id", Product_info);

// Protégé : panier et favoris
router.post("/:id/cart", authRequired, addProductToBasket);
router.post("/:id/favorite", authRequired, addToFavorites);
router.delete("/:id/favorite", authRequired, removeFromFavorites);

export default router;
