import React from 'react'
import '../app.css'

const NightmodeToggle = ({toggleTheme, theme}) => {
  const style = {
    color: theme === 'day' ? 'white' : 'black',
    backgroundColor: theme === 'day' ? '#121212' : 'white'
  }

  return (
    <div >
      <button style={style} className='themeButton' onClick={toggleTheme}>
        Switch theme
      </button>
    </div>
  )
}

export default NightmodeToggle