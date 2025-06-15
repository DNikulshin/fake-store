import "react-router-dom";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/auth/login",
  PRIFILE: "/auth/profile",
  USERS: "/users",
  USER: "/users/:id",
  REFRESH: "/auth/refresh-token",
  CATEGORIES: "/categories",
  CATEGORY: "/categories/:id",
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
