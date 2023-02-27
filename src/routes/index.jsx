import { Navigate, useRoutes } from "react-router-dom";
import BaseLayout from "../layouts/base/";
import About from "../pages/About";
import AboutSite from "../pages/AboutSite";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        { element: <Navigate to="/about" />, index: true },
        { path: "/about", element: <About /> },
        { path: "/site", element: <AboutSite /> },
      ],
    },
  ]);

  return routes;
}
