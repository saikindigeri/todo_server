

import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import './styles.css';
import axios from 'axios';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5004/todos')
            .then(response => setTodos(response.data))
            .catch(error => console.error('Error:', error));
    }, []);

    const addTodo = () => {
        axios.post('http://localhost:5004/todos', { text: newTodo })
            .then(response => {
                setTodos([...todos, response.data]);
                setNewTodo('');
            })
            .catch(error => console.error('Error:', error));
    };

    const updateTodo = (id, completed) => {
        axios.put(`http://localhost:5004/todos/${id}`, { completed: !completed })
            .then(response => {
                setTodos(todos.map(todo => todo._id === id ? response.data : todo));
            })
            .catch(error => console.error('Error:', error));
    };

    const startEditing = (id, text) => {
        axios.put(`http://localhost:5004/todos/${id}`, { text })
            .then(response => {
                setTodos(todos.map(todo => todo._id === id ? response.data : todo));
            })
            .catch(error => console.error('Error:', error));
    };

    const deleteTodo = (id) => {
        axios.delete(`http://localhost:5004/todos/${id}`)
            .then(() => {
                setTodos(todos.filter(todo => todo._id !== id));
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div className="App">
            <h1>Todo List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add new todo"
            />
            <button onClick={addTodo}>Add Todo</button>
            <TodoList
                todos={todos}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
                startEditing={startEditing}
            />
        </div>
    );
};

export default App;
