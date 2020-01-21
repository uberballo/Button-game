import React from 'react'
import GameButton from './GameButton'
import LogOutButton from './LogOutButton'

const PlayingView = ({ user, setUser, setNotification }) => {
  return (
    <div className="play-view">
      <LogOutButton setUser={setUser} user={user} />
      <h1 className="username-text grid-item">{user.username}</h1>
      <GameButton user={user} setUser={setUser} setNotification={setNotification} />
      <p className="user-points grid-item">{user.points}</p>
    </div>
  )
}

export default PlayingView
