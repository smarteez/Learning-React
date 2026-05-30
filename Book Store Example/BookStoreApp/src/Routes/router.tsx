import { createRouter } from "@tanstack/react-router";

import { rootRoute } from "./rootRoute";

import {
  stockRoute,
  stockIndexRoute,
  stockAddRoute,
  stockEditRoute,
  stockViewItemRoute
} from "./stockRoutes";
import { salesRoute } from "./salesRoutes";
import { homeRoute } from "./homeRoute";

// Build the router tree
export const router = createRouter({
  routeTree: rootRoute.addChildren([
    homeRoute,

    stockRoute.addChildren([
    stockIndexRoute,
    stockAddRoute,
    stockEditRoute,
    stockViewItemRoute,   // <-- ADD THIS
  ]),

    salesRoute,
  ]),
});
