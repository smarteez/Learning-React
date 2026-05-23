// src/pages/ProductCreatePage.tsx

import { Box, Paper, Typography } from "@mui/material";
import { ProductForm } from "../components/ProductForm";
import { useProductCategories } from "../hooks/useProductCategories";
import { useStatusTypes } from "../hooks/useStatusType";

export const ProductCreatePage = () => {
  const { data: statusTypes = [], isLoading: statusLoading } = useStatusTypes();
  const { data: categories = [], isLoading: categoriesLoading } = useProductCategories();

  const isLoading = statusLoading || categoriesLoading;

  const handleSubmit = (data: any) => {
    console.log("Product submitted:", data);
    // TODO: call create product API here
  };

  if (isLoading) {
    return (
      <Box p={3}>
        <Paper sx={{ p: 3 }}>
          <Typography>Loading product form...</Typography>
        </Paper>
      </Box>
    );
  }

  return (
    <Box p={3}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" fontWeight={600} mb={3}>
          Create New Product
        </Typography>

          <ProductForm
            categories={categories}
            statusTypes={statusTypes}
            onSubmit={handleSubmit}
          />
      </Paper>
    </Box>
  );
};
