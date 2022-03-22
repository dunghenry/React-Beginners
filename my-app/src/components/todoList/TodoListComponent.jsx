import React, { useState } from 'react'
const TodoListComponent = () => {
    const [todos, setTodos] = useState(() => {
        const data = JSON.parse(localStorage.getItem('todos')) || []; // ?? [] ki hieu neu dl tra  ve la null or undefined thi gan dl cho mang rong
        return data;
    });
    const [title, setTitle] = useState('');
    const handleSubmit = () => {
        if (title) {
            setTodos(prevState => {
                const newTodos = [...prevState, title]
                const data = JSON.stringify(newTodos);
                localStorage.setItem('todos', data)
                return newTodos;
            });
        }
        else {
            alert('Nhap tieu de!');
        }
        setTitle('');
    }
    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo, index) => index !== id);
        setTodos(newTodos);
        const data = JSON.stringify(newTodos);
        localStorage.setItem('todos', data);
    }
    return (
        <div style={{ margin: '100px' }}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button type="submit" onClick={handleSubmit}>Add</button>
            <ul>
                {
                    todos.map((todo, index) => {
                        return (
                            <div key={index} style={{display: 'flex'}}>
                                <li style={{ marginRight: '10px' }}>{todo}</li>
                                <br></br>
                                <button onClick={() => deleteTodo(index)}>x</button>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default TodoListComponent;