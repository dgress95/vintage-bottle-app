import React, { useState } from "react";
import axios from "../api/axios";
import "../styles/user-login.css";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/users/login", { username, password });
      login(response.data.token);
      navigate("/admin");
    } catch (error) {
      console.error(
        "Login failed",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <Typography variant="h5" className="heading">
        Login
      </Typography>
      <TextField
        type="text"
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <TextField
        type="password"
        label="Password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </form>
  );
};

export default UserLogin;
