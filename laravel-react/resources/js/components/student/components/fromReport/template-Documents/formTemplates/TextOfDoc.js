import React from "react";
import { Form, Col } from "react-bootstrap";

const TextOfDoc = ({ inputData, handle, lang, defaultData }) => {
    return (
        <Form.Group
            md={inputData.size}
            lg={inputData.size}
            as={Col}
            controlId={inputData.tag_type}
        >
            <Form.Label>
                {lang === "th" ? inputData.th_name : inputData.eng_name}
            </Form.Label>
            <Form.Control
                name={inputData.type}
                as="textarea"
                rows="3"
                onChange={handle}
                defaultValue={defaultData}
                placeholder={
                    lang === "th" ? inputData.th_title : inputData.eng_title
                }
            />
        </Form.Group>
    );
};

export default TextOfDoc;
