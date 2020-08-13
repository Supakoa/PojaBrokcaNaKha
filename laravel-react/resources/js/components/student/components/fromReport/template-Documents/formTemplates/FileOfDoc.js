import React from "react";
import { Form, Col } from "react-bootstrap";

const FileOfDoc = props => {
    const { inputData, handle, lang } = props;
    return (
        <Form.Group
            md={inputData.size}
            lg={inputData.size}
            as={Col}
            controlId={inputData.tage_type}
        >
            <Form.File
                name={inputData.type}
                id="custom-file"
                label={lang === "th" ? inputData.th_name : inputData.eng_name}
                onChange={handle}
            />
        </Form.Group>
    );
};

export default FileOfDoc;
