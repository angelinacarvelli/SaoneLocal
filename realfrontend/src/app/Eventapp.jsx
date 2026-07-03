import { useEffect, useState } from "react";
import { ClientAPI } from "../api/client.api";

export default function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        ClientAPI.getEvents()
            .then(setEvents)
            .catch(console.error);
    }, []);

    return (
        <div>
            {events.map(e => (
                <div key={e.id}>
                    <h3>{e.title}</h3>

                    <button onClick={() => ClientAPI.joinEvent(e.id)}>
                        Rejoindre
                    </button>
                </div>
            ))}
        </div>
    );
}