import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "Simon" && password === "Lalalala") {
      const token = "B44E6D3C-4D3E-4F1A-8F2A-9C6D8E7F5B3A";
      localStorage.setItem("authToken", token);
      navigate("/control-panel");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-black to-gray-800">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] rounded-2xl bg-slate-800">
        <h1 className="text-xl text-white font-bold text-center mt-6">
          Login Control Panel
        </h1>
        <form className="flex flex-col items-center mt-4">
          <input
            type="text"
            placeholder="Username"
            className="mb-4 p-2 text-white border-1 border-white rounded-lg w-3/4"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 p-2 text-white border-1 border-white rounded-lg w-3/4"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-1 mb-6 rounded-lg hover:bg-blue-600"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
