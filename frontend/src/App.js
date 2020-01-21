import React, { useState, useEffect } from 'react'
import GameView from './components/GameView'
import LoginView from './components/LoginView'
import Notification from './components/Notification'
import userService from './services/users'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const useField = type => {
  const [value, setValue] = useState('')

  const onChange = event => {
    setValue(event.target.value)
  }
  return {
    type,
    value,
    onChange
  }
}

function App() {
  const username = useField('text')
  const [user, setUser] = useState('')
  const [notification, setNotification] = useState({ message: null })

  useEffect(() => {
    const getCachedUser = async () => {
      const cachedUser = window.localStorage.getItem('user')

      if (cachedUser) {
        const fetchedUser = await userService.logIn(cachedUser)
        setUser(fetchedUser)
      } else {
        setUser(null)
      }
    }
    getCachedUser()
  }, [])

  const handleNotification = ({ message, type = 'error' }) => {
    setNotification({ message, type })
    setTimeout(() => setNotification({ message: null }), 5000)
  }

  return (
    <div className="container">
      <Notification notification={notification} />
      {user ? (
        <GameView user={user} setUser={setUser} setNotification={handleNotification} />
      ) : (
        <LoginView username={username} setUser={setUser} setNotification={handleNotification} />
      )}
    </div>
  )
}

export default App
