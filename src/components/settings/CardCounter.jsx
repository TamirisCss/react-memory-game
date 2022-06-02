import React from "react";

const sum = 2;

const CardCounter = ({ selectCardsCounter, onClick }) => {
  const decreaseCards = (e) => {
    e.preventDefault();
    if (selectCardsCounter - sum >= 2) onClick(selectCardsCounter - sum);
  };

  const increaseCards = (e) => {
    e.preventDefault();
    if (selectCardsCounter + sum <= 100) onClick(selectCardsCounter + sum);
  };

  return (
    <>
      <button onClick={decreaseCards}>-</button>
      <div>{selectCardsCounter}</div>
      <button onClick={increaseCards}>+</button>
    </>
  );
};

export default CardCounter;
