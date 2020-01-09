import React, { useState, useEffect } from 'react';
import GameButton from './components/GameButton';
import LoginForm from './components/LoginForm';
import countService from './services/count';
import userService from './services/users';

const useField = type => {
  const [value, setValue] = useState('');

  const onChange = event => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange
  };
};

function App() {
  const username = useField('text');
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const haettuCount = await countService.getCount();
      setCount(haettuCount);
    }
    fetchData();
  }, []);

  const handlePress = async () => {
    const haettuCount = await countService.increment();
    setCount(haettuCount);
  };

  const handleLogin = async event => {
    event.preventDefault();
    const result = await userService.logIn(username.value);
    console.log(result);
    setUser(username.value);
  };

  if (!user) {
    return (
      <div className='App'>
        <LoginForm handleSubmit={handleLogin} username={username} />
      </div>
    );
  }

  return (
    <div className='App'>
      <GameButton count={count} handlePress={() => handlePress()} />
    </div>
  );
}

export default App;
