import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import HomeV1 from "../pages/home/versions/general/page";
import Terms from "../pages/terms/page";
import Privacy from "../pages/privacy/page";
import Company from "../pages/company/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomeV1 />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/company",
    element: <Company />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
