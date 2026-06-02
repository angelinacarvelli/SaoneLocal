const get_customerID = (req) => 1;

// FICHE PRODUIT //
export const getProductDetails = async (req, res) => {
    try {

        const productId = req.params.id;

        const product = await ProductDetailsModel.get_productId(productId);
        ///comment
        ///rating

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