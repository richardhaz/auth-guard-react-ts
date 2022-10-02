import { Navigate, Route } from "react-router-dom";
import { ROUTES } from "../constants";
import { Login, SignUp, Unauthorized } from "../pages";
import { RoutesWithNotFound } from "../utils";

const PublicRoutes = () => {
  return (
    <RoutesWithNotFound>
      {/* --> / */}
      <Route
        path={ROUTES.DEFAULT.APP}
        element={<Navigate to={ROUTES.PRIVATE.DASHBOARD} />}
      />
      {/* --> /login */}
      <Route path={ROUTES.DEFAULT.LOGIN} element={<Login />} />
      {/* --> /sign-up */}
      <Route path={ROUTES.DEFAULT.SIGNUP} element={<SignUp />} />
      {/* --> /unauthorized */}
      <Route path={ROUTES.DEFAULT.UNAUTHORIZED} element={<Unauthorized />} />
    </RoutesWithNotFound>
  );
};
export default PublicRoutes;
