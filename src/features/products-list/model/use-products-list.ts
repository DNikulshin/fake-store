import { rqClient } from "@/shared/api/istance";

export function useProductsList() {
  const { data, isFetching, isError, error } = rqClient.useQuery('get', '/products');
  return { data, isFetching, isError, error };
}
