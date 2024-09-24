import React, { useEffect, useState } from 'react';
import TodoItem from '../form/TodoItem';
import storageService from '../../utils/StorageService';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const data = await storageService.getData();
            setTodos(data);
        };
        fetchTodos();
    }, []);

    const handleRemove = async (todo) => {
        await storageService.deleteItem(todo.id);
        setTodos(todos.filter(t => t.id !== todo.id));
    };

    return (
        <Box>
            <h2>Todo List</h2>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    title={todo.title}
                    body={todo.description}
                    id={todo.id}
                    onRemove={handleRemove}
                />
            ))}
            <Link to="/add">
                <Button variant="outlined">Add Todo</Button>
            </Link>
        </Box>
    );
};

export default TodoList;
