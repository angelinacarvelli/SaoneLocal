import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import { attachUser } from "../middleware/auth.js";
import authRoutes from "../routes/auth_routes.js";
import clientRoutes from "../routes/client_route.js";
import producterRoutes from "../routes/producter_routes.js";
import produitRoutes from "../routes/produit_routes.js";
import { register, registerProducer, login } from "../controller/auth_controller.js";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- Middlewares globaux ---
app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(attachUser);

if (!process.env.JWT_SECRET) {
    console.warn("f3a9c1e7b25d84906af1c3e8d7b60245aa19ff3c8e21d4675b0a9c8e1f2d3b4c");
}

app.use(express.static(path.join(__dirname, "../../realfrontend/dist"), {
    setHeaders: (res, filePath) => {
        if (filePath.endsWith(".js")) res.setHeader("Content-Type", "application/javascript");
        else if (filePath.endsWith(".css")) res.setHeader("Content-Type", "text/css");
    }
}));

// --- API ---
app.use("/api/auth", authRoutes);
app.use("/api/client", clientRoutes);
app.use("/api/producer", producterRoutes);
app.use("/api/products", produitRoutes);

app.post("/signup", register);
app.post("/signup-producer", registerProducer);
app.post("/login", login);

app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(path.join(__dirname, "../../realfrontend/dist/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur unifié démarré sur le port ${PORT}`));
