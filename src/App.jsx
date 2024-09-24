import React, { useEffect, useState } from 'react';
import { Grid, Container } from '@mui/material';
import { cloneDeep } from 'lodash';
import Item from './components/styled/Item.jsx';
import TodoForm from "./components/form/TodoForm";
import TodoItem from "./components/form/TodoItem";
import storageService from "./utils/StorageService";

const App = () => {
    const [todos, setTodos] = useState([]);

    const saveTodo = async (data) => {
        try {
            const savedData = await storageService.saveItem(data);
            const todosCopy = cloneDeep(todos);
            todosCopy.push(savedData);
            setTodos(todosCopy);
        } catch (error) {
            console.log(error);
        }
    };

    const handleRemove = async ({ id: itemID }) => {
        const { id } = await storageService.deleteItem(itemID);
        const updatedData = todos.filter((item) => item.id !== id);
        setTodos(updatedData);
    };

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await storageService.getData();
                setTodos(data);
            } catch (e) {
                console.log(e);
            }
        };

        getData();
    }, []);

    return (
            <Container maxWidth="md">
                        <Grid container spacing={2}>
                            <Grid item xs={5} px={5}>
                                <TodoForm onSubmit={saveTodo} />
                            </Grid>
                            <Grid py={5} container item xs={7} spacing={2}>
                                {!!todos.length && todos.map(item => (
                                    <Grid key={item.id} item xs={4}>
                                        <TodoItem
                                            title={item.title}
                                            body={item.description}
                                            id={item.id}
                                            onRemove={handleRemove}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
            </Container>
    );
};

export default App;
