import express from "express";
import {
    bakery_by_subcategory,
    bakery_by_producer
}
from "../controller/boulangerie_controller.js";

const router = express.Router();

router.get("/bakery_subcategory", bakery_by_subcategory);

router.get("/bakery_producer", bakery_by_producer);

export default router;