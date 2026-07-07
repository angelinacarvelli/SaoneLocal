const API_URL = "";

async function http(endpoint, options = {}) {
    const res = await fetch(`${API_URL}${endpoint}`, {
        method: options.method || "GET",
        headers: {
            "Content-Type": "application/json",
            ...options.headers
        },
        credentials: "include",
        body: options.body ? JSON.stringify(options.body) : undefined
    });

    const text = await res.text();
    let data;
    
    try {
        data = text ? JSON.parse(text) : {};
    } catch (e) {
        console.error("Réponse brute reçue :", text); // Ajoute cette ligne
        data = { error: "Erreur de format de réponse : " + text.substring(0, 50) };
    }
    if (!res.ok) {
        throw new Error(data.error || "Erreur API");
    }

    return data;
}

export default http;