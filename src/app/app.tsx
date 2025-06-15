import { Outlet, useLocation } from "react-router-dom";
import { ROUTES } from "../shared/model/routes";
import { AppHeader } from "../features/header";

export function App() {
  const location = useLocation();

  const isAuthPage = location.pathname === ROUTES.LOGIN;
  // || location.pathname === ROUTES.REGISTER;

  return (
    <div>
      {!isAuthPage && <AppHeader />}
      <Outlet />
    </div>
  );
}
