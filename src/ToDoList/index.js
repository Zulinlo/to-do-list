import { useState } from 'react';
import './styles.scss';
import ToDoPanel from './ToDoPanel';
import ToDos from './ToDos';

const ToDoList = () => {
  // Tasks
  const [tasks, setTasks] = useState([]);

  // Add a task
  const addTask = (taskName) => {
    let id = Math.floor(Math.random() * 1000) + 1;
    console.log(taskName);
    let newTask = {id, ...taskName};
    console.log(newTask);

    setTasks([...tasks, newTask]);
  }

  // Dleete a track
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className='todo--container'>
      <div className='todo--panel'>
        <div className='todo--header'>
          Simple React To Do List
        </div>
        <ToDoPanel onAdd={addTask} />
      </div>
      <div className='todo--todos'>
        {tasks.length > 0 ? (<ToDos tasks={tasks} deleteTask={deleteTask} />) : 'No Tasks' }
      </div>
    </div>
  );
}

export default ToDoList;
