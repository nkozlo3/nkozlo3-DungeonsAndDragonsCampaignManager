import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function RegisterForm({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const user = { username, password };
      console.log("New User: ", user);
      const response = await axios.post("http://localhost:5500/register", user);
      console.log("New User Registered");
      setIsLoggedIn(true);
      navigate("/");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = { username, password };
      console.log("Loggin in: ", user);
      const response = await axios.post("http://localhost:5500/login", user);
      console.log("User Logged in");
      setIsLoggedIn(true);
      navigate("/");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register-user-container">
      <form className="register-user">
        <div className="input-cool-container">
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-cool-container">
          <input
            type="text"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="submitUser-container">
          <button className="cButton" type="submit" onClick={handleRegister}>
            Register
          </button>
          <button className="cButton" type="submit" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
