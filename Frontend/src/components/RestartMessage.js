import React from 'react'

const RestartMessage = ({points, theme}) => {
  if (points > 0) {
    return null
  }
  const style = {
    color: theme === 'day' ? 'black' : 'white',
  }
  return (
    <div style={style} className='notification'>
      You have run out of points!
    </div>
  )
}

export default RestartMessage