import { BsFillTrashFill } from 'react-icons/bs';
import './styles.scss';

const ToDos = ({ tasks, deleteTask }) => {
  return (
    <div className='todos'>
      {tasks.map((task) => (
        <div key={task.id} className='item'>
          {task.taskName}
          <span className='icon' onClick={() => deleteTask(task.id)}>
            <BsFillTrashFill />
          </span>
        </div>
      ))}
    </div>
  );
}

export default ToDos;
