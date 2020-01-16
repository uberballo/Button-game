import React from 'react';

const LoginForm = ({ handleSubmit, username }) => {
  return (
    <div>
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
