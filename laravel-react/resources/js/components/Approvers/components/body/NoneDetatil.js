import React from "react";
import { Container } from "react-bootstrap";

const NoneDetail = () => {
    return (
        <Container
            style={{ borderStyle: "dotted" }}
            className="text-center border-secondary rounded px-4 py-4"
        >
            <i className="far fa-sticky-note"></i>
        </Container>
    );
};

export default NoneDetail;
