import type { ProductCategoryDropdownProps } from "../../types/productCategoryDropdown.types";
import { useProductCategories } from "../../hooks/useProductCategories";
export default function ProductCategoryDropdown({
  selectedId,
  onSelect,
}: ProductCategoryDropdownProps) {
  const { data, isLoading, isError } = useProductCategories();

  if (isLoading) return <p>Loading categories...</p>;
  if (isError) return <p>Failed to load categories</p>;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = Number(e.target.value);
    const selected = data?.find((x) => x.id === id);
    
    console.log("Selected from dropdown:", selected); // ← ADD THIS
    if (selected) onSelect(selected);
  };

  return (
    <select
      value={selectedId?.toString() ?? "0"}
      onChange={handleChange}
    >
      {data?.map((item) => (
        <option key={item.id} value={item.id.toString()}>
          {item.name}
        </option>
      ))}
    </select>
  );
}