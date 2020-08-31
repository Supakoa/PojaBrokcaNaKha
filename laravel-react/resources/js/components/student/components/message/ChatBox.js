import React from "react";
import { Animated } from "react-animated-css";
import { Card, Container, Form, Button, InputGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { postMessage } from "../../../middleware/axios/postMessage";
import ListMeassges from "./list-message";

const ChatBox = ({ show, closeMessage, listMsg }) => {
    const [_newMsg, setNewMsg] = React.useState("");
    const handleChange = e => {
        setNewMsg(e.target.value);
    };

    const handleSendMsg = async () => {
        if (!!_newMsg) {
            await postMessage(localStorage._authLocal, {
                message: _newMsg
            });
            setNewMsg("");
        }
    };

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
            <Card style={{ width: "50%" }}>
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
                            height: "100%",
                            maxHeight: "40vh",
                            overflowY: "scroll"
                        }}
                        className="w-100 border border-secondary rounded clearfix pt-3"
                    >
                        {listMsg.map(item => {
                            return (
                                <ListMeassges
                                    key={item.id}
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
