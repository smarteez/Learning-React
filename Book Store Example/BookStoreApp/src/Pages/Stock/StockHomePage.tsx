import { Link, Outlet } from "react-router-dom";

const StockHomePage = () => {
  return (
    <div>
      <h1>Stock</h1>

      <div style={{ marginBottom: 20 }}>
        <Link to="add">Add</Link> |{" "}
        <Link to="edit/1">Edit Example</Link>
      </div>

      {/* Child pages render here */}
      <Outlet />
    </div>
  );
};

export default StockHomePage;