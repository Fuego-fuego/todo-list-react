import { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    // console.log(todos);
    const todosElements = todos.map((todo, index) => (
        <li key={index}> {todo} <span className ="delete-btn" onClick= {handleDeleteTodo}> X </span></li>
    ));
    function handleAddTodo() {
        if (newTodo.trim !== '') {
            setTodos(() => [...todos, newTodo.trim()]);
        }
    }
    function handleDeleteTodo(index) {
        const newTodos = [...todos];

        newTodos.splice(index,1);
        setNewTodo(newTodos);
    }
    return (
        <div>
            <h1 className="form-heading">To-Do List</h1>
            <div className="input-section">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button onClick={handleAddTodo}> Add</button>
            </div>
            <ul className="todo-list" role="list">
                {todosElements}
            </ul>
        </div>
    );
}

export default TodoList;
