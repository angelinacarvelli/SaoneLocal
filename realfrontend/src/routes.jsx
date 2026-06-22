import { HomePage } from "./pages/global/Home.jsx";
import { NotFoundPage } from "./pages/global/Not-foundjsx";
import { AboutPage } from "./pages/global/About-us.js"

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
];