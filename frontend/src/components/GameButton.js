import React from 'react'
import countService from '../services/count'

const GameButton = ({ user, setUser, setNotification}) => {

  const handlePress = async () => {
    const countChange = await countService.increment(user.id)
    if (countChange.error){
      setNotification(countChange.error)
      return;
    }else if (countChange > 1) {
      setNotification({
        message: `You won ${countChange + 1} points!`,
        type: 'won'
      })
    }
    setUser({ ...user, points: user.points + countChange })
  }

  return (
    <button onClick={handlePress} className="game-button">
      press
    </button>
  )
}

export default GameButton
