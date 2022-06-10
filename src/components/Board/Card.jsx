import React from "react";
import "./card.css";

const Card = ({ card }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="front"></div>
        <div className="back">
          <img src={card.url} alt={card.id} />
        </div>
      </div>
    </div>
  );
};

export default Card;
