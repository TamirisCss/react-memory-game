import { useState } from "react";
import { CATEGORIES, LEVEL, CARDS_COUNT } from "../../constants";

import RadioBox from "./RadioBox";
import CardCounter from "./CardCounter";

const Settings = () => {
  const [selectCategory, setSelectCategory] = useState(CATEGORIES[0]);
  const [selectLevel, setSelectLevel] = useState(LEVEL[0]);
  const [selectCardsCounter, setSelectCardsCounter] = useState(CARDS_COUNT);

  return (
    <div>
      <h2>Settings</h2>
      <h4>Category:</h4>
      <div>
        {CATEGORIES.map((category) => (
          <RadioBox
            key={category}
            item={category}
            isChecked={category === selectCategory}
            onChange={(e) => setSelectCategory(e.target.value)}
          />
        ))}
      </div>
      <h4>Level:</h4>
      <div>
        {LEVEL.map((level) => (
          <RadioBox
            key={level}
            item={level}
            isChecked={level === selectLevel}
            onChange={(e) => setSelectLevel(e.target.value)}
          />
        ))}
      </div>
      <h4>Number of cards:</h4>
      <div>
        <CardCounter
          selectCardsCounter={selectCardsCounter}
          onClick={setSelectCardsCounter}
        />
      </div>
      <button>Play Game</button>
    </div>
  );
};

export default Settings;
