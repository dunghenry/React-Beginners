import React from 'react'
import TodoForm from './TodoForm'
import NavBar from './NavBar';
import reducer from '../useReducer/reducers';
import initialState from '../useReducer/initialState';
import { deleteTodo } from '../useReducer/actions'
import logger from '../useReducer/logger'
const Todos = () => {
    const [state, dispatch] = React.useReducer(logger(reducer), initialState);
    const { todos, todo } = state;
    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }
    return (
        <div>
            <NavBar />
            <TodoForm dispatch={dispatch} todo={todo} />
            <ul>
                {
                    todos.map((todo, index) => <li key={index}>{index + 1} - {todo.title} <button onClick={() => handleDelete(todo.id)}>x</button></li>)
                }
            </ul>
        </div>
    )
}

export default Todos;