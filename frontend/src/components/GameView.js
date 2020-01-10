import React from "react";
import GameButton from "./GameButton";

const GameView = ({ handlePress, user }) => {
  return (
    <div>
      <GameButton handlePress={handlePress} />
      <p>{user.points}</p>
    </div>
  );
};

export default GameView;
