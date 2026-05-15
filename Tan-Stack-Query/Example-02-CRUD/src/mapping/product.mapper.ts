import type { GetAllProductModel } from "../models/ProductModel";
import type { GetByIdProductModel } from "../models/ProductAllModel";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapProduct(item: any): GetAllProductModel {
  return {
    id: Number(item.id),
    name: item.name,
    price: Number(item.price),
    statusTypeId: Number(item.statusTypeId),
    activationDate: item.activationDate,
    productTypeId: Number(item.productTypeId),
    sku: item.sku,
    barcode: item.barcode,
    description: item.description,
    rating: Number(item.rating),
    createdAt: item.createdAt,
    updatedAt: item.updatedAt
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapProducts(items: any[]): GetAllProductModel[] {
  return items.map(mapProduct);
}

export function mapGetByIdProduct(
  item: GetAllProductModel, 
  statusTypeName: string, 
  productCategoryId: number,
  productCategoryName: string, 
  productTypeName: string  ): GetByIdProductModel {
  return {
    id: Number(item.id),
    name: item.name,
    price: Number(item.price),
    statusTypeId: Number(item.statusTypeId),
    statusTypeName: statusTypeName,
    activationDate: item.activationDate,
    productCategoryId: productCategoryId,
    productCategoryName: productCategoryName,
    productTypeId: Number(item.productTypeId),
    productTypeName: productTypeName,
    sku: item.sku,
    barcode: item.barcode,
    description: item.description,
    rating: Number(item.rating),
    createdAt: item.createdAt,
    updatedAt: item.updatedAt
  };
}