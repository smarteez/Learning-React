import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppMetadata } from "./data/AppMetaData";
import ProductCategoryDropdown from "./components/dropdowns/ProductCategoryDropdown";
import { useState } from "react";
import type { ProductCategory } from "./types/productCategory.types";

const queryClient = new QueryClient();
function App() {
   const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(null);
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>{AppMetadata.title}</h1>
          <p>{AppMetadata.description}</p>
          <span>Version: {AppMetadata.version}</span>

              <div style={{ padding: "20px" }}>
      <h1>Product Category Selector</h1>

      <ProductCategoryDropdown
        selectedId={selectedCategory?.id ?? 0}
        onSelect={(item) => setSelectedCategory(item)}
      />

      {selectedCategory && (
        <div style={{ marginTop: "20px" }}>
          <h3>Selected Category</h3>
          <p>
            <strong>ID:</strong> {selectedCategory.id}
          </p>
          <p>
            <strong>Name:</strong> {selectedCategory.name}
          </p>
        </div>
      )}
    </div>
    
      </div>
    </div>
  </QueryClientProvider>
  );
}

export default App;