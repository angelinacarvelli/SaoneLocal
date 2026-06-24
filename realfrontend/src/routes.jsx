import { HomePage } from "./pages/global/Home.jsx";
import { NotFoundPage } from "./pages/global/Not-foundjsx";
import { AboutPage } from "./pages/global/About-us.js"
import { Profile_Client } from './pages/client/Profile-Client.jsx';
import { Modif_Client } from './pages/client/Modif_Client';
import { Profil_Producteur } from './pages/producteur/Profil_Producteur';
import { Modif_Producteur } from './pages/producteur/Modif_Producteur';
import { Plus_sur_Nous } from "./pages/global/Plus_sur_Nous.jsx";
import { Mentions_Legales } from "./pages/global/Mentions_Legales.jsx";
import { Contact } from "./pages/global/Contact.jsx";
import { Compte_Acceuil } from "./pages/global/Compte_Acceuil.jsx";
import { Commande_Success } from "./pages/global/Commande_Success.jsx";
import { Producer_List } from './pages/producteur/Producer-List';

export const routes = [
  {
    path: "/",
    label: "Accueil",
    component: HomePage,
    showInNav: true,
  },
  {
    path: "/a-propos",
    label: "À propos",
    component: AboutPage,
    showInNav: true,
  },
  {
    path: "*",
    label: "Page introuvable",
    component: NotFoundPage,
  },
    {
    path: "/profile_client",
    label: "Mon compte client",
    component: Profile_Client,
    showInNav: true,
  },  
  {
    path: "/modif_client",
    label: "Modifier mon compte",
    component: Modif_Client,
    showInNav: true,
  },  
  {
    path: "/profil_producteur",
    label: "Mon compte producteur",
    component: Profil_Producteur,
    showInNav: true,
  },  
  {
    path: "/modif_producteur",
    label: "Modifier mon compte",
    component: Modif_Producteur,
    showInNav: true,
  },
  {
    path: "/plus_sur_nous",
    label: "Plus sur Nous",
    component: Plus_sur_Nous,
    showInNav: true,
  },
  {
    path: "/mentions_legales",
    label: "Mentions Légales",
    component: Mentions_Legales,
    showInNav: true,
  },
  {
    path: "/contact",
    label: "Contact",
    component: Contact,
    showInNav: true,
  },
  {
    path: "/compte_acceuil",
    label: "Compte Acceuil",
    component: Compte_Acceuil,
    showInNav: true,
  },
  {
    path: "/commande_success",
    label: "Commande Succes",
    component: Commande_Success,
    showInNav: true,
  },
  {
    path: "/producer-list",
    label: "Fiches Producteurs",
    component: Producer_List,
    showInNav: true,
  }
];