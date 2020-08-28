import React from "react";
import { Form, Col } from "react-bootstrap";

const DateOfDoc = ({
    inputData,
    handle,
    lang,
    defaultData,
    required,
    isSubmit
}) => {
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
                    required[inputData.tag_type + inputData.type] === false
                        ? required[inputData.tag_type + inputData.type]
                        : isSubmit
                }
                name={inputData.type}
                defaultValue={defaultData}
                type="date"
                onChange={handle}
            />
        </Form.Group>
    );
};

export default DateOfDoc;
