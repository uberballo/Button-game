import React from 'react'

const GameButton = ({ handlePress }) => {
  return (
    <button onClick={handlePress} className="game-button">
      press
    </button>
  )
}

export default GameButton
