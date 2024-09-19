import {useState} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import TodoForm from './TodoForm';
import TodoList from "./TodoList";

const TodoBox = () => {
    const [items, setItems] = useState([]);

    const addTodoHandler = (text) => {
        setItems([text, ...items]);
    };

    const removeTodoHandler = (indexToRemove) => {
        setItems(items.filter((_, index) => index !== indexToRemove));
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
                            removeTodo={removeTodoHandler}
                            removeAll={removeAllHandler}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TodoBox;
