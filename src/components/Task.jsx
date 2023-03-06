function Task({ task, onDelete }) {
  return (
    <div className='task'>
        <h3 onClick={()=>onDelete(task.id)}>{task.text}</h3> 
        <p>{task.day}</p>
    </div>
  )
}

export default Task