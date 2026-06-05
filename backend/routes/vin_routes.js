import express from "express";
import {
    wine_by_subcategory,
    wine_by_producer
}
from "../controller/wine_catalog_controller.js";

const router = express.Router();

router.get("/wine_subcategory", wine_by_subcategory);

router.get("/wine_producer", wine_by_producer);

export default router;