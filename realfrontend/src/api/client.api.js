import http from "./http";

export const ClientAPI = {
    getBasket: () => http("/api/client/basket"),

    getFavorites: () => http("/api/client/favorites"),

    getEvents: () => http("/api/client/events"),

    joinEvent: (id) =>
        http(`/api/client/events/${id}/join`, {
            method: "POST"
        }),

    getProfile: () => http("/api/client/profile"),

    getOrders: () => http("/api/client/orders")
};