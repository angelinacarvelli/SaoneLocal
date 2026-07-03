import { useEffect, useState } from "react";
import { ClientAPI } from "../api/client.api";

export default function Panier() {
    const [basket, setBasket] = useState([]);

    useEffect(() => {
        ClientAPI.getBasket()
            .then(setBasket)
            .catch(console.error);
    }, []);

    return (
        <div>
            {basket.map(item => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Quantité: {item.quantity}</p>
                </div>
            ))}
        </div>
    );
}