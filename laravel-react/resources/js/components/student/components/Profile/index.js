import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";

export default class Profile extends Component {
    render() {
        return (
            <Card>
                <Card.Title className="bg-info text-light text-center">
                    <Card.Header>ประวัติส่วนตัว</Card.Header>
                </Card.Title>
                <Card.Body>
                    <Row>
                        <Col>Left</Col>
                        <Col>Right</Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}
