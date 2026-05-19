/* eslint-disable @typescript-eslint/no-explicit-any */
import "./ProductDataGrid.css";
import type { GridColDef } from "@mui/x-data-grid";
import { Card, CardContent, Rating } from "@mui/material";
import { DataGrid } from "../controls/DataGrid";
import type { Product } from "../models/Product.model";
import type { ProductFilterState } from "../models/ProductFilterState.model";

import IconButtonArray from "../controls/IconButtonArray";
import type { IconButton, IconButtonsProps } from "../models/IconButton.model";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import VisibilityIcon from "@mui/icons-material/Visibility";

// ⭐ OUTSIDE THE COMPONENT — CLEAN & REUSABLE
// eslint-disable-next-line react-refresh/only-export-components
export function buildProductActions(row: any): IconButton[] {
  return [
    {
      key: 0,
      label: "Edit",
      icon: <EditIcon />,
      color: "#1976D2",
      showIcon: true,
      action: () => alert(`Edit ${row.id}`),
    },
    {
      key: 1,
      label: "Delete",
      icon: <DeleteIcon />,
      color: "#D32F2F",
      showIcon: true,
      action: () => alert(`Delete ${row.id}`),
    },
    {
      key: 2,
      label: "Update Status",
      icon: <AutorenewIcon />,
      color: "#0288D1",
      showIcon: true,
      action: () => alert(`Update Status ${row.id}`),
    },
    {
      key: 3,
      label: "View",
      icon: <VisibilityIcon />,
      color: "#388E3C",
      showIcon: true,
      action: () => alert(`View ${row.id}`),
    }
  ];
}


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
    { field: "updatedAt", headerName: "Last Updated", flex: 1 },

    // ⭐ ACTIONS COLUMN
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        const actions = buildProductActions(params.row);
        const props : IconButtonsProps = {
          iconButtons: actions,
          iconSize: "small",
          direction: "row",
        };
        return <IconButtonArray {...props} />;
      }
    }
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
