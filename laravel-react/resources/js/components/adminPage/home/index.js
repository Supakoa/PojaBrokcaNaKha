import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Welcome from "./Welcome";
import AlertMessage from "./AlertMessage";
import AlertReport from "./AlertReport";
import TimeZone from "./TimeZone";

export default function Home() {
    return (
        <Container fluid className="my-2">
            <Row className="mb-3">
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
