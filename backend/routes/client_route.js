// modifier mon profil
    //-> lien vers page modifier profil
    //-> récupérer les informations que l'utilisateur met dans les champs
    //-> pour images, ouvrir les fichier de l'utilisateur
    //-> mettre a jour la database et la page apres enregistrement des informations
    //-> si supprimer le compte, supprime le compte et info liée de la database
import express from "express";

import {
    customer_profile,
    update_customerProfile,
} from "../controller/client_controller.js";

const router = express.Router();

// Profil client
router.get('/profile', customer_profile);
router.put('/profile', update_customerProfile);


// acceder aux favoris 
    //-> lien vers la page favoris
    //-> affiche les produits mis en favoris
    //->peut appuiyer sur le coeur pour les enlevés

// acceder aux événement
    //-> lien vers la page des evenement
    //-> affiche les evenement auquel il participe
    //-> bouton pour enlever l'evenement (comme favoris) ?

// suivre le statut de mes commandes
    //-> affiche texte dans database de la commande la plus récente

// historique de mes commandes
    //-> affiche les informations des commandes passer 
    //-> (supprimer au bout d'un an ?)

// recommandation
    //-> affiche 3 produit aléatoire en suggestion cliquable
    //->peut les mettre en favoris
    //->peut les ajouter au panier
