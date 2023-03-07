import Button from './Button'

function Header({ title, addTask,showAdd }) {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Open'} onClick={addTask} />
    </header>
  )
}

Header.defaultProps = {
    title: 'React Task Tracker'
}


export default Header