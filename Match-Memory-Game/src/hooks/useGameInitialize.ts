import { useState, useCallback, useMemo } from "react";
import type { CardModel } from "../types/CardModel";

export function useGameInitialize(cardValues: string[]) {
  const [cards, setCards] = useState<CardModel[]>([]);
  const [flippedCards, setFlippedCards] = useState<CardModel[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const initializeGame = useCallback(() => {
    const duplicated = [...cardValues, ...cardValues];

    const shuffled = duplicated
      .map((value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5);

    setCards(shuffled);
    setFlippedCards([]);
    setMatchedCards([]);
    setScore(0);
    setMoves(0);
    setIsLocked(false);
  }, [cardValues]);

  const isGameComplete = useMemo(() => {
    return matchedCards.length === cardValues.length * 2;
  }, [matchedCards, cardValues]);

  return {
    cards,
    setCards,
    initializeGame,
    flippedCards,
    setFlippedCards,
    matchedCards,
    setMatchedCards,
    score,
    setScore,
    moves,
    setMoves,
    isLocked,
    setIsLocked,
    isGameComplete,
  };
}
