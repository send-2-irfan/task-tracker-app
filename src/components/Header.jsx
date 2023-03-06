import Button from './Button'

function Header({ title }) {
  const onClick = () => {
    console.log('Click')
  }
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={'green'} text='Add' onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
    title: 'React Task Tracker'
}


export default Header