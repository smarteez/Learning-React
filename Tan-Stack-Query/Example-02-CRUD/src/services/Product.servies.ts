
import { Endpoints } from "../apis/endPoints.types";
import { mapProducts } from "../mapping/product.mapper";
import type { Product } from "../models/Product.model";

export async function GetAllProducts(): Promise<Product[]> {
  const res = await fetch(Endpoints.products.getAll);
  if (!res.ok) throw new Error("Failed to load products");

  const json = await res.json();

  return mapProducts(json);
}

export async function GetProductById(id: number): Promise<Product | null> {
  const res = await fetch(`${Endpoints.products.getById}/${id}`);
  if (!res.ok) throw new Error("Failed to load product");

  const json = await res.json();
  return mapProducts([json])[0] || null;
}

