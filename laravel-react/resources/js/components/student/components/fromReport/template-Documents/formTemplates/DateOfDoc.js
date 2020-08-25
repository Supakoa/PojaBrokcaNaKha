import React from "react";
import { Form, Col } from "react-bootstrap";

const DateOfDoc = props => {
    const { inputData, handle, lang } = props;
    return (
        <Form.Group
            md={inputData.size}
            lg={inputData.size}
            as={Col}
            controlId={inputData.tag_type + inputData.type}
        >
            <Form.Label>
                {lang === "th" ? inputData.th_title : inputData.eng_title}
            </Form.Label>
            <Form.Control
                isInvalid={
                    props.required[inputData.tag_type + inputData.type] ===
                    false
                        ? props.required[inputData.tag_type + inputData.type]
                        : props.isSubmit
                }
                name={inputData.type}
                type="date"
                onChange={handle}
            />
        </Form.Group>
    );
};

export default DateOfDoc;
