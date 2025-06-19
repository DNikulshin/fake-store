import createFetchClient from "openapi-fetch";
import createClient from "openapi-react-query";
import { CONFIG } from "../model/config";
import { ApiPaths, ApiSchemas } from "./schema";

// Create a separate fetch client for token refresh to avoid circular dependency
export const refreshFetchClient = createFetchClient<ApiPaths>({
  baseUrl: CONFIG.API_BASE_URL,
});

export const fetchClient = createFetchClient<ApiPaths>({
  baseUrl: CONFIG.API_BASE_URL,
});
export const rqClient = createClient(fetchClient);

export const publicFetchClient = createFetchClient<ApiPaths>({
  baseUrl: CONFIG.API_BASE_URL,
});
export const publicRqClient = createClient(publicFetchClient);

fetchClient.use({
  async onRequest({ request }) {
    // Import useSession here to avoid circular dependency
    const { useSession } = await import("../model/session");
    const token = await useSession.getState().getFreshToken();

    if (token) {
      request.headers.set("Authorization", `Bearer ${token}`);
    } else {
      return new Response(
        JSON.stringify({
          code: "NOT_AUTHOIZED",
          message: "You are not authorized to access this resource",
        } as ApiSchemas["Error"]),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  },
});
