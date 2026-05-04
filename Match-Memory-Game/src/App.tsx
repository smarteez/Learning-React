import { useEffect } from "react";
import { Card } from "./components/Card";
import { GameHeader } from "./components/GameHeader";
import { WinMessage } from "./components/WinMessage";
import { useGameInitialize } from "./hooks/useGameInitialize";
import { useCardClick } from "./hooks/useCardClick";
import { cardValues } from "./types/CardValues";

function App() {
  const game = useGameInitialize(cardValues);
  const { handleCardClick } = useCardClick(game);

  useEffect(() => {
    game.initializeGame();
  }, [game.initializeGame]);

  return (
    <div className="app">
      <GameHeader
        score={game.score}
        moves={game.moves}
        onReset={game.initializeGame}
      />

      {game.isGameComplete && <WinMessage moves={game.moves} />}

      <div className="cards-grid">
        {game.cards.map((card) => (
          <Card key={card.id} card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
