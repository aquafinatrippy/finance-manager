import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";

export const PrivateRoute = () => {
  const { loggedIn, loading } = useAuthStatus();

  if (loading) return <p> ...loading</p>;

  return loggedIn ? <Outlet /> : <Navigate to={"/login"} />;
};
