import { Navigate, Outlet } from "react-router-dom";
import { ROLES } from "../constants";
import { ROUTES } from "../constants";

interface Props {
  role: ROLES[];
}

/* User data coming from API */
const user = {
  isAuth: true,
  role: "user",
  name: "richard",
};

/* If the user role matches the role that the route is requiring the user can access the page, 
  otherwise he will be redirected to unauthorized page  */
const RoleGuard: React.FC<Props> = ({ role }) => {
  const hasRole = role?.filter((item) => [user.role].includes(item));
  return user.role === hasRole[0] ? (
    <Outlet />
  ) : (
    <Navigate replace to={ROUTES.DEFAULT.UNAUTHORIZED} />
  );
};

export default RoleGuard;
