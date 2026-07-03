import http from "./http";

export const ProductAPI = {
    getAll: () => http("/api/products"),
    getOne: (id) => http(`/api/products/${id}`),

    addToCart: (id, quantity = 1) =>
        http(`/api/products/${id}/cart`, { method: "POST", body: { quantity } }),

    addFavorite: (id) =>
        http(`/api/products/${id}/favorite`, { method: "POST" }),

    removeFavorite: (id) =>
        http(`/api/products/${id}/favorite`, { method: "DELETE" })
};
