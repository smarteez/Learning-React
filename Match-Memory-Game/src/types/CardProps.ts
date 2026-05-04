import type { CardObj } from "./CardModel";

export type CardProps = {
  card: CardObj;
  onClick: (card: CardObj) => void;
};