import React from 'react';
const Main = () => {
    const inputRef = React.useRef();
    const [todos, setTodos] = React.useState(() => {
        const storeTodos = localStorage.getItem('todos');
        const data = JSON.parse(storeTodos)
        return data ?? [];
    });
    const [title, setTitle] = React.useState('');
    const [idUpdated, setIdUpdated] = React.useState();
    const [isUpdated, setIsUpdated] = React.useState(false);
    const handleSubmit = () => {
        const todo = {
            id: Math.floor(Math.random() * 100000),
            title
        }
        if (title !== "") {
            setTodos(prevState => {
                const newTodos = [...prevState, todo];
                const jsonTodos = JSON.stringify(newTodos);
                localStorage.setItem('todos', jsonTodos);
               return [...prevState, todo]
            })
        }
        else {
            alert("Enter content title");
        }
        inputRef.current.focus();
        setTitle("");
    }
    const handleDelete = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        localStorage.setItem('todos', JSON.stringify(newTodos));
        setTodos(newTodos)
    }
    const handleUpdate = (id) => {
        setIsUpdated(true);
        const todo = todos.find(todo => todo.id === id);
        setTitle(todo.title);
        setIdUpdated(id)
    }
    const updateDone = () => {
        const todosNew = todos.map(todo => {
            if (todo.id === idUpdated) {
                if (title !== "") {
                    todo.title = title
                }
                else {
                    alert("Enter content title");
                }
            }
            return todo;    
        })
        localStorage.setItem('todos', JSON.stringify(todosNew));
        setIsUpdated(false);
        setTitle("");
    }
    return (
        <div>
            <div>
                <div>
                   <h1>TodoList</h1>
                    <input ref={inputRef} value={title} type="text" placeholder="Enter todo..." onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <br></br>
                {
                    !isUpdated ? <button onClick={handleSubmit}>Add todo</button> : <button onClick={updateDone}>Update</button>
                }
            </div>
            <div>
                <ul>
                    {
                        todos.map((todo, index) => {
                            return (
                                <div key={todo.id}>
                                    <h3>{index} -- {todo.title}&nbsp;&nbsp;&nbsp;<button onClick={() => handleDelete(todo.id)}>x</button>&nbsp;&nbsp;&nbsp; <button onClick={() => handleUpdate(todo.id)}>update</button></h3>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Main;