import React, { useState, useEffect } from "react";
import GameButton from "./components/GameButton";
import countService from "./services/count";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    countService.getCount();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <GameButton count={count} />
      </header>
    </div>
  );
}

export default App;
