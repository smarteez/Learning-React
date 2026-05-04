import { useCallback } from "react";
import { flipCard } from "../utils/flipCards";
import { flipBackCards } from "../utils/flipBackCards";
import { checkMatch } from "../utils/checkMatch";
import type { CardModel } from "../types/CardModel";
import type { GameState } from "../types/GameState";

export function useCardClick(game: GameState) {
  const {
    cards,
    setCards,
    flippedCards,
    setFlippedCards,
    setMatchedCards,
    setScore,
    setMoves,
    isLocked,
    setIsLocked
  } = game;

  const handleCardClick = useCallback(
    (selectedCard: CardModel) => {
      if (
        selectedCard.isFlipped ||
        selectedCard.isMatched ||
        isLocked ||
        flippedCards.length === 2
      ) {
        return;
      }

      const updatedCards = flipCard(cards, selectedCard.id);
      setCards(updatedCards);

      const newFlipped = [...flippedCards, selectedCard];
      setFlippedCards(newFlipped);

      if (newFlipped.length === 2) {
        setIsLocked(true);

        const [first, second] = newFlipped;
        const result = checkMatch(first, second);

        if (result.isMatch) {
          setTimeout(() => {
            setMatchedCards((prev) => [...prev, ...result.matchedIds]);
            setScore((prev) => prev + 1);

            setCards((prev) =>
              prev.map((c) =>
                result.matchedIds.includes(c.id)
                  ? { ...c, isMatched: true }
                  : c
              )
            );

            setFlippedCards([]);
            setIsLocked(false);
          }, 500);
        } else {
          setTimeout(() => {
            setCards((prev) =>
              flipBackCards(prev, [first.id, second.id])
            );
            setFlippedCards([]);
            setIsLocked(false);
          }, 1000);
        }
      }

      setMoves((prev) => prev + 1);
    },
    [
      cards,
      flippedCards,
      isLocked,
      setCards,
      setFlippedCards,
      setMatchedCards,
      setScore,
      setMoves,
      setIsLocked
    ]
  );

  return { handleCardClick };
}
