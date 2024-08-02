

import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, updateTodo, deleteTodo, startEditing }) => {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem
                    key={todo._id}
                    todo={todo}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                    startEditing={startEditing}
                />
            ))}
        </ul>
    );
};

export default TodoList;
