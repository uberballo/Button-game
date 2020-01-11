import React from "react";

const LoseView = ({ handlePress }) => {
  return (
    <div>
      <p>lose</p>
      <button onClick={handlePress}>play again</button>
    </div>
  );
};

export default LoseView;
