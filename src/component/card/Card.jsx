import React from "react";
import "./card.css";
const Card = ({ items }) => {
    return (
        <div className="card">
            <img src={items.image} height="150px" width="150px" alt="" />
            <h2>{items.title}</h2>
            <p>${items.price}</p>
        </div>
    );
};

export default Card;
