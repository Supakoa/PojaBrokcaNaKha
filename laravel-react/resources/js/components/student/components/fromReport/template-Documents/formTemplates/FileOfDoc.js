import React from "react";
import { Form, Col } from "react-bootstrap";

const FileOfDoc = props => {
    const { inputData, handle } = props;
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
                label={inputData.th_name}
                onChange={handle}
            />
        </Form.Group>
    );
};

export default FileOfDoc;
