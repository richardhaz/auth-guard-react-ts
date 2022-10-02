import { BrowserRouter, Route } from "react-router-dom";
import AuthGuard from "./components/auth-guard";
import { ROUTES } from "./constants";
import { PrivateRoutes, PublicRoutes } from "./routes";
import { RoutesWithNotFound } from "./utils";

function App() {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path={`${ROUTES.DEFAULT.APP}*`} element={<PublicRoutes />} />
        <Route element={<AuthGuard />}>
          <Route
            path={`${ROUTES.PRIVATE.DASHBOARD}/*`}
            element={<PrivateRoutes />}
          />
        </Route>
      </RoutesWithNotFound>
    </BrowserRouter>
  );
}

export default App;
