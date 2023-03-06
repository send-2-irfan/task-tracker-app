import React from 'react'

function Button({ text, color}) {
  return (
    <button className={`btn`} style={{backgroundColor: color}}>{text}</button>
  )
}

Button.defaultProps = {
    color: 'steelblue'
}


export default Button