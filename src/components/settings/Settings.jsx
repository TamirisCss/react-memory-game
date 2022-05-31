import { CATEGORIES } from "../../constants";

const Settings = () => {
  return (
    <div>
      <h2>Settings</h2>
      <h4>Category:</h4>
      <div>
        {CATEGORIES.map((item) => (
          <div>
            <input type="radio" key={item} name={item} id={item} value={item} />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
