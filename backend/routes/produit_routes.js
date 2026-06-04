import express from "express";

import {
    Product_info,
    addToFavorites
} from "../controller/produit_controller.js";

const router = express.Router();

router.get("/:id", Product_info);

router.post("/:id/cart", addProductToCart);

router.post("/:id/favorite", addToFavorites);

export default router;
