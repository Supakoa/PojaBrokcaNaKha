import React from "react";
import { Form, Col } from "react-bootstrap";

const SelectorOfDoc = props => {
    const { inputData, handle } = props;
    return (
        <Form.Group
            md={inputData.size}
            lg={inputData.size}
            as={Col}
            controlId={inputData.tage_type}
        >
            <Form.Label>{inputData.th_title}</Form.Label>
            <Form.Control
                as="select"
                name={inputData.type}
                size="sm"
                onChange={handle}
                custom
            >
                <option value="0">{inputData.th_name}</option>
                {inputData.th_options !== undefined ? (
                    inputData.th_options.map((item, idx) => {
                        return (
                            <option
                                key={idx.toString()}
                                defaultValue={idx.toString()}
                                value={(idx + 1).toString()}
                            >
                                {item}
                            </option>
                        );
                    })
                ) : (
                    <option>ไม่มีข้อมูล</option>
                )}
            </Form.Control>
        </Form.Group>
    );
};

export default SelectorOfDoc;
