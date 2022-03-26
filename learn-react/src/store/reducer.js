import { SET_TODO_INPUT, ADD_TODO } from './constants';
export const initialState = {
    todos: [],
    todoInput: '',
}

function reducer(state, action){
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            const newTodo = {
                id: Math.floor(Math.random() * 100000),
                title: action.payload,
                complete: false,
            }
            console.log(newTodo);
            return {
                ...state,
                todos: [...state.todos, newTodo]
            }
        default:
            return initialState;
    }
}
export default reducer;
