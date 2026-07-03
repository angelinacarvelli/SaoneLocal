const API_URL = "";

async function request(endpoint, options = {}) {
    const res = await fetch(`${API_URL}${endpoint}`, {
        credentials: "include",
        headers: { "Content-Type": "application/json", ...options.headers },
        ...options
    });
    if (!res.ok) {
        const error = await res.text();
        throw new Error(error || "API Error");
    }
    return res.json();
}

export const ProductAPI = {
    getAll: () => request("/api/products"),
    getOne: (id) => request(`/api/products/${id}`),
    addToCart: (id) => request(`/api/products/${id}/cart`, { method: "POST" }),
    addFavorite: (id) => request(`/api/products/${id}/favorite`, { method: "POST" })
};

export const ClientAPI = {
    getBasket: () => request("/api/client/basket"),
    getFavorites: () => request("/api/client/favorites"),
    getEvents: () => request("/api/client/events"),
    joinEvent: (id) => request(`/api/client/events/${id}/join`, { method: "POST" }),
    getProfile: () => request("/api/client/profile"),
    getOrders: () => request("/api/client/orders")
};

export const ProducerAPI = {
    getCatalog: () => request("/api/producer/catalog"),
    getOne: (id) => request(`/api/producer/producers/${id}`)
};