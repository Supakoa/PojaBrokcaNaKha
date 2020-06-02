import React from "react";
// import { Link, useHistory, useLocation } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

import ComponentLogin from "./element/ComponentLogin";
import FormRegister from "./element/FormRegister";

export default function Register() {
    return (
        <Container fluid className="effectSection">
            <Row className="section-log-in">
                <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    className="bg-info text-light d-flex align-item-center"
                >
                    <ComponentLogin />
                </Col>
                <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    className="bg-light d-flex align-item-center"
                >
                    <FormRegister />
                </Col>
            </Row>
        </Container>
    );
}
