import type { ProductCategory } from "./productCategory.types";

export type ProductCategoryDropdownProps = {
  selectedId?: number;
  onSelect: (item: ProductCategory) => void;
};