import React from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";

export const StepColors = _stepColors => {
    const component = _stepColors.map((variant, id) =>
        id === _stepColors.length - 1 ? (
            <Container key={id.toString()}>
                <Row className="mb-2">
                    <Col xs={12} md={8}>
                        <Alert variant={variant} className="p-2 mb-0">
                            <Alert.Link href="#">an example link</Alert.Link>
                        </Alert>
                    </Col>
                    <Col xs={6} md={4} className="text-center">
                        <Button size="sm" variant="info" className="mt-2">
                            +
                        </Button>
                    </Col>
                </Row>
            </Container>
        ) : (
            <Container key={id.toString()}>
                <Row className="mb-2">
                    <Col xs={12} md={8}>
                        <Alert variant={variant} className="p-2 mb-0">
                            <Alert.Link href="#">an example link</Alert.Link>
                        </Alert>
                    </Col>
                    <Col xs={6} md={4} className="text-center">
                        <Button size="sm" variant="info" className="mt-2">
                            +
                        </Button>
                    </Col>
                    <Col xs={12} md={8} className="text-center m-2">
                        <Button size="sm" variant="outline-warning" disabled>
                            step {id + 1}
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    );

    return component;
};
