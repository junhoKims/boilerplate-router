import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import * as pages from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <pages.Main />,
      },
      {
        path: "/item/:itemId",
        element: <pages.Item />,
        children: [
          {
            index: true,
            element: <pages.Info />,
          },
          {
            path: "review",
            element: <pages.Review />,
          },
          {
            path: "inquire",
            element: <pages.Inquire />,
          },
        ],
      },
      {
        path: "/settings",
        element: <pages.Settings />,
      },
      {
        path: "*",
        element: <pages.NotFound />,
      },
    ],
  },
]);

export default router;
