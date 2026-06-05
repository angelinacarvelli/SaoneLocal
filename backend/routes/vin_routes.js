import express from "express";
import {
    wine_by_subcategory,
    wine_by_producer
}
from "../controller/vin_controller.js";

const router = express.Router();

router.get("/wine_subcategory", wine_by_subcategory);

router.get("/wine_producer", wine_by_producer);

export default router;