import "react-router-dom";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  PRODUCTS: "/products",
  PRODUCT: "/products/:id",
} as const;

export type PathParams = {
  [ROUTES.PRODUCTS]: {
    id: string;
  };
};

declare module "react-router-dom" {
  interface Register {
    params: PathParams;
  }
}
