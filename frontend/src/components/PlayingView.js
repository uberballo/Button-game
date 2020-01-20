import React from 'react'
import GameButton from './GameButton'
import LogOutButton from './LogOutButton'

const PlayingView = ({ user, setUser, setNotification }) => {
  return (
    <div>
      <LogOutButton setUser={setUser} user={user} />
      <h1 className="username-text">{user.username}</h1>
      <GameButton user={user} setUser={setUser} setNotification={setNotification} />
      <p className="user-points">{user.points}</p>
    </div>
  )
}

export default PlayingView
