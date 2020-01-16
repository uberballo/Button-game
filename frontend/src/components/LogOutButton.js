import React from 'react'

const LogOutbutton = ({ setUser}) => {
  const handlePress = () => {
    window.localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <div>
      <button onClick={handlePress}>Log out</button>
    </div>
  )
}

export default LogOutbutton
