import React, { useState } from 'react'
import countService from '../services/count'

const GameButton = ({ user, setUser, setNotification }) => {
  const [buttonState, setButtonState] = useState(false)

  const handlePress = async () => {
    setButtonState(true)
    const countChange = await countService.increment(user.id)
    if (countChange.error) {
      setNotification(countChange.error)
      return
    } else if (countChange > 1) {
      setNotification({
        message: `You won ${countChange + 1} points!`,
        type: 'won'
      })
    }
    setUser({ ...user, points: user.points + countChange })
    setButtonState(false)
  }

  return (
    <button onClick={handlePress} className="game-button" disabled={buttonState}>
      press
    </button>
  )
}

export default GameButton
