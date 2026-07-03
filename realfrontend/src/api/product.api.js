import http from "./http";

export const ProductAPI = {
    getAll: () => http("/api/products"),

    getOne: (id) => http(`/api/products/${id}`),

    addToCart: (id) =>
        http(`/api/products/${id}/cart`, {
            method: "POST"
        }),

    addFavorite: (id) =>
        http(`/api/products/${id}/favorite`, {
            method: "POST"
        })
};