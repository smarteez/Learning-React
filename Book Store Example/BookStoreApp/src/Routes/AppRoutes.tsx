import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import StockHomePage from "../Pages/Stock/StockHomePage";
import SalesHomePage from "../Pages/Sales/SalesHomePage";
import StockAddPage from "../Pages/Stock/StockAddPage";
import StockEditPage from "../Pages/Stock/StockEditPage";
import StoreViewPage from "../Pages/Stock/StoreViewPage";

const AppRoutes  = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Parent Route */}
      <Route path="/stock" element={<StockHomePage />}>
         {/* Default child route */}
        <Route index element={<StoreViewPage />} />
        {/* Other child routes */}
        <Route path="add" element={<StockAddPage />} />
        <Route path="edit/:id" element={<StockEditPage />} />  
      </Route>
      <Route path="/sales" element={<SalesHomePage />} />
    </Routes>
  );
};

export default AppRoutes;

