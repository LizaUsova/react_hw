import React from 'react';
import {Box, FormControl, Input, InputLabel, TextField, Stack, Button, FormHelperText} from "@mui/material";
import {useFormik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    title: Yup.string().min(2, 'Must be 2 characters or more').max(10, 'Must be 10 characters or less').required('Title is required'),
    description: Yup.string().min(2, 'Must be 2 characters or more').max(25, 'Must be 25 characters or less').required('Description is required')
})

const TodoForm = ({onSubmit}) => {
    const formik = useFormik({
        initialValues: {
            title: '',
            description: ''
        },
        validationSchema,
        onSubmit: async (values, validatedForm) => {
            onSubmit(values)
        },
    });

    return (
        <Box>
            <h2>Todo Form</h2>
            <form onSubmit={formik.handleSubmit}>
                <Stack mb={4}>
                    <FormControl mb={4}>
                        <InputLabel htmlFor="todo-title">Title</InputLabel>
                        <Input
                            name="title"
                            type='text'
                            id="todo-title"
                            size="small"
                            onChange={formik.handleChange}
                            value={formik.values.title}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.title && formik.errors.title &&
                            <FormHelperText>{formik.errors.title}</FormHelperText>
                        }
                    </FormControl>
                </Stack>
                <Stack mb={4}>
                    <FormControl>
                        <TextField
                            name="description"
                            multiline
                            label="Description"
                            rows={4}
                            onChange={formik.handleChange}
                            value={formik.values.description}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.description && formik.errors.description &&
                            <FormHelperText>{formik.errors.description}</FormHelperText>
                        }
                    </FormControl>
                </Stack>

                <Button disabled={!!Object.keys(formik.errors).length} variant="outlined" type="submit">Submit</Button>
            </form>
        </Box>
    );
};

export default TodoForm;