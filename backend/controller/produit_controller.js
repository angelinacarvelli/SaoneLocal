import { Product } from "../models/produit_models.js";
import db from "../config/db.js";

const get_customerID = (req) => 1;

export const getAllProducts = async (req, res) => {
    try {
        const { category_id } = req.query;
        let query = 'SELECT * FROM "product"';
        let params = [];

        if (category_id) {
            query += ' WHERE category_id = $1';
            params.push(category_id);
        }

        const result = await db.query(query, params);
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// FICHE PRODUIT //
export const Product_info = async (req, res) => {
    try {

        const productId = req.params.id;

        const product = await Product.get_productId(productId);
        const rating = await Product.rating_moyenne(productId);
        const comments = await Product.comment_product(productId);

        res.status(200).json({
            product,
            rating,
            comments
        });

    } catch (error) {
        res.status(500).json({
            error: "Erreur fiche produit"
        });
    }
};

// FAVORIS //
export const addToFavorites = async (req, res) => {
    try {

        const customerId = get_customerID(req);
        const productId = req.params.id;

        await Product.favorites_product(
            customerId,
            productId
        );

        res.status(201).json({
            message: "Produit ajouté aux favoris"
        });

    } catch (error) {
        res.status(500).json({
            error: "Erreur ajout favoris"
        });
    }
};

///// Panier //////
export const addProductToBasket = async (req, res) => {
    try {

        const customerId = get_customerID(req);
        const productId = req.params.id;
        const {quantity} = req.body;

        await Product.addToBasket(
            customerId,
            productId,
            quantity
        );

        res.status(201).json({
            message: "Produit ajouté au panier"
        });

    } catch (error) {
        res.status(500).json({
            error: "Erreur ajout panier"
        });
    }
};

// CATALOGUE COMMUN DYNAMIQUE //
export const getCatalogBySubcategory = async (req, res) => {
    try {
        const { category } = req.query; // ex: ?category=vin ou ?category=boulangerie
        const data = await Product.getCommonCatalogBySubcategory(category || 'vin');
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Erreur catalogue commun sous-catégorie" });
    }
};

export const getCatalogByProducer = async (req, res) => {
    try {
        const { category } = req.query; // ex: ?category=vin ou ?category=boulangerie
        const data = await Product.getCommonCatalogByProducer(category || 'vin');
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Erreur catalogue commun producteur" });
    }
};