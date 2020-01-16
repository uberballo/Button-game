import React from "react";
import LoginForm from "./LoginForm";
import userService from "../services/users";

const LoginView = ({ username, setUser, setNotification }) => {

  const handleLogin = async event => {
    event.preventDefault();
    const result = await userService.logIn(username.value);
    if (result.error) {
      setNotification(result.error);
    } else {
      setUser(result);
      window.localStorage.setItem('user',result.username)
    }
  };

  return (
    <div>
      <LoginForm handleSubmit={handleLogin} username={username} />
    </div>
  );
};

export default LoginView;
