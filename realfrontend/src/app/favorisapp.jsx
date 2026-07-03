import { useEffect, useState } from "react";
import { ClientAPI } from "../api/client.api";

export default function Favoris() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        ClientAPI.getFavorites()
            .then(setFavorites)
            .catch(console.error);
    }, []);

    return (
        <div>
            {favorites.map(f => (
                <div key={f.id}>
                    <h3>{f.name}</h3>
                </div>
            ))}
        </div>
    );
}