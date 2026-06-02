//modifier profil
import {Customer} from "../models/client_models.js";

//récupere le client connecter
const customerID = (req) => 1;

// Prend le profil
export const customer_profile = async (req, res) => {
    try {
        const customerId = customerID(req);

        const profile = await Customer.info_profil(customerId);

        res.status(200).json(profile);} 
        catch (error) {
        res.status(500).json({ error: "Erreur profil" });
    }
};

// Modifier le profil
export const update_customerProfile = async (req, res) => {
    try {
        const customerId = customerID(req);

        const {firstname, lastname, phone,} = req.body;

        await Customer.update_profile(
            customerId,
            firstname,
            lastname,
            phone,
        );

        res.status(200).json({
            message: "Profil mise à jour"
        });

    } catch (error) {
        res.status(500).json({
            error: "Erreur modification profil"
        });
    }
};


//acceder panier