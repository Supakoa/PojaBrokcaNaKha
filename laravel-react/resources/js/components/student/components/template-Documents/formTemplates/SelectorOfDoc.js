import React from "react";
import { Form, Col } from "react-bootstrap";

const SelectorOfDoc = props => {
    const { inputData } = props;
    return (
        <Form.Group
            md={inputData.size}
            lg={inputData.size}
            as={Col}
            controlId={inputData.tage_type}
        >
            <Form.Label>{inputData.th_title}</Form.Label>
            <Form.Control as="select" size="sm" custom>
                {inputData.th_options !== undefined ? (
                    inputData.th_options.map((item, idx) => {
                        return <option key={idx.toString()}>{item}</option>;
                    })
                ) : (
                    <option>ไม่มีข้อมูล</option>
                )}
            </Form.Control>
        </Form.Group>
    );
};

export default SelectorOfDoc;
