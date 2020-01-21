import React from 'react'
import userService from '../services/users'

const LoseView = ({ user, setUser, setNotification }) => {
  const handleReset = async () => {
    const newUser = await userService.resetPoints(user.id)
    if (newUser.error) {
      setNotification(newUser.error)
    } else {
      setUser(newUser)
    }
  }

  return (
    <div className="lose-view">
      <p className="lose-text">You lost the game</p>
      <button onClick={handleReset} className="lose-button">
        play again
      </button>
    </div>
  )
}

export default LoseView
