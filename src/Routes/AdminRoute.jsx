import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Loading from "../pages/Loading/Loading";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../customHooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isLoading] = useAdmin();
  const location = useLocation();
  if (loading || isLoading) {
    return <Loading />;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
