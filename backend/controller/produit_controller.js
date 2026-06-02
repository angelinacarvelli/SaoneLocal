const get_customerID = (req) => 1;

// FICHE PRODUIT //
export const Product_info = async (req, res) => {
    try {

        const productId = req.params.id;

        const product = await Product_info.get_productId(productId);
        const rating = await Product_info.rating_moyenne(productId);
        const comments = await Product_info.getComments(productId);

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

        const customerId = get_customerId(req);
        const productId = req.params.id;

        await Product_info.favorites_product(
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
//......