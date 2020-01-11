import React from "react";
import LoginForm from "./LoginForm";
import userService from "../services/users";

const LoginView = ({ username, setUser }) => {
  const handleLogin = async event => {
    event.preventDefault();
    const result = await userService.logIn(username.value);
    setUser(result);
  };

  return (
    <div>
      <LoginForm handleSubmit={handleLogin} username={username} />
    </div>
  );
};

export default LoginView;
