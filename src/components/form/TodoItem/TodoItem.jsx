import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";

const TodoItem = ({title, body, id, onRemove}) => {
    return (
        <Card >
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    {title + ' ' + id}
                </Typography>
                <Typography variant="h5" component="div">
                    {body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => onRemove({title, body, id})}>Remove</Button>
            </CardActions>
        </Card>
    );
};

TodoItem.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};
export default TodoItem;