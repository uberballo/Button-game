import React from 'react'

const LoseView = ({ handlePress }) => {
  return (
    <div>
      <p className="lose-text">lose</p>
      <button onClick={handlePress} className="lose-button">
        play again
      </button>
    </div>
  )
}

export default LoseView
