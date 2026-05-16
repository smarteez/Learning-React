import "./ProductDataGrid.css";
import type { GridColDef } from "@mui/x-data-grid";
import { Card, CardContent, Rating } from "@mui/material";
import { DataGrid } from "../controls/DataGrid";
import type { Product } from "../models/Product.model";
import type { ProductFilterState } from "../models/ProductFilterState.model";


export function ProductDataGrid({ products, isLoading }: ProductFilterState) {

const columns: GridColDef<Product>[] = [
  { field: "sku", headerName: "SKU", flex: 1 },
  { field: "name", headerName: "Product Name", flex: 1 },
  { field: "productCategoryName", headerName: "Product Category", flex: 1 },
  { field: "productTypeName", headerName: "Product Type", flex: 1 },
{
  field: "price",
  headerName: "Price",
  flex: 1,
  valueFormatter: (params) => {
    if (params == null) return "";
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
      minimumFractionDigits: 2
    }).format(params);
  }
},
  {
  field: "rating",
  headerName: "Rating",
  flex: 1,
  sortable: false,
  renderCell: (params) => (
    <Rating
      value={Number(params.value)}
      readOnly
      precision={0.5}
      size="small"
    />
  )
},
  { field: "activationDate", headerName: "Activation Date", flex: 1 },
  { field: "updatedAt", headerName: "Last Updated", flex: 1 }
];
const rows = products?.map(p => ({
  ...p,
  productCategoryName: p.productType.productCategory.name,
  productTypeName: p.productType.name
})) ?? [];

  if (isLoading) return <div>Loading products…</div>;


  return (
    <Card className="filter-card" elevation={3}>
      <CardContent sx={{ p: 0 }}>
          <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          height={600}
          columnVisibilityModel={{ id: false }}   
        />
      </CardContent>
    </Card>
    
  );
}