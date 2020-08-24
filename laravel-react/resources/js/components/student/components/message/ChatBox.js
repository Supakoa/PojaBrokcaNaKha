import React from "react";
import { Animated } from "react-animated-css";
import { Card, Container, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const ChatBox = ({ show, closeMessage }) => {
    const { t } = useTranslation();
    return (
        <Animated
            animationIn="fadeInUp"
            animationOut="fadeOutRight"
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={show}
            style={{ bottom: "0", left: "5px", zIndex: "99" }}
            className={`float-left position-sticky pb-3 ${
                show ? `d-block` : `d-none`
            }`}
        >
            <Card style={{ width: "100%" }}>
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
                        style={{ height: "30vh", maxHeight: "50vh" }}
                        className="w-100 border border-secondary rounded"
                    >
                        list messages
                    </Container>
                </Card.Body>
                <Card.Footer className="d-flex align-items-center justify-content-between p-0 border-0">
                    <div className="w-75">
                        <Form.Control
                            className="border-left-0 border-bottom-0"
                            placeholder={t("students.message.place-holder")}
                        />
                    </div>
                    <div className="w-25 text-center p-0">
                        <Button
                            variant="primary"
                            className="m-0"
                            size="sm"
                            block
                        >
                            <i className="fas fa-paper-plane"></i>
                        </Button>
                    </div>
                </Card.Footer>
            </Card>
        </Animated>
    );
};

export default ChatBox;
