import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import PropTypes from "prop-types";

class TodoItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {title, body} = this.props

        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {body}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

TodoItem.protoTypeype = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default TodoItem;