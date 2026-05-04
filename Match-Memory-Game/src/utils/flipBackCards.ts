import type { CardModel } from "../types/CardModel";

export function flipBackCards(cards: CardModel[], flippedIds: number[]): CardModel[] {
  return cards.map((c) =>
    flippedIds.includes(c.id)
      ? { ...c, isFlipped: false }
      : c
  );
}
