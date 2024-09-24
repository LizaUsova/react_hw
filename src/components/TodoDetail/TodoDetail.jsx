import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import storageService from '../../utils/StorageService';
import { Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
});

const TodoDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState(null);

    useEffect(() => {
        const fetchTodo = async () => {
            const data = await storageService.getData();
            const foundTodo = data.find(t => t.id === parseInt(id));
            setTodo(foundTodo);
        };
        fetchTodo();
    }, [id]);

    const formik = useFormik({
        initialValues: {
            title: todo?.title || '',
            description: todo?.description || '',
        },
        validationSchema,
        onSubmit: async (values) => {
            await storageService.saveItem({ ...todo, ...values });
            alert('Todo updated successfully');
            navigate('/');
        },
    });

    if (!todo) return <div>Loading...</div>;

    return (
        <Box>
            <h2>Todo Detail</h2>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    name="title"
                    label="Title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    onBlur={formik.handleBlur}
                    fullWidth
                />
                <TextField
                    name="description"
                    label="Description"
                    multiline
                    rows={4}
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    onBlur={formik.handleBlur}
                    fullWidth
                />
                <Button type="submit" variant="outlined">Save Changes</Button>
                <Button variant="outlined" onClick={async () => {
                    await storageService.deleteItem(todo.id);
                    navigate('/');
                }}>
                    Delete Todo
                </Button>
            </form>
        </Box>
    );
};

export default TodoDetail;
