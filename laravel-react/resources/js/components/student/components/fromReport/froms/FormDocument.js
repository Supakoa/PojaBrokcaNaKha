import React from "react";
import { Form } from "react-bootstrap";

const FormDocument = props => {
    const { patternInput } = props;
    // console.log(patternInput);
    return (
        <>
            {patternInput.inputs.map((item, idx) => {
                // console.log(item);
                if (item.tag_type === "text") {
                    return (
                        <Form.Group key={idx}>
                            <Form.Label>{item.th_name}</Form.Label>
                            <Form.Control
                                type={item.tag_type}
                                placeholder={item.th_title}
                            />
                        </Form.Group>
                    );
                } else {
                    return (
                        <div key={idx}>
                            {item.th_name} => {item.tag_type}
                        </div>
                    );
                }
            })}
        </>
    );
};

export default FormDocument;
