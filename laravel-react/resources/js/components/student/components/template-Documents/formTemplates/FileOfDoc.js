import React from "react";
import { Form, Col } from "react-bootstrap";

const FileOfDoc = props => {
    const { inputData } = props;
    return (
        <Form.Group
            md={inputData.size}
            lg={inputData.size}
            as={Col}
            controlId={inputData.tage_type}
        >
            <Form.File id="custom-file" label={inputData.th_name} />
        </Form.Group>
    );
};

export default FileOfDoc;
