import type { CardObj } from "../types/CardModel";

export function flipCard(cards: CardObj[], id: number): CardObj[] {
  return cards.map((c) =>
    c.id === id ? { ...c, isFlipped: true } : c
  );
}
