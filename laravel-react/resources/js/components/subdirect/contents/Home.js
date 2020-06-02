import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Welcome from "./HomeComponent/Welcome";
import AlertMessage from "./HomeComponent/AlertMessage";
import AlertReport from "./HomeComponent/AlertReport";
import TimeZone from "./HomeComponent/TimeZone";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: null
        };
    }

    componentDidMount() {}

    render() {
        return (
            <Container fluid>
                <Row className="mb-3">
                    <Col sm={8} md={6} lg={6}>
                        <Welcome />
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <TimeZone />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col sm={12} md={12} lg={12}>
                        <AlertReport />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col sm={12} md={8} lg={8}>
                        <AlertMessage />
                    </Col>
                </Row>
            </Container>
        );
    }
}
