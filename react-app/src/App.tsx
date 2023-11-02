import { useState } from "react";
import "./App.css";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    let newGame = { ...game, player: { ...game.player, name: "Fred" } };
    setGame(newGame);
  };

  return (
    <div>
      <button onClick={handleClick}>{game.player.name}</button>
    </div>
  );
}

export default App;
