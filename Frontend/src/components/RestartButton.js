import React from 'react'
import '../app.css'

const RestartButton = ({ points, restartHandler, notify }) => {
  if (points > 0) {
    return null
  }
  return (
    <div>
      <button className='restartbtn' onClick={restartHandler} >Restart</button>
    </div>
  )
}


export default RestartButton