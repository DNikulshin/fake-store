import { PathParams, ROUTES } from "@/shared/model/routes";
import { useParams } from "react-router-dom";

function ProductPage() {
  const params = useParams<PathParams[typeof ROUTES.PRODUCTS]>();
  return <div>Product page {params.id}</div>;
}

export const Component = ProductPage;
