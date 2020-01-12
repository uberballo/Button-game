import React from 'react'
import GameButton from './GameButton'
import LoseView from './LoseView'
import countService from '../services/count'
import userService from '../services/users'

const GameView = ({ user, setUser, setNotification }) => {
  const handlePress = async () => {
    const countChange = await countService.increment(user.id)
    if (countChange > 1) {
      setNotification({
        message: `You won ${countChange + 1} points!`,
        type: 'won'
      })
    }
    setUser({ ...user, points: user.points + countChange })
  }

  const handleReset = async () => {
    const newUser = await userService.resetPoints(user.id)
    if (newUser.error) {
      setNotification(newUser.error)
    } else {
      setUser(newUser)
    }
  }

  if (user.points <= 0) {
    return (
      <div className="game-view">
        <LoseView handlePress={handleReset} />
      </div>
    )
  }
  return (
    <div className="game-view">
      <GameButton handlePress={handlePress} />
      <p className="user-points">{user.points}</p>
    </div>
  )
}

export default GameView
