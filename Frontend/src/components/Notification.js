import React from 'react'




const Notification = ({ notification }) => {
  if (!notification.message) {
    return null
  }

  const style = {
    color: notification.type == 'win' ? 'red' : 'black',
    fontSize: 50,
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 10,
    position: 'float'

  }

  return (
    <div style={style}>
      {notification.message}
    </div>
  )
}

export default Notification