import "./components/background/background.css";
import Background from "./components/background/Background";
import Settings from "./components/settings/Settings";
import Board from "./components/Board/Board";
import { useState } from "react";

const App = () => {
  const [settingsOptions, setSettingsOptions] = useState(null);

  const startGame = (options) => {
    setSettingsOptions(options);
  };

  return (
    <div className="background-content">
      <Background />
      <h1 className="title">Memory Game</h1>

      {/* display Settings or Board deppending on the game options */}
      {!settingsOptions ? (
        <Settings startGame={startGame} />
      ) : (
        <Board settingsOptions={settingsOptions} />
      )}
    </div>
  );
};

export default App;
