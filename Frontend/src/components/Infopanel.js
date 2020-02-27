import React from 'react'

const Infopanel = ({ clicks, points }) => {
  if (!clicks) {
    return(
    <div>
      <h1>Your points: {points}</h1>
    </div>
    )
  }
  return (
    <div>
      <h1>Your points: {points}</h1>
      <h1>Next win in {clicks} clicks!</h1>
    </div>
  )
}

export default Infopanel