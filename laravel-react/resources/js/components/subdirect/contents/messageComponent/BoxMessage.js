import React from "react";
import { Row, Col, Alert } from "react-bootstrap";

const BoxMessage = props => {
    const [_chatBox, setChatBox] = React.useState([]);
    // console.log(textMessage);
    console.log(props);
    console.log(name);
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
        checkRole(props);

        return () => {
            abort.abort();
        };
    });

    // const _position = textMessage.roleId === 1;
    const _sender = { span: 8, offset: 4 };
    const _receiver = 8;
    return (
        <Row>
            <Col
            // xs={_position ? _sender : _receiver}
            // sm={_position ? _sender : _receiver}
            // md={_position ? _sender : _receiver}
            // lg={_position ? _sender : _receiver}
            // md={_receiver}
            >
                <Alert
                    className="shadow"
                    // variant={_position ? "info" : "light"}
                    variant="light"
                >
                    {/* <p>{name !== undefined ? textMessage : textMessage}</p> */}
                    <hr />
                    <div className="d-flex justify-content-end p-0">
                        {/* {name === undefined ? "admin" : name} */}
                    </div>
                </Alert>
            </Col>
        </Row>
    );
};

export default BoxMessage;
