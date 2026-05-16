import type { Product } from "../models/Product.model";
import { formatDate, formatDateTime } from "../utils/dateFormatters";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapProduct(item: any): Product {
  return {
    id: Number(item.id),
    name: item.name,
    price: Number(item.price),
    statusType: {
      id: Number(item.statusType.id),
      label: item.statusType.label,
      value: item.statusType.value
    },
    productType: {
      id: Number(item.productType.id),
      name: item.productType.name,
      shortcode: item.productType.shortcode,
      productCategory: {
        id: Number(item.productType.productCategory.id),
        name: item.productType.productCategory.name,
        shortcode: item.productType.productCategory.shortcode
      }
    },
    sku: item.sku,
    barcode: item.barcode,
    description: item.description,
    rating: Number(item.rating),
    activationDate: item.activationDate ? formatDate(item.activationDate) : null,
    createdAt: item.createdAt ? formatDateTime(item.createdAt) : null,
    updatedAt: item.updatedAt ? formatDateTime(item.updatedAt) : null,
    productCategoryName: item.productType?.productCategory?.name ?? null,
    productTypeName: item.productType?.name ?? null
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapProducts(items: any[]): Product[] {
  return items.map(mapProduct);
}


