import React from 'react';

const LoginForm = ({ handleSubmit, username }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Username
          <input {...username} />
        </div>
        <button type='submit'>Start Playing</button>
      </form>
    </div>
  );
};

export default LoginForm;
