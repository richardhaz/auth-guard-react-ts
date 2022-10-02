import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages";

interface Props {
  children: React.ReactNode;
}

const RoutesWithNotFound: React.FC<Props> = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default RoutesWithNotFound;
