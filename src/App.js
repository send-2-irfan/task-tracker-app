import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"
import AddTask from './components/AddTask';
import { v4 } from 'uuid';


const App =() => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
])

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
      <Header title={"React Task Tracker"} />
      <AddTask addTask={onAdd} />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} />) : 'No Tasks To Show'}
    </div>
  );
}

export default App;
