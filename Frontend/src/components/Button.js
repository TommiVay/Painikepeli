import React from 'react'

const Button = ({handleClick}) => {
  return(
    <div>
      <button onClick={() => handleClick()}>asd</button>
    </div>
  )
}

export default Button