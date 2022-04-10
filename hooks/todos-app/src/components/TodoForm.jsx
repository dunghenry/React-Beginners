import React from 'react';
import { setTodo, addTodo } from '../useReducer/actions';
const TodoForm = ({ dispatch, todo }) => {
  const inpuRef = React.useRef();
  const handleSubmit = () => {
    dispatch(addTodo(todo));
    dispatch(setTodo(''));
    inpuRef.current.focus();
  }
  return (
      <div>
          <input ref={inpuRef} type="text" value={todo} onChange={(e) => dispatch(setTodo(e.target.value))} placeholder="Enter todo..."/>
          <button onClick={handleSubmit}>Add todo</button>
    </div>
  )
}

export default TodoForm;