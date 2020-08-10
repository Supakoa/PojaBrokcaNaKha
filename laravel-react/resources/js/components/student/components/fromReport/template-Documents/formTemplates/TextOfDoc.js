import React from "react";
import { Form, Col } from "react-bootstrap";

const TextOfDoc = props => {
    const { inputData, handle, name } = props;

    return (
        <Form.Group
            md={inputData.size}
            lg={inputData.size}
            as={Col}
            controlId={inputData.tage_type}
        >
            <Form.Label>{inputData.th_title}</Form.Label>
            <Form.Control
                name={name}
                as="textarea"
                rows="3"
                onChange={handle}
            />
        </Form.Group>
    );
};

export default TextOfDoc;
