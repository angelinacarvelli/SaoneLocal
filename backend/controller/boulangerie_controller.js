import {BakeryCatalog}
from "../models/boulangerie_models.js";

// classer par sous-categories
export const bakery_by_subcategory = async (req, res) => {
    try {
        const bakery = await BakeryCatalog.BakerySubcategory();
        res.status(200).json(bakery);
    } catch (error) {
        res.status(500).json({
            error: "Erreur catalogue boulangerie-subcategory"
        });
    }
};

//classés par producteur
export const bakery_by_producer = async (req, res) => {
    try {
        const bakery = await BakeryCatalog.BakeryProducer();
        res.status(200).json(bakery);
    } catch (error) {
        res.status(500).json({
            error: "Erreur catalogue boulangerie-producteurs"
        });
    }
};