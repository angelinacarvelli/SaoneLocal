import mongoose from "mongoose";

// definition du moule (schema) de l'user pour mongodb
const Schema = new mongoose.Schema({
    name:{
        type: String,
        required: true // obligatoire, impossible de save sans nom
    },
    password:{
        type: String,
        required: true // obligatoire, pour le passw hache
    },
    token:{
        type: String,
        required: true // obligatoire, pour stocker le jeton jwt
    }
})

// creation du modele "Collection" lie a la table (collection) "AuthCollection" dans mongo
export const Collection = new mongoose.model("AuthCollection", Schema);

//ATTENTION DB FICTIVE DE LA VIDEO CELA CHANGERA QUAND SELENE FINIRA