import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import AuthContext from "../../context/auth/authContext";

const ProtectedRoute = ({ children }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  if (isAuthenticated === false && loading === true) {
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
