import Task from "./Task"

function Tasks({ tasks }) {
  return ( 
    <>
        {
            tasks.map(task => 
                // <Task key={task.id}> task={task}</Task>
                // <h3 key={task.id}>{task.text}</h3>
                <Task key={task.id} task={task}/>
            )
        }
    </>
  )
}

export default Tasks