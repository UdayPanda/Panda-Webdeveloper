import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ControlPanel from "./components/ControlPanel";
import PrivateRoute from "./PrivateRoute";
import Login from "./components/Login";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/control-panel"
          element={
            <PrivateRoute>
              <ControlPanel />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}