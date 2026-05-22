import type { JSX } from "react";

export interface IconButton {
  key: number;
  label: string;
  icon: JSX.Element;
  color: string;
  showIcon: boolean;
  action: () => void;
}


type LayoutDirection = "row" | "column" | "block";

export interface IconButtonsProps {
  iconButtons: IconButton[];
  iconSize?: number | "small" | "medium" | "large" | "xl";
  direction?: LayoutDirection;
  columns?: number; 
}
