import { lazy } from "react";

const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: lazy(() =>
      import("../pages/HomePage" /*webpackChunkName:'HomePage'*/)
    ),
  },
  {
    name: "Products",
    path: "/products",
    exact: false,
    component: lazy(() =>
      import("../pages/ProductsPage" /*webpackChunkName:'ProductsPage'*/)
    ),
  },
  {
    name: "Admin",
    path: "/admin",
    exact: false,
    component: lazy(() => import("../pages/AdminPage")),
  },
  {
    name: "Registration",
    path: "/registration",
    exact: true,
    component: lazy(() => import("../pages/AuthPage")),
  },
  {
    name: "Login",
    path: "/login",
    exact: true,
    component: lazy(() => import("../pages/AuthPage")),
  },
];

export default mainRoutes;
