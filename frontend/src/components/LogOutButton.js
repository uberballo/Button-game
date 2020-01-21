import React from 'react'

const LogOutbutton = ({ setUser}) => {
  const handlePress = () => {
    window.localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <div className="log-out-container grid-item">
      <button className="log-out-button " onClick={handlePress}>Log out</button>
    </div>
  )
}

export default LogOutbutton
