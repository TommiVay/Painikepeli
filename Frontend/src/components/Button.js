import React from 'react'
import '../app.css'

const Button = ({ points, handleClick }) => {
  if (points < 1) {
    return null
  }
  return (
    <div>
      <button className="btn" onClick={() => handleClick()}>Click!</button>
    </div>
  )
}

export default Button