import type { CardObj } from "../types/CardModel";

export function shuffleCards(values: string[]): CardObj[] {
  const duplicated = [...values, ...values];

  return duplicated
    .map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatched: false,
    }))
    .sort(() => Math.random() - 0.5);
}
