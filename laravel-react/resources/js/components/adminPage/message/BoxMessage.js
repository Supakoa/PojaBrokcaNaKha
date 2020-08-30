import React from "react";
import { Row, Col, Alert } from "react-bootstrap";

const BoxMessage = props => {
    const [_chatBox, setChatBox] = React.useState([]);
    const checkRole = _props => {
        const { textMessage, name } = _props;
        if (name !== undefined) {
            setChatBox([
                ..._chatBox,
                { role: name._role, name: name._name, message: textMessage }
            ]);
        } else {
            setChatBox([
                ..._chatBox,
                {
                    role: textMessage.roleId,
                    name: textMessage.name,
                    message: textMessage.messages
                }
            ]);
        }

        return;
    };

    React.useEffect(() => {
        const abort = new AbortController();
        checkRole(props, { signal: abort.signal });

        return () => {
            abort.abort();
        };
    }, []);

    return (
        <Row>
            <Col lg={6} md={6} sm={12}>
                <Alert className="shadow" variant="light">
                    <hr />
                    <div className="d-flex justify-content-end p-0"></div>
                </Alert>
            </Col>
        </Row>
    );
};

export default BoxMessage;
