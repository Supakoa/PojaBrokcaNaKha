import React from "react";
import { Form, Col, Button } from "react-bootstrap";

const FormSend = props => {
    const [_message, setMessage] = React.useState({});

    const handleChange = e => {
        const value = e.target.value;
        console.log(value);

        setMessage({
            ..._message,
            roleId: 1,
            name: "admin",
            messages: value
        });
    };

    const onClickHandle = () => {
        console.log(_message);

        props.settext([_message]);
    };

    return (
        <Form>
            <Form.Row>
                <Col xs={11} sm={11} ms={11} lg={11}>
                    <Form.Control
                        name="textMessage"
                        placeholder="ข้อความ"
                        onChange={handleChange}
                    />
                </Col>
                <Col xs={1} sm={1} ms={1} lg={1} className="p-0">
                    <Button className="btn-block" onClick={onClickHandle}>
                        <i className="far fa-paper-plane"></i>
                    </Button>
                </Col>
            </Form.Row>
        </Form>
    );
};

export default FormSend;
