import { ROUTES } from "../shared/model/routes";
import { createBrowserRouter, redirect } from "react-router-dom";
import { App } from "./app";
import { Providers } from "./providers";

export const router = createBrowserRouter([
  {
    element: (
      <Providers>
        <App />
      </Providers>
    ),
    children: [
      {
        path: ROUTES.PRODUCTS,
        lazy: () => import("@/features/product-list/product-list.page"),
      },
      {
        path: ROUTES.PRODUCT,
        lazy: () => import("@/features/product/product.page"),
      },
      {
        path: ROUTES.LOGIN,
        lazy: () => import("@/features/auth/login.page"),
      },
      // {
      //   path: ROUTES.REGISTER,
      //   lazy: () => import("@/features/auth/register.page"),
      // },
      {
        path: ROUTES.HOME,
        loader: () => redirect(ROUTES.PRODUCT),
      },
    ],
  },
]);
