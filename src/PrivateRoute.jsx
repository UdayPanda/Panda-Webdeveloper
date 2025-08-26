import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  return true;
};

export default function PrivateRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" />;
}