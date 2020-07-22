import React from "react";
import { Form, Col } from "react-bootstrap";

const DateOfDoc = props => {
    const { inputData } = props;
    console.log(inputData);
    return (
        <Form.Group
            md={inputData.size}
            lg={inputData.size}
            as={Col}
            controlId={inputData.tage_type}
        >
            <Form.Label>{inputData.th_title}</Form.Label>
            <Form.Control type="date" />
        </Form.Group>
    );
};

export default DateOfDoc;
