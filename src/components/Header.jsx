import React from 'react'
import Button from './Button'

function Header({ title }) {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={'green'} text='Add' />
    </header>
  )
}

Header.defaultProps = {
    title: 'React Task Tracker'
}


export default Header