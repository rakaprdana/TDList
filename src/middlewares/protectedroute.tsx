import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/authcontext";

export const ProtectedRoute = () => {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to={"/"} replace />;
};
