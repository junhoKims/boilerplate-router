import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "@/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        Component: lazy(() => import("@/pages/Main")),
      },
      {
        path: "/item/:itemId",
        Component: lazy(() => import("@/pages/Item/Item")),
        children: [
          {
            index: true,
            Component: lazy(() => import("@/pages/Item/pages/Info")),
          },
          {
            path: "review",
            Component: lazy(() => import("@/pages/Item/pages/Review")),
          },
          {
            path: "inquire",
            Component: lazy(() => import("@/pages/Item/pages/Inquire")),
          },
        ],
      },
      {
        path: "/settings",
        Component: lazy(() => import("@/pages/Settings")),
      },
      {
        path: "*",
        Component: lazy(() => import("@/pages/NotFound")),
      },
    ],
  },
]);

export default router;
