import {
  DataGrid,
  type GridColDef as DataGridColDef,
  type GridRenderCellParams as DataGridRenderCellParams,
} from "@mui/x-data-grid";

import type { StockFilterState } from "../../Models/StockFilterState.model";
import type { Book } from "../../Schemas/Book.schemas";
import type { Tag } from "../../Schemas/Tag.schemas";

import { Chip, IconButton, Rating, Stack } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

import { useRouter } from "@tanstack/react-router";
import { useBookStore } from "../../Store/bookStore";

const StoreViewAll = ({ books, isLoading }: StockFilterState) => {
  const router = useRouter();
  const setSelectedBook = useBookStore((s) => s.setSelectedBook);

  const handleAction = (action: string, book: Book) => {
    setSelectedBook(book);

    switch (action) {
      case "View":
        router.navigate({ to: "/stock/view" });
        break;

      case "Edit":
        router.navigate({ to: "/stock/edit" });
        break;

      case "Delete":
        console.log("Delete book:", book.title);
        break;
    }
  };

  if (isLoading) return <div>Loading books…</div>;
  if (!Array.isArray(books)) return null;
  if (books.length === 0) return <div>No books found</div>;

  const columns: DataGridColDef<Book>[] = [
    {
      field: "image_url",
      headerName: "Cover",
      width: 90,
      sortable: false,
      filterable: false,
      renderCell: (params: DataGridRenderCellParams<Book>) => (
        <img
          src={params.value ?? ""}
          alt={params.row.title ?? ""}
          style={{
            width: 50,
            height: 70,
            objectFit: "cover",
            borderRadius: 4,
          }}
        />
      ),
    },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
      valueGetter: (_value, row) => row.title ?? "",
    },
    {
      field: "author",
      headerName: "Author",
      flex: 1,
      valueGetter: (_value, row) => row.author ?? "",
    },
    {
      field: "year",
      headerName: "Year of Publication",
      flex: 1,
      renderHeader: () => (
        <span>
          Year of<br />Publication
        </span>
      ),
      valueGetter: (_value, row) => row.year ?? "",
    },
    {
      field: "genre",
      headerName: "Genre",
      flex: 1,
      valueGetter: (_value, row) => row.genre?.name ?? "",
    },
    {
      field: "language",
      headerName: "Language",
      flex: 1,
      width: 110,
      valueGetter: (_value, row) => row.language?.name ?? "",
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      width: 90,
      valueFormatter: (params) => {
        const value = Number(params ?? 0);
        return `R${value.toFixed(2)}`;
      },
    },
    {
      field: "rating",
      headerName: "Rating",
      flex: 1,
      width: 140,
      sortable: false,
      renderCell: (params) => (
        <Rating
          value={params.value ?? 0}
          precision={0.1}
          readOnly
          size="small"
        />
      ),
    },
    {
      field: "stock",
      headerName: "Available",
      renderHeader: () => (
        <span>
          Number<br />Available
        </span>
      ),
      flex: 1,
      width: 110,
      valueGetter: (_value, row) => row.stock?.NoAvailable ?? 0,
    },
    {
      field: "tags",
      headerName: "Tags",
      flex: 1,
      width: 180,
      sortable: false,
      renderCell: (params) => {
        const tags: Tag[] = params.value ?? [];

        return (
          <Stack direction="column" spacing={0.5}>
            {tags.map((tag) => (
              <Chip key={tag.id} label={tag.name} size="small" />
            ))}
          </Stack>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 140,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <IconButton
            color="primary"
            size="small"
            onClick={() => handleAction("View", params.row)}
          >
            <VisibilityIcon fontSize="small" />
          </IconButton>

          <IconButton
            color="warning"
            size="small"
            onClick={() => handleAction("Edit", params.row)}
          >
            <EditIcon fontSize="small" />
          </IconButton>

          <IconButton
            color="error"
            size="small"
            onClick={() => handleAction("Delete", params.row)}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <DataGrid<Book>
        rows={books}
        columns={columns}
        getRowId={(row) => row.id}
        disableVirtualization
        autoHeight
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10 },
          },
          sorting: {
            sortModel: [{ field: "title", sort: "asc" }],
          },
        }}
        pageSizeOptions={[10]}
      />
    </div>
  );
};

export default StoreViewAll;
