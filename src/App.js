import "./App.css";
import GetImages from "./hooks/GetImages";
import Settings from "./components/settings/Settings";

const App = () => {
  const images = GetImages();

  console.log({ images })

  return (
    <div>
      <h1>Memory Game</h1>
      <Settings />
    </div>
  );
};

export default App;
