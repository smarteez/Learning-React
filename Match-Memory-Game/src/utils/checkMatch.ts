import type { CardModel } from "../types/CardModel";

export function checkMatch(cardA: CardModel, cardB: CardModel) {
  const isMatch = cardA.value === cardB.value;

  return {
    isMatch,
    matchedIds: isMatch ? [cardA.id, cardB.id] : [],
  };
}
