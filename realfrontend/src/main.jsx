import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./style/global.css"; // Assure-toi que le chemin est correct

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);