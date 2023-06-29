import { FaRegTrashAlt } from 'react-icons/fa';
import { CgRadioCheck, CgCheckO } from 'react-icons/cg';

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer color text-black`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
};

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        {/* <input onChange={() => toggleComplete(todo)} type='checkbox' checked={todo.completed ? 'checked' : ''} /> */}
        <label>
          <input
            type='checkbox'
            checked={todo.completed ? 'checked' : ''}
            onChange={() => toggleComplete(todo)}
            style={{ display: 'none' }}
          />
          {todo.completed ? (
            <CgCheckO size={20} />
          ) : (
            <CgRadioCheck size={20} />
          )}
        </label>
        <p onClick={() => toggleComplete(todo)} className={todo.completed ? style.textComplete : style.text}>
          {todo.text}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>{<FaRegTrashAlt />}</button>
    </li>
  );
};

export default Todo;