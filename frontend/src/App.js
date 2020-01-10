import React, { useState, useEffect } from "react";
import GameButton from "./components/GameButton";
import LoginForm from "./components/LoginForm";
import countService from "./services/count";
import userService from "./services/users";
import GameView from "./components/GameView";
import LoginView from "./components/LoginView";

const useField = type => {
  const [value, setValue] = useState("");

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
  const username = useField("text");
  const [count, setCount] = useState(0);
  const [user, setUser] = useState();

  useEffect(() => {
    async function fetchData() {
      const currentCount = await countService.getCount();
      setCount(currentCount);
    }
    fetchData();
  }, []);

  const handlePress = async event => {
    const countChange = await countService.increment(user.id);
    console.log(countChange);
    if (countChange.error) {
      console.log("nyt loppu");
      const newUser = await userService.resetPoints(user.id);
      setUser(newUser);
    } else {
      setUser({ ...user, points: user.points + countChange });
    }
  };

  const handleLogin = async event => {
    event.preventDefault();
    const result = await userService.logIn(username.value);
    setUser(result);
  };

  if (!user) {
    return (
      <div className="LoginView">
        <LoginView handleSubmit={handleLogin} username={username} />
      </div>
    );
  }

  return (
    <div className="GameView">
      <GameView handlePress={handlePress} user={user} />
    </div>
  );
}

export default App;
