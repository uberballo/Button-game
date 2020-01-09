import React from 'react';

const GameButton = ({ count, handlePress }) => {
  return <button onClick={handlePress}>{count}</button>;
};

export default GameButton;
