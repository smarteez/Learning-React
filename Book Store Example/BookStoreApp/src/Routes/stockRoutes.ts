import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";

import StockHomePage from "../Pages/Stock/StockHomePage";
import StoreViewPage from "../Pages/Stock/StoreViewPage";
import StockAddPage from "../Pages/Stock/StockAddPage";
import StockEditPage from "../Pages/Stock/StockEditPage";
import StockViewItemPage from "../Components/Stock/StockViewItemPage";

// /stock layout
export const stockRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/stock",
  component: StockHomePage,
});

// DEFAULT CHILD ROUTE (index)
export const stockIndexRoute = createRoute({
  getParentRoute: () => stockRoute,
  path: "/",              // <-- THIS IS THE FIX
  component: StoreViewPage,
});

// /stock/add
export const stockAddRoute = createRoute({
  getParentRoute: () => stockRoute,
  path: "/add",
  component: StockAddPage,
});

// /stock/edit
export const stockEditRoute = createRoute({
  getParentRoute: () => stockRoute,
  path: "/edit",
  component: StockEditPage,
});

export const stockViewItemRoute = createRoute({
  getParentRoute: () => stockRoute,
  path: "/view",
  component: StockViewItemPage,
});
