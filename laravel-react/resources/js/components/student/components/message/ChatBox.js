import React from "react";
import { Animated } from "react-animated-css";
import { Card, Container, Form, Button, InputGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { postMessage } from "../../../middleware/axios/postMessage";
import ListMessages from "./list-message";
import { useSelector } from "react-redux";

const ChatBox = ({ show, closeMessage, _messages, setMessages }) => {
    const [_newMsg, setNewMsg] = React.useState("");
    const handleChange = e => {
        setNewMsg(e.target.value);
    };
    const user = useSelector(state => state.userState);
    const handleOnKeyDown = e => {
        // console.log(e.key)
        if (e.key === "Enter") handleSendMsg();
    };
    const handleSendMsg = async () => {
        if (!!_newMsg) {
            let tmp_message = _newMsg;
            setNewMsg("");
            let new_message = await postMessage(localStorage._authLocal, {
                message: tmp_message
            });

            if (
                _messages.findIndex(
                    value => value.id === new_message.count_messages + 1
                ) === -1
            ) {
                new_message["admin_id"] = null;
                _messages.push(new_message);
                setMessages([..._messages]);
            }
        }
    };
    let channel = window.Echo.channel("channel-chat");
    channel.listen(".event-chat-user-" + user.id, function(data) {
        if (_messages.length || data.count_messages === 1) {
            let tmp_message = {};
            tmp_message.id = data.count_messages + 1;
            tmp_message.message = data.message;
            tmp_message.admin_id = data.admin_id;
            tmp_message.user_id = user.id;
            if (
                _messages.findIndex(value => value.id === tmp_message.id) === -1
            ) {
                _messages.push(tmp_message);
                setMessages([..._messages]);
            }
        }
    });

    const { t } = useTranslation();

    return (
        <Animated
            animationIn="fadeInUp"
            animationOut="fadeOutRight"
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={show}
            style={{ bottom: "10px", left: "15px", zIndex: "99" }}
            className={`float-left position-sticky pb-3 ${
                show ? `d-block` : `d-none`
            }`}
        >
            <Card style={{ width: "100%", maxWidth: "350px" }}>
                <Card.Title className="clearfix mb-0 px-1 py-1">
                    <h6 className="float-left mb-0">
                        {t("students.message.title")}{" "}
                        <i className="fas fa-comment-dots"></i>
                    </h6>
                    <button
                        type="button"
                        onClick={() => closeMessage(false)}
                        className="close float-right"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Card.Title>
                <Card.Body className="p-1">
                    <Container
                        style={{
                            minHeight: "20vh",
                            height: "100%",
                            maxHeight: "40vh",
                            overflowY: "scroll"
                        }}
                        className="w-100 border border-secondary rounded clearfix pt-3"
                        id="chatBody"
                    >
                        {_messages.map((item, idx) => {
                            return (
                                <ListMessages
                                    key={idx}
                                    data={item}
                                    isSender={item.admin_id === null}
                                />
                            );
                        })}
                    </Container>
                </Card.Body>
                <Card.Footer className="p-0">
                    <InputGroup>
                        <Form.Control
                            name="textMessage"
                            placeholder={t("students.message.place-holder")}
                            onChange={handleChange}
                            onKeyPress={handleOnKeyDown}
                            // defaultValue={_newMsg}
                            value={_newMsg}
                        />
                        <InputGroup.Append>
                            <Button
                                variant="outline-secondary"
                                onClick={handleSendMsg}
                            >
                                <i className="far fa-paper-plane"></i>
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Card.Footer>
            </Card>
        </Animated>
    );
};

export default ChatBox;
