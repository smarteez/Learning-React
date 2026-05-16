import type { ProductCategory } from "./ProductCategory.model";

export interface ProductType {
  id: number;
  name: string;
  shortcode: string;
  productCategory: ProductCategory;
}
