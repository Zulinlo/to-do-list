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

  return (
    <div className='todo--container'>
      <div className='todo--panel'>
        <div className='todo--header'>
          Simple React To Do List
        </div>
        <ToDoPanel onAdd={addTask} />
      </div>
      <div className='todo--todos'>
        {tasks.length > 0 ? (<ToDos tasks={tasks} />) : 'No Tasks' }
      </div>
    </div>
  );
}

export default ToDoList;
