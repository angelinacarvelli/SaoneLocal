import express from "express";
import { register, registerProducer, login, logout, me } from "../controller/auth_controller.js";
import { authRequired } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/register-producer", registerProducer);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", authRequired, me);

export default router;
