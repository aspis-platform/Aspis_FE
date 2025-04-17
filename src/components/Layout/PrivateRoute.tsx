import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Cookies } from "react-cookie";

export const PrivateRoute = () => {
  const cookies = new Cookies();
  const location = useLocation();
  const token = cookies.get("accessToken");

  console.log(token);

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};
