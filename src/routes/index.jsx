import { useRoutes } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import About from "../pages/About";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <BaseLayout />,
      children: [{ path: "/", element: <About /> }],
    },
  ]);

  return routes;
}
