import React from "react";
import { Row, Col, Alert } from "react-bootstrap";

const BoxMessage = props => {
    const { textMessage } = props;

    const _position = textMessage.roleId === 3;
    const _sender = { span: 8, offset: 4 };
    const _receiver = 8;
    return (
        <Row>
            <Col
                xs={_position ? _receiver : _sender}
                sm={_position ? _receiver : _sender}
                md={_position ? _receiver : _sender}
                lg={_position ? _receiver : _sender}
            >
                <Alert
                    className="shadow"
                    variant={_position ? "light" : "info"}
                >
                    <p>{textMessage.messages}</p>
                    <hr />
                    <div className="d-flex justify-content-end p-0">
                        {textMessage.name}
                    </div>
                </Alert>
            </Col>
        </Row>
    );
};

export default BoxMessage;
