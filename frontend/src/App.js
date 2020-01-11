import React, { useState, useEffect } from "react";
import GameButton from "./components/GameButton";
import LoginForm from "./components/LoginForm";
import countService from "./services/count";
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

  if (!user) {
    return (
      <div className="LoginView">
        <LoginView username={username} setUser={setUser} />
      </div>
    );
  }

  return (
    <div className="GameView">
      <GameView user={user} setUser={setUser} />
    </div>
  );
}

export default App;
