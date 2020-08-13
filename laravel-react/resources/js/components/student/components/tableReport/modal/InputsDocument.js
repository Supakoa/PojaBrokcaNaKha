import React from "react";
import { Container } from "react-bootstrap";

const InputsDocument = ({ inputs }) => {
    console.log(inputs);
    return (
        <Container className="py-2">
            {inputs !== null ? (
                "you have data"
            ) : (
                <div className="d-flex align-items-center justify-content-center">
                    <h6> You not has Data.</h6>
                </div>
            )}
        </Container>
    );
};

export default InputsDocument;
