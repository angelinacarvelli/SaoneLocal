import { Product } from "../models/produit_models.js";
import db from "../config/db.js";

const uid = (req) => req.user.id;

// CATALOGUE
export const getAllProducts = async (req, res) => {
    try {
        const { category_id } = req.query;
        let query = 'SELECT * FROM "product"';
        const params = [];
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

// FICHE PRODUIT
export const Product_info = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.get_productId(productId);
        if (!product) return res.status(404).json({ error: "Produit introuvable" });
        const rating = await Product.rating_moyenne(productId);
        const comments = await Product.comment_product(productId);
        res.status(200).json({ product, rating, comments });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur fiche produit" });
    }
};

// FAVORIS
export const addToFavorites = async (req, res) => {
    try {
        await Product.favorites_product(uid(req), req.params.id);
        res.status(201).json({ message: "Produit ajouté aux favoris" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur ajout favoris" });
    }
};

export const removeFromFavorites = async (req, res) => {
    try {
        await Product.remove_favorite(uid(req), req.params.id);
        res.status(200).json({ message: "Produit retiré des favoris" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur suppression favoris" });
    }
};

// PANIER
export const addProductToBasket = async (req, res) => {
    try {
        const quantity = Number(req.body?.quantity) || 1;
        const item = await Product.addToBasket(uid(req), req.params.id, quantity);
        res.status(201).json({ message: "Produit ajouté au panier", item });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur ajout panier" });
    }
};

// CATALOGUE 
export const getCatalogBySubcategory = async (req, res) => {
    try {
        const { category } = req.query;
        const data = await Product.getCommonCatalogBySubcategory(category || 'boulangerie');
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Erreur catalogue commun sous-catégorie" });
    }
};

export const getCatalogByProducer = async (req, res) => {
    try {
        const { category } = req.query;
        const data = await Product.getCommonCatalogByProducer(category || 'boulangerie');
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Erreur catalogue commun producteur" });
    }
};
