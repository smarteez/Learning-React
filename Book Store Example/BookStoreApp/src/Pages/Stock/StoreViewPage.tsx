
import { SearchAndFilterBar } from "../../Components/Stock/StockSeachBar";
import  StockViewAll  from "../../Components/Stock/StoreViewAll";
import { useFilteredBooks } from "../../Hooks/Stock/useFilteredBooks";
const StockViewPage = () => {
  const filter = useFilteredBooks();
  return (
    <div>
      <SearchAndFilterBar {...filter} />
      <StockViewAll {...filter} />
    </div>
  );
};

export default StockViewPage;