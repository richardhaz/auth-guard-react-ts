import { Route } from "react-router-dom";
import { RoleGuard } from "../components";
import { ROLES, ROUTES } from "../constants";
import { Dashboard, Payments } from "../pages";
import { RoutesWithNotFound } from "../utils";

const PrivateRoutes = () => {
  return (
    <RoutesWithNotFound>
      {/* --> /dashboard */}
      <Route path={ROUTES.DEFAULT.APP} element={<Dashboard />} />
      <Route element={<RoleGuard role={[ROLES.ADMIN]} />}>
        {/* --> /dashboard/payments */}
        <Route path={ROUTES.PRIVATE.PAYMENTS} element={<Payments />} />
      </Route>
    </RoutesWithNotFound>
  );
};
export default PrivateRoutes;
