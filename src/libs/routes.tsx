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
        path: "/item",
        element: <pages.Item />,
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
