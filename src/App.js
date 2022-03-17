import { useState } from "react";
import "./App.css";
import { Home } from "./Components/Home";
import { Game } from "./Components/Game";
import { Footer } from "./Components/Footer";

function App() {
  const [playing, setPlaying] = useState(false);

  const setPlayingTrue = () => {
    setPlaying(true);
  };

  const setPlayingFalse = () => {
    setPlaying(false);
  };

  return (
    <>
      <div className="App">
        {playing ? (
          <Game setPlayingFalse={setPlayingFalse} />
        ) : (
          <Home setPlayingTrue={setPlayingTrue} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
