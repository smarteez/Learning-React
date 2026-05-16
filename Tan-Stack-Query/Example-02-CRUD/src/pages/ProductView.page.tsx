import { ProductDataGrid } from "../components/ProductDataGrid";
import { SearchAndFilterBar } from "../components/SearchAndFilterBar";
import { useFilteredProducts } from "../hooks/useFilteredProducts";

export function ProductsView() {
  const filter = useFilteredProducts();

  return (
    <>
      <SearchAndFilterBar {...filter} />
      <ProductDataGrid {...filter} />
    </>
  );
}
