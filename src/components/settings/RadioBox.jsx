const RadioBox = ({ item, isChecked, onChange }) => {
  return (
    <div>
      <input
        type="radio"
        name={item}
        id={item}
        value={item}
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor={item}>{item}</label>
    </div>
  );
};

export default RadioBox;
