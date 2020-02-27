import React, { useState, useEffect } from 'react'
import Button from './components/Button'
import clickService from './services/clicks'
import Infopanel from './components/Infopanel'
import Notification from './components/Notification'
import './app.css'
import RestartButton from './components/RestartButton'
import RestartMessage from './components/RestartMessage'
import NightmodeToggle from './components/NightmodeToggle'


function App() {
  const [points, setPoints] = useState(null)
  const [notification, setNotification] = useState(null)
  const [nextWin, setNextwin] = useState(null)
  const [theme, setTheme] = useState('day')

  //checks if user has played before and has points
  //initializes 20 points if new user or 0 points
  useEffect(() => {
    const localPoints = window.localStorage.getItem('points')
    const localTheme = window.localStorage.getItem('theme')
    if (localTheme) {
      setTheme(localTheme)
    }
    if (localPoints) {
      setPoints(window.localStorage.getItem('points'))
    } else {
      restartHandler()
    }
  }, [])


  //shows notification for 2 seconds
  const notify = (message) => {
    setNotification(message)
    setTimeout(() => setNotification(null), 2000)
  }

  //handles the main button click
  //updates players points
  //subtracts 1 point for every click
  //if the click won, adds the win amount to points and show notification
  //checks if player has run out of points and notifies about it
  const handleClick = async () => {
    const response = await clickService.addClick()
    window.localStorage.setItem('points', points - 1 + response.win)
    setPoints(points - 1 + response.win)
    setNextwin(response.clicksToWin)
    if (response.win !== 0) {
      notify(`You won ${response.win} points!`)
    }
  }

  //sets players points to 20
  const restartHandler = () => {
    setPoints(20)
    window.localStorage.setItem('points', 20)
  }


//toggles the used theme and sets it to localstorage
  const toggleTheme = () => {
    if (theme === 'day') {
      window.localStorage.setItem('theme', 'night')
      setTheme('night')
    } else {
      window.localStorage.setItem('theme', 'day')
      setTheme('day')
    }
  }

  return (
    <div className='container'
    style={{
      background: theme === 'night' ? '#121212' : '#fff',
      color: theme === 'night' ? '#fff' : '#121212',
    }}>
      <div className='topContainer'>
        <Notification notification={notification} />
        <RestartMessage points={points} theme={theme}/>
        <NightmodeToggle toggleTheme={toggleTheme} theme={theme}/>
      </div>
      <div className='centerContainer'>
        <Button points={points} handleClick={handleClick} />
        <RestartButton points={points} restartHandler={restartHandler} theme={theme} />
      </div>
      <div className='bottomContainer'>
        <Infopanel clicks={nextWin} points={points} />
      </div>
    </div>
  )
}

export default App;
