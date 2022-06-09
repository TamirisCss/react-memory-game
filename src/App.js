import "./components/background/background.css";
import Background from "./components/background/Background";
import GetImages from "./hooks/GetImages";
import Settings from "./components/settings/Settings";
import Board from "./components/Board/Board";
import { useState } from "react";

const App = () => {
  const [settingsOptions, setSettingsOptions] = useState(null);

  const images = GetImages(settingsOptions);
  console.log({ images });

  const startGame = (options) => {
    setSettingsOptions(options);
  };

  return (
    <div className="background-content">
      <Background />
      <h1 className="title">Memory Game</h1>
      <Settings startGame={startGame} />
      {/* {images.length > 0 && <Cards />} */}
    </div>
  );
};

export default App;
