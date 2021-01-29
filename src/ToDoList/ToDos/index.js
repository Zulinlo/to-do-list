import { useState } from 'react';
import './styles.scss';

const ToDos = ({ tasks }) => {
  return (
    <div className='todos'>
      {tasks.map((task) => (
        <div key={task.id}>
          {task.taskName}
        </div>
      ))}
    </div>
  );
}

export default ToDos;
