import { publicRqClient } from "@/shared/api/istance";
import { ApiSchemas } from "@/shared/api/schema";
import { ROUTES } from "@/shared/model/routes";
import { useSession } from "@/shared/model/session";
import { useNavigate } from "react-router-dom";

// Define proper types for the response structure
interface AccessTokenResponse {
  accessToken: string;
}

export function useRegister() {
  const navigate = useNavigate();

  const session = useSession();
  const registerMutation = publicRqClient.useMutation(
    "post",
    "/auth/register",
    {
      onSuccess(data) {
        console.log("Register response data:", data);

        // Handle different possible response structures
        if (data && typeof data === "object") {
          // Check if data has accessToken directly
          if ("accessToken" in data && typeof data.accessToken === "string") {
            session.login(data.accessToken as string);
            navigate(ROUTES.HOME);
            return;
          }

          // Check if data is wrapped in a response object
          if (
            "data" in data &&
            data.data &&
            typeof data.data === "object" &&
            "accessToken" in data.data
          ) {
            session.login(
              (data.data as AccessTokenResponse).accessToken as string
            );
            navigate(ROUTES.HOME);
            return;
          }

          // Check if data is wrapped in a content object
          if (
            "content" in data &&
            data.content &&
            typeof data.content === "object" &&
            "accessToken" in data.content
          ) {
            session.login(
              (data.content as AccessTokenResponse).accessToken as string
            );
            navigate(ROUTES.HOME);
            return;
          }
        }

        console.error("Unexpected response structure:", data);
        throw new Error("Invalid response structure from register API");
      },
    }
  );

  const register = (data: ApiSchemas["RegisterRequest"]) => {
    registerMutation.mutate({ body: data });
  };

  const errorMessage = registerMutation.isError
    ? registerMutation.error.message
    : undefined;

  return {
    register,
    isPending: registerMutation.isPending,
    errorMessage,
  };
}
