import { DataGrid as MuxDataGrid } from "@mui/x-data-grid";
import type { GridColDef, GridValidRowModel } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

type DataGridProps<T extends GridValidRowModel> = {
  rows: T[];
  columns: GridColDef<T>[];
  height?: number;
  pageSize?: number;
  columnVisibilityModel?: Record<string, boolean>;
};

export function DataGrid<T extends GridValidRowModel>({
  rows,
  columns,
  columnVisibilityModel = {},   // ✅ FIXED DEFAULT VALUE
  height = 400,
  pageSize = 5,
}: DataGridProps<T>) {
  return (
    
    <Box sx={{ height, width: "100%" }}>
      <MuxDataGrid
        sx={{ width: "100%" }}
        rows={rows}
        columns={columns}
        columnVisibilityModel={columnVisibilityModel}  // ✅ Now works
        pageSizeOptions={[pageSize]}
        initialState={{
          pagination: {
            paginationModel: { pageSize },
          },
        }}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
