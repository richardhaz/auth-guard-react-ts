import { Outlet, Navigate } from "react-router-dom";
import { ROUTES } from "../constants";

const AuthGuard = () => {
  /* Replace isAuth and verify if the user is logged in with redux or context */
  const isAuth = true;

  /* If the user is authorized he will be able to access private routes, otherwise he'll be redirected to login page */
  return isAuth ? <Outlet /> : <Navigate replace to={ROUTES.DEFAULT.LOGIN} />;
};
export default AuthGuard;
