import React from 'react'
import LoseView from './LoseView'
import PlayingView from './PlayingView'

const GameView = ({ user, setUser, setNotification }) => {
  return (
    <div className="game-view">
      {user.points <= 0 ? (
        <LoseView user={user} setUser={setUser} setNotification={setNotification} />
      ) : (
        <PlayingView user={user} setUser={setUser} setNotification={setNotification} />
      )}
    </div>
  )
}

export default GameView
