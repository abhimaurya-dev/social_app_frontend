/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const PublicRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? <Navigate to="/feed" /> : children;
};

export default PublicRoute;
