import type { StatusType } from "./StatusType.model";
import type { ProductType } from "./ProductType.model";

export interface Product {
  id: number;
  name: string;
  price: number;
  sku: string;
  barcode: string;
  description: string;
  rating: number;
  statusType: StatusType;
  productType: ProductType;
  activationDate: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  productCategoryName: string | null;
  productTypeName: string | null;
}
