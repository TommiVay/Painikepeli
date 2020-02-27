import React from 'react'
import '../app.css'

const RestartButton = ({ points, restartHandler, theme }) => {
  if (points > 0) {
    return null
  }

  const style = {
    color: theme === 'day' ? 'white' : '#121212',
    background: theme === 'day' ? '#121212' : 'white',
  }

  return (
    <div>
      <button style = {style} className='restartbtn' onClick={restartHandler} >Restart</button>
    </div>
  )
}


export default RestartButton