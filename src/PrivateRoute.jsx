import { Navigate } from "react-router-dom";

const isAuthenticated = () => {

  return localStorage.getItem("authToken") === "B44E6D3C-4D3E-4F1A-8F2A-9C6D8E7F5B3A";
  
};

export default function PrivateRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" />;
}