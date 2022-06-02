import './components/background/background.css';
import Background from './components/background/Background';
import GetImages from "./hooks/GetImages";
import Settings from "./components/settings/Settings";

const App = () => {
  const images = GetImages();

  console.log({ images })

  return (
    <div className="background-content">
      <Background />
      <h1>Memory Game</h1>
      <Settings />
    </div>
  );
};

export default App;
