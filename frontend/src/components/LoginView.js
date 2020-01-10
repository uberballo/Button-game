import React from "react";
import LoginForm from "./LoginForm";

const LoginView = ({ handleSubmit, username }) => {
  return (
    <div>
      <LoginForm handleSubmit={handleSubmit} username={username} />
    </div>
  );
};

export default LoginView;
