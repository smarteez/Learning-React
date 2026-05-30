import { Link } from "@tanstack/react-router";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/stock">Stock</Link> |{" "}
      <Link to="/sales">Sales</Link>
    </nav>
  );
};

export default NavBar;
