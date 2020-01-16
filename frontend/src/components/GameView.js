import React from 'react'
import GameButton from './GameButton'
import LoseView from './LoseView'
import userService from '../services/users'
import LogOutButton from './LogOutButton'

const GameView = ({ user, setUser, setNotification }) => {

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
      <LogOutButton setUser={setUser} user={user}/>
      <h1>{user.username}</h1>
      <GameButton user={user} setUser={setUser} setNotification={setNotification}/>
      <p className="user-points">{user.points}</p>
    </div>
  )
}

export default GameView
