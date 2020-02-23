import React, { useState, useEffect } from 'react'
import Button from './components/Button'
import clickService from './services/clicks'
import UserPoints from './components/UserPoints'
import ClicksToWin from './components/ClicksToWin'
import Notification from './components/Notification'
import './app.css'
import RestartButton from './components/RestartButton'



function App() {
  const [points, setPoints] = useState(null)
  const [notification, setNotification] = useState({ message: null })
  const [nextWin, setNextwin] = useState(null)

  //checks if user has played before and has points
  //initializes 20 points if new user or 0 points
  useEffect(() => {
    const localPoints = window.localStorage.getItem('points')
    if (localPoints) {
      setPoints(window.localStorage.getItem('points'))
    } else {
      restartHandler()
    }
  }, [])


  //shows notification
  //win notification stays up for 2 seconds
  const notify = (message, type = 'win') => {
    setNotification({ message, type })
    if (type === 'win')
      setTimeout(() => setNotification({ message: null }), 2000)
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
    if (points == 1) {
      notify('You have run out of points!', 'restart')
    }
  }


  //sets players points to 20
  const restartHandler = () => {
    setPoints(20)
    window.localStorage.setItem('points', 20)
    setNotification({ message: null })
  }

  return (
    <div className='container'>
      <div className='topContainer'>
        <Notification notification={notification} />
      </div>
      <div className='centerContainer'>
        <Button points={points} handleClick={handleClick} />
        <RestartButton points={points} restartHandler={restartHandler} />
      </div>
      <div className='bottomContainer'>
        <UserPoints points={points} />
        <ClicksToWin clicks={nextWin} />
      </div>
    </div>
  )
}

export default App;
