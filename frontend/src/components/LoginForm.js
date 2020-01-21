import React from 'react';

const LoginForm = ({ handleSubmit, username }) => {
  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div>
          Username
          <input name='username' {...username} />
        </div>
        <button type='submit'>Start Playing</button>
      </form>
    </div>
  );
};

export default LoginForm;
