import React from 'react';
import Button from './components/Button'
import clickService from './services/clicks'


function App() {

  const handleClick = () => {
    clickService.addClick()
  }
  return (
    <div>
     <Button handleClick={handleClick}/>
    </div>
  );
}

export default App;
