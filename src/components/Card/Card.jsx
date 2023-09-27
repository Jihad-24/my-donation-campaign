import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetails from "./CardDetails";


const Card = () => {
    const [card, setcard] = useState();

    const { id } = useParams();
    const cards = useLoaderData();

    useEffect(() => {
        const findcard = cards?.find((card) => card?.id == id);
        setcard(findcard)

    }), [cards, id];
    return (
        <div>
            <CardDetails card={card}></CardDetails>
        </div>
    );
};

export default Card;