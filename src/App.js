import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useEffect, useState } from "react"
import AddTask from './components/AddTask';
import { v4 } from 'uuid';


const App =() => {
  const [tasks, setTasks] = useState([])

const [showAddTask, setShowAddTask] = useState(false);

 useEffect(()=> {
  fetch('http://localhost:5000/tasks')
  .then(res => res.json())
  .then(data => setTasks(data))
  .catch(err => alert(err))
 },[])

const onDelete = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
}

const onToggle = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
)}

const onAdd = (task) => {
  let id = v4();
  const newTask = {id, ...task};
  setTasks([...tasks, newTask]);
}

  return (
    <div className="container">
      <Header title={"React Task Tracker"} addTask={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask addTask={onAdd} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} />) : 'No Tasks To Show'}
    </div>
  );
}

export default App;
