import { useState } from "react";
import { CATEGORIES } from "../../constants";
import RadioBox from "./RadioBox";

const Settings = () => {
  const [category, setCategory] = useState(CATEGORIES[1]);

  return (
    <div>
      <h2>Settings</h2>
      <h4>Category:</h4>
      <div>
        {CATEGORIES.map((item) => (
          <RadioBox key={item} item={item} category={category} onChange={e => setCategory(e.target.value)} />
        ))}
      </div>
    </div>
  );
};

export default Settings;
