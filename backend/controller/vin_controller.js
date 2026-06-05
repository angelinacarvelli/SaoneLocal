import {WineCatalog}
from "../models/vin_models.js";

// classer par sous-categories
export const wine_by_subcategory = async (req, res) => {
    try {
        const wines = await WineCatalog.WineSubcategory();
        res.status(200).json(wines);
    } catch (error) {
        res.status(500).json({
            error: "Erreur catalogue vin-subcategory"
        });
    }
};

//classés par producteur
export const wine_by_producer = async (req, res) => {
    try {
        const wines = await WineCatalog.WineProducer();
        res.status(200).json(wines);
    } catch (error) {
        res.status(500).json({
            error: "Erreur catalogue vin-producteurs"
        });
    }
};