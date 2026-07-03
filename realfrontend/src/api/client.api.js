import http from "./http";

export const ClientAPI = {
    // Panier
    getBasket: () => http("/api/client/basket"),
    updateBasketItem: (productId, quantity) =>
        http(`/api/client/basket/${productId}`, { method: "PATCH", body: { quantity } }),
    removeBasketItem: (productId) =>
        http(`/api/client/basket/${productId}`, { method: "DELETE" }),
    checkout: () => http("/api/client/checkout", { method: "POST" }),

    // Favoris
    getFavorites: () => http("/api/client/favorites"),

    // Commandes
    getOrders: () => http("/api/client/orders"),

    // Événements
    getEvents: () => http("/api/client/events"),
    joinEvent: (id) => http(`/api/client/events/${id}/join`, { method: "POST" }),

    // Profil
    getProfile: () => http("/api/client/profile"),
    updateProfile: (data) => http("/api/client/profile", { method: "PUT", body: data })
};
