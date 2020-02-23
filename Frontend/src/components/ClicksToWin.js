import React from 'react'

const ClicksToWin = ({ clicks }) => {
  if (!clicks) {
    return null
  }

  return (
    <div>
      <h1>Next win in {clicks} clicks!</h1>
    </div>
  )
}

export default ClicksToWin