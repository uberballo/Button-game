import React from 'react'

const Notification = ({ notification }) => {
  if (!notification.message) {
    return null
  }

  return (
    <div className="notification">
      <p className="notification-message">{notification.message}</p>
    </div>
  )
}

export default Notification
