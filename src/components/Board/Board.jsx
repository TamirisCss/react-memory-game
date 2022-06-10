import React, { useEffect, useState } from "react";
import useImages from "../../hooks/useImages";
import Card from "./Card";

import "./board.css";

const Board = ({ settingsOptions }) => {
  //   const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const images = useImages(settingsOptions);

  const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  useEffect(() => {
    const GameLogic = (images) => {
      let cards = [];
      images.forEach((image) => {
        const cardFront = {
          id: image.id + "/front",
          url: image.src.small,
        };
        const cardBack = {
          id: image.id + "/back",
          url: image.src.small,
        };
        cards.push(cardFront, cardBack);
      });

      return shuffleArray(cards);
    };

    if (images) {
      setCards(GameLogic(images));
    }
  }, [images]);

  console.log(cards);

  return (
    <div>
      {/* {loading && <p>Loading...</p>} */}
      <div className="BoardContainer">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Board;
