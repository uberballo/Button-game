import React from "react";
import GameButton from "./GameButton";
import LoseView from "./LoseView";
import countService from "../services/count";
import userService from "../services/users";

const GameView = ({ user, setUser }) => {
  const handlePress = async event => {
    const countChange = await countService.increment(user.id);
    console.log(countChange);
    //const newUser = await userService.resetPoints(user.id);
    //setUser(newUser);
    setUser({ ...user, points: user.points + countChange });
  };

  const handleReset = async () => {
    const newUser = await userService.resetPoints(user.id);
    setUser(newUser);
  };

  if (user.points <= 0) {
    return (
      <div>
        <LoseView handlePress={handleReset} />
      </div>
    );
  }
  return (
    <div>
      <GameButton handlePress={handlePress} />
      <p>{user.points}</p>
    </div>
  );
};

export default GameView;
