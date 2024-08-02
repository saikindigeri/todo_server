/*
import React, { useState } from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, updateTodo, deleteTodo, startEditing }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleEditChange = (e) => {
        setEditText(e.target.value);
    };

    const handleSave = () => {
        startEditing(todo._id, editText);
        setIsEditing(false);
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => updateTodo(todo._id, todo.completed)}
            />
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={editText}
                        onChange={handleEditChange}
                    />
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                <span>{todo.text}</span>
            )}
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
            <button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? 'Cancel' : 'Edit'}
            </button>
        </li>
    );
};

export default TodoItem;


*/


import React, { useState } from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, updateTodo, deleteTodo, startEditing }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleSaveClick = () => {
        startEditing(todo._id, editText);
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setEditText(todo.text); // Reset to original text
        setIsEditing(false);
    };

    return (
        <li className="todo-item">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => updateTodo(todo._id, todo.completed)}
            />
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={handleSaveClick}
                    autoFocus
                />
            ) : (
                <span>{todo.text}</span>
            )}
            <div className="button-container">
                {isEditing ? (
                    <>
                        <button className="save" onClick={handleSaveClick}>
                            Save
                        </button>
                        <button className="cancel" onClick={handleCancelClick}>
                            Cancel
                        </button>
                    </>
                ) : (
                    <>
                        <button className="edit" onClick={() => setIsEditing(true)}>
                            Edit
                        </button>
                        <button className="delete" onClick={() => deleteTodo(todo._id)}>
                            Delete
                        </button>
                    </>
                )}
            </div>
        </li>
    );
};

export default TodoItem;
