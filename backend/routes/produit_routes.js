import express from "express";

import {
    Product_info
} from "../controller/produit_controller.js";

const router = express.Router();

router.get("/:id", Product_info);

export default router;

/// Rajouter rating / comment / favoris / panier