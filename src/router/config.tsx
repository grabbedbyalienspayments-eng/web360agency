
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Terms from "../pages/terms/page";
import Privacy from "../pages/privacy/page";
import GDPR from "../pages/gdpr/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/termeni-si-conditii",
    element: <Terms />,
  },
  {
    path: "/politica-de-confidentialitate", 
    element: <Privacy />,
  },
  {
    path: "/gdpr",
    element: <GDPR />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
