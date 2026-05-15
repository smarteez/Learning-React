
import { Endpoints } from "../apis/endPoints.types";
import { mapProducts } from "../mapping/product.mapper";
import type { ProductModel } from "../models/ProductModel";

export async function GetAllProducts(): Promise<ProductModel[]> {
  const res = await fetch(Endpoints.products.getAll);
  if (!res.ok) throw new Error("Failed to load products");

  const json = await res.json();

  return mapProducts(json);
}
