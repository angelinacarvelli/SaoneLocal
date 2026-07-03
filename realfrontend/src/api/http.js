const API_URL = "";

async function http(endpoint, options = {}) {
    const res = await fetch(`${API_URL}${endpoint}`, {
        method: options.method || "GET",
        headers: {
            "Content-Type": "application/json",
            ...options.headers
        },
        credentials: "include", // envoie le cookie de session (JWT httpOnly)
        body: options.body ? JSON.stringify(options.body) : undefined
    });

    if (!res.ok) {
        let message = "Erreur API";
        try {
            const data = await res.json();
            message = data.error || message;
        } catch {
            message = (await res.text()) || message;
        }
        throw new Error(message);
    }

    const text = await res.text();
    return text ? JSON.parse(text) : {};
}

export default http;
