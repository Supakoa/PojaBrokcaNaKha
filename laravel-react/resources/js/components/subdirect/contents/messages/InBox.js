import React, { Component } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

export default class InBox extends Component {
    render() {
        return (
            <Card>
                <Card.Header className="text-center">
                    <Card.Title className="p-2">ข้อความเข้า</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Container fluid>
                        <Row>
                            <Col>List name</Col>
                            <Col>
                                <Card.Body>text Message</Card.Body>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        );
    }
}
