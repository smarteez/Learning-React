import { Outlet } from "@tanstack/react-router";

const StockHomePage = () => {
  return (
    <div>
      <h1>Stock</h1>


      {/* Child pages render here */}
      <Outlet />
    </div>
  );
};

export default StockHomePage;