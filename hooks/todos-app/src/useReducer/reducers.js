import { SET_TODO, ADD_TODO, DELETE_TODO } from "./constants";
const reducer = (state, action) => {
    switch (action.type) {
        case SET_TODO:
            return {
                ...state,
                todo: action.payload
            }
        case ADD_TODO:
            const todo = {
                id: Math.floor(Math.random() * 100000),
                title: action.payload
            }
            return {
                ...state,
                todos: [...state.todos, todo]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        default:
            throw new Error("Invalid action");
    }
}
export default reducer;