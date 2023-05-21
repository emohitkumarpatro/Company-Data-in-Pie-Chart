import React, { useState } from "react";
import { useContext } from "react";
import { Logincontext } from "../context/logincontext";

export default function Loginpage() {
  const { username,setUsername, setshowProfile } = useContext(Logincontext);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if ((username === "Mohit" && password === "123456") || (username === "Ganesh" && password === "1234")) {
      setshowProfile(true);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-center">User Login</h1>
        <input
          type="text"
          placeholder="User Id..."
          onChange={(event) => setUsername(event.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <input
          type="password"
          placeholder="Password..."
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Login
        </button>
      </div>
    </div>
  );
}
