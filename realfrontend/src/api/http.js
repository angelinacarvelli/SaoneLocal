const API_URL = "http://localhost:3000";

async function http(endpoint, options = {}) {
    const token = localStorage.getItem("token");

    const res = await fetch(`${API_URL}${endpoint}`, {
        method: options.method || "GET",
        headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...options.headers
        },
        credentials: "include",
        body: options.body ? JSON.stringify(options.body) : undefined
    });

    if (!res.ok) {
        const error = await res.text();
        throw new Error(error || "API Error");
    }

    return res.json();
}

export default http;