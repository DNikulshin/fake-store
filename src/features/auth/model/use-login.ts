import { publicRqClient } from "@/shared/api/istance";
import { ApiSchemas } from "@/shared/api/schema";
import { ROUTES } from "@/shared/model/routes";
import { useSession } from "@/shared/model/session";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const session = useSession();

  const loginMutation = publicRqClient.useMutation("post", "/auth/login", {
    onSuccess(data) {
      if (data.access_token) {
        session.login(data.access_token);
        navigate(ROUTES.HOME);
      }
    },
  });

  const login = (data: ApiSchemas["User"]) => {
    loginMutation.mutate({ body: data });
  };

  const errorMessage = loginMutation.isError
    ? (loginMutation.error as ApiSchemas["Error"])?.message ??
      "An error occurred during login"
    : undefined;

  return {
    login,
    isPending: loginMutation.isPending,
    errorMessage,
  };
}
