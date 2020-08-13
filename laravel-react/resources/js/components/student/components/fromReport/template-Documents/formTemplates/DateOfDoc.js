import React from "react";
import { Form, Col } from "react-bootstrap";

const DateOfDoc = props => {
    const { inputData, handle, lang } = props;
    return (
        <Form.Group
            md={inputData.size}
            lg={inputData.size}
            as={Col}
            controlId={inputData.tage_type}
        >
            <Form.Label>
                {lang === "th" ? inputData.th_title : inputData.eng_title}
            </Form.Label>
            <Form.Control name={inputData.type} type="date" onChange={handle} />
        </Form.Group>
    );
};

export default DateOfDoc;
