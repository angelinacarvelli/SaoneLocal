import  HomePage  from "./pages/global/Home.jsx";
import  NotFoundPage  from "./pages/global/Not-found.jsx";
import  Profile_Client  from './pages/client/Profile-Client.jsx';
import  Modif_Client  from './pages/client/Modif-Client.jsx';
import  Profile_Producer  from './pages/producer/Profile-Producer.jsx';
import  Modif_Producer  from './pages/producer/Modif-Producer.jsx';
import   More_On_Us  from "./pages/global/More-On-Us.jsx";
import  Legal_Notice  from "./pages/global/Legal-Notice.jsx";
import  Contact  from "./pages/global/Contact.jsx";
import  Account_Home  from "./pages/global/Account-Home.jsx";
import  Success_Order  from "./pages/global/Success_Order.jsx";
import  Producer_List  from './pages/producer/Producer-List.jsx';
import  Home_Catalog  from './pages/catalog/Home-Catalog.jsx';
import  Profile_Admin  from './pages/producer/Profile-Admin.jsx';
import LoginPage from './pages/client/login-client.jsx';
import ProducerLoginPage from './pages/producer/login-producter.jsx';
import SignupProducerPage from './pages/producer/signup-producter.jsx';
import SignupClientPage from './pages/client/signup-client.jsx';
import  Event  from "./pages/global/Event.jsx";
import  Favorites  from "./pages/client/favoris.jsx";
import  Cart  from "./pages/client/panier.jsx";
import  Search1  from "./pages/search/Search1.jsx";
import  Search2  from "./pages/search/Search2.jsx";
import  Search3  from "./pages/search/Search3.jsx";
import ProductDetail from './pages/catalog/fiche_produit.jsx';
import ProducerDetail from './pages/fiche-producer.jsx/Karim.jsx';
import  Wine_Sort_Product from './pages/catalog/Wine-sort-product.jsx';
import  Wine_Sort_Producer from './pages/catalog/Wine-sort-producer.jsx';
import  Bakery_Sort_Product from './pages/catalog/Bakery-sort-product.jsx';
import  Bakery_Sort_Producer from './pages/catalog/Bakery-sort-producer.jsx';
import  Vegetables_Sort_Product from './pages/catalog/Vegetables-sort-product.jsx';
import  Vegetables_Sort_Producer from './pages/catalog/Vegetables-sort-producer.jsx';


export const routes = [
  {
    path: "/",
    label: "Accueil",
    component: HomePage,
    showInNav: true,
  },
  {
    path: "/a-propos",
    label: "À propos de nous",
    component: More_On_Us,
    showInNav: true,
  },
    {
    path: "/profile_client",
    label: "Mon compte client",
    component: Profile_Client,
    showInNav: true,
  },  
  {
    path: "/modif-client",
    label: "Modifier mon compte",
    component: Modif_Client,
    showInNav: true,
  },  
  {
    path: "/login-client",
    label: "Connexion Client", 
    component: LoginPage,
    showInNav: true,
  },
    {
    path: "/signup-client",
    label: "Inscription Client",
    component: SignupClientPage,
  },
  {
    path: "/profile_producer",
    label: "Mon compte producteur",
    component: Profile_Producer,
    showInNav: true,
  },  
  {
    path: "/modif_producer",
    label: "Modifier mon compte",
    component: Modif_Producer,
    showInNav: true,
  },
    {
    path: "/login-producter",
    label: "Connexion Producteur",
    component: ProducerLoginPage,
    showInNav: true,
  },
      {
    path: "/signup-producer",
    label: "Inscription Producteur",
    component: SignupProducerPage,
  },
  {
    path: "/more-on-us",
    label: "Plus sur Nous",
    component: More_On_Us,
    showInNav: true,
  },
  {
    path: "/legal-notice",
    label: "Mentions Légales",
    component: Legal_Notice,
    showInNav: true,
  },
  {
    path: "/contact",
    label: "Contact",
    component: Contact,
    showInNav: true,
  },
  {
    path: "/account-home",
    label: "Compte Acceuil",
    component: Account_Home,
    showInNav: true,
  },
  {
    path: "/success-order",
    label: "Commande Succes",
    component: Success_Order,
    showInNav: true,
  },
  {
    path: "/producer-list",
    label: "Fiches Producteurs",
    component: Producer_List,
    showInNav: true,
  },
  {
    path: "/home-catalog",
    label: "Catalogue de nos Produits",
    component: Home_Catalog,
    showInNav: true,
  },
    {
    path: "/ProductDetail-Pain-aux-céréales",
    label: "Détails du produit",
    component: ProductDetail,
    showInNav: true,
  },
      {
    path: "/ProducerDetail-Karim-Benchouia",
    label: "Détails du producteur",
    component: ProducerDetail,
    showInNav: true,
  },
  {
    path: "/profile-admin",
    label: "Mon compte administrateur",
    component: Profile_Admin,
    showInNav: true,
  },
  {
    path: "/success",
    label: "Commande Réussie",
    component: Success_Order,
    showInNav: true,
  },
  {
    path: "/event",
    label: "Calendrier",
    component: Event,
    showInNav: true,
  },
  {
    path: "/search1",
    label: "Rechercher",
    component: Search1,
    showInNav: true,
  },
  {
    path: "/search2",
    label: "Rechercher",
    component: Search2,
    showInNav: true,
  },
  {
    path: "/search3",
    label: "Rechercher",
    component: Search3,
    showInNav: true,
  },
  {
    path: "/wine-sort-product",
    label: "Catalogue vin tri produit",
    component: Wine_Sort_Product,
    showInNav: true,
  },
  {
    path: "/wine-sort-producer",
    label: "Catalogue vin tri producteur",
    component: Wine_Sort_Producer,
    showInNav: true,
  },
  {
    path: "/bakery-sort-product",
    label: "Catalogue boulangerie tri produit",
    component: Bakery_Sort_Product,
    showInNav: true,
  },
  {
    path: "/bakery-sort-producer",
    label: "Catalogue boulangerie tri producteur",
    component: Bakery_Sort_Producer,
    showInNav: true,
  },
  {
    path: "/vegetables-sort-product",
    label: "Catalogue fruits et légumes tri produit",
    component: Vegetables_Sort_Product,
    showInNav: true,
  },
  {
    path: "/vegetables-sort-producer",
    label: "Catalogue fruits et légumes tri producteur",
    component: Vegetables_Sort_Producer,
    showInNav: true,
  },
  {
    path: "/favoris",
    label: "Mes favoris",
    component: Favorites,
    showInNav: true,
  },
    {
    path: "/panier",
    label: "Mon panier",
    component: Cart,
    showInNav: true,
  },
  { 
    path: "*",
    label: "Page introuvable",
    component: NotFoundPage,
  }
];