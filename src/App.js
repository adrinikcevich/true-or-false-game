import { useContext, useEffect, useState } from "react";
import "./App.css";
import { AppContext } from "./AppContext";
import { Home } from "./Components/Home";
import { Game } from "./Components/Game";
function App() {
  const [playing, setPlaying] = useState(false);
  const [appContext, setAppContext] = useState({
    category: null,
    categoryId: null,
    difficulty: null,
  });

  const setPlayingTrue = () => {
    setPlaying(true);
  };

  const setPlayingFalse = () => {
    setPlaying(false);
  };

  return (
    <AppContext.Provider value={{ appContext, setAppContext }}>
      <div className="App">
        {playing ? <Game setPlayingFalse={setPlayingFalse} /> : <Home setPlayingTrue={setPlayingTrue}/>}
      </div>
    </AppContext.Provider>
  );
}

export default App;
