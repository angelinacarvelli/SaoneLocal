import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "f3a9c1e7b25d84906af1c3e8d7b60245aa19ff3c8e21d4675b0a9c8e1f2d3b4c";

export function signToken(user) {
    return jwt.sign(
        { id: user.id, email: user.email, role_id: user.role_id },
        JWT_SECRET,
        { expiresIn: "7d" }
    );
}

export const cookieOptions = {
    httpOnly: true,                 // le JS client ne peut pas lire le cookie
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 jours
};

// Attache req.user si un token valide est présent, sinon continue sans bloquer.
export function attachUser(req, _res, next) {
    const token = req.cookies?.jwt;
    if (token) {
        try {
            req.user = jwt.verify(token, JWT_SECRET);
        } catch {
            req.user = null;
        }
    }
    next();
}

// Bloque l'accès (401) si aucun utilisateur connecté.
export function authRequired(req, res, next) {
    const token = req.cookies?.jwt;
    if (!token) return res.status(401).json({ error: "Non authentifié" });
    try {
        req.user = jwt.verify(token, JWT_SECRET);
        next();
    } catch {
        return res.status(401).json({ error: "Session invalide ou expirée" });
    }
}
