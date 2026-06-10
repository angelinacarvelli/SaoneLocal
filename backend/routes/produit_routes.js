import express from "express";
import {
    getAllProducts,
    Product_info,
    addProductToBasket,
    addToFavorites,
    getCatalogBySubcategory,
    getCatalogByProducer
} from "../controller/produit_controller.js";

const router = express.Router();

router.get("/", getAllProducts);

// Routes communes dynamiques (remplace l'ancien fichier vin séparé)
router.get("/common/subcategory", getCatalogBySubcategory);
router.get("/common/producer", getCatalogByProducer);

router.get("/:id", Product_info);
router.post("/:id/cart", addProductToBasket);
router.post("/:id/favorite", addToFavorites);

export default router;