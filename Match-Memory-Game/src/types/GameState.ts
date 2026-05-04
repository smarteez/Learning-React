import type { CardObj } from "./CardModel";

export type GameState = {
  cards: CardObj[];
  setCards: React.Dispatch<React.SetStateAction<CardObj[]>>;

  flippedCards: CardObj[];
  setFlippedCards: React.Dispatch<React.SetStateAction<CardObj[]>>;

  setMatchedCards: React.Dispatch<React.SetStateAction<number[]>>;

  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;

  moves: number;
  setMoves: React.Dispatch<React.SetStateAction<number>>;

  isLocked: boolean;
  setIsLocked: React.Dispatch<React.SetStateAction<boolean>>;
};
