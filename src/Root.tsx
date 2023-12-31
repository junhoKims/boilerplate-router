import { RouterProvider } from "react-router-dom";
import { routes } from "@/libs/react-router-dom";

const Root = () => {
  return (
    <RouterProvider router={routes} future={{ v7_startTransition: true }} />
  );
};

export default Root;
