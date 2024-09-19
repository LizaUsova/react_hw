import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import TodoForm from './TodoForm';
import TodoList from "./TodoList";
import { uniqueId } from 'lodash';

const TodoBox = () => {
    const [items, setItems] = useState([]);

    const addTodoHandler = (text) => {
        const newItem = { id: uniqueId(), text };
        setItems([newItem, ...items]);
    };

    const onRemove = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const removeAllHandler = () => {
        setItems([]);
    };

    return (
        <div>
            <Container>
                <h1 className='pt-5'>TodoBox</h1>
                <Row className='pt-5'>
                    <Col sx={6}>
                        <TodoForm addTodo={addTodoHandler} />
                    </Col>
                    <Col sx={6}>
                        <TodoList
                            items={items}
                            onRemove={onRemove}
                            removeAll={removeAllHandler}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TodoBox;
