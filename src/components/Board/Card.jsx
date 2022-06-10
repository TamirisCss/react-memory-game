import React from "react";

const Card = ({ card }) => {
  return (
    <div>
      <h1>card</h1>
      <img src={card.url} alt={card.id} />
    </div>
  );
};

export default Card;
