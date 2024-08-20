import {Col, Container, Row} from 'react-bootstrap'
import React, {Component} from "react";
import MarkdownEditor  from './components/MarkdownEditor'

class App extends Component {
    render() {
        return (
            <main className="users">
                <Container>
                    <Row>
                        <Col>
                            <MarkdownEditor onContentChange={console.log} />
                        </Col>
                    </Row>
                </Container>
            </main>
        );
    }
}

export default App;