import React from 'react'

const Notification = ({ notification }) => {


  return (
    <div className="notification">
      {notification.message ? 
      <p className="notification-message">{notification.message}</p>
      : null
      }
    </div>
  )
}

export default Notification
