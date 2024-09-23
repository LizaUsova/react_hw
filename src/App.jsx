import React, {useEffect, useState} from 'react';
import { Grid, Container } from '@mui/material';
import {cloneDeep} from "lodash";
import Item from './components/styled/Item.jsx';
import TodoForm from "./components/form/TodoForm/TodoForm";
import TodoItem from "./components/form/TodoItem"

const App = () => {
    const [todos, setTodos] = useState([]);

    const saveTodo = (data) => {
        const todosCopy = cloneDeep(todos);
        todosCopy.push(cloneDeep(data));
        setTodos(todosCopy)
    }

    useEffect(() => {
        console.log(todos);
    }, [todos]);

    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item xs={5} px={5}>
                    <TodoForm onSubmit={saveTodo}/>
                </Grid>
                <Grid py={5} container item xs={7} spacing={2}>
                    {!!todos.length && todos.map((item, index) => (
                        <Grid key={item.title.length + index} item xs={4}>
                            <TodoItem title={item.title} body={item.description}/>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
};

export default App;
