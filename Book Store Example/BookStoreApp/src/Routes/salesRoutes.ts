import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";

import SalesHomePage from "../Pages/Sales/SalesHomePage";

export const salesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sales",
  component: SalesHomePage,
});
