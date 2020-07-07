import React from "react";
import { Container, Spinner } from "react-bootstrap";

export default function LoadingComponent() {
    return (
        <Container className="d-flex align-items-center justify-content-center">
            <Spinner animation="grow" variant="info" />
        </Container>
    );
}
