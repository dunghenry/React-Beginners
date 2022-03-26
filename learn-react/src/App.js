import './App.css';
import { useRef } from 'react';
import { useStore, actions } from './store';

function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  const inputRef = useRef();
  const handleSubmit = () => {
    dispatch(actions.addTodo(todoInput));
    dispatch(actions.setTodoInput(''));
    inputRef.current.focus();
  }
  return (
    <div className="App">
      <input
        ref={inputRef}
        value={todoInput}
        placeholder="Enter todo..."
        onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {
          todos.map(todo => {
            return (
              <div key={todo.id}>
                <li>{ todo.title }</li>
              </div>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
