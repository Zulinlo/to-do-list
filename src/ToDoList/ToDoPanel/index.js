import { useState } from 'react';
import './styles.scss';

const ToDoPanel = ({ onAdd }) => {
  const [taskName, setTaskName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!taskName) {
      alert('Please add task');
      return;
    }

    onAdd({ taskName })
    setTaskName('');
  }

  return (
    <form className='todopanel' onSubmit={onSubmit}>
      <input type='input' value={taskName} onChange={(e) => setTaskName(e.target.value)} className='add_task' placeholder='Add Task' required />
      <label className='lab'>Task</label>
      <input type="submit" className='todopanel--button' value='Add Task' />
    </form>
  );
}

export default ToDoPanel;
