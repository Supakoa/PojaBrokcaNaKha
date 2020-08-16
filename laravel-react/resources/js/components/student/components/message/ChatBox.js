import React from "react";
import { Animated } from "react-animated-css";
import { Card } from "react-bootstrap";

const ChatBox = ({ show, closeMessage }) => {
    return (
        <Animated
            animationIn="fadeInUp"
            animationOut="fadeOutRight"
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={show}
            style={{ bottom: "0", right: "5px", zIndex: "99" }}
            className={`w-50 float-right position-sticky pb-3 `}
        >
            <Card style={{ width: "100%" }}>
                <Card.Body>
                    <Card.Title className="clearfix">
                        <h6 className="float-left">
                            Message <i className="fas fa-comment-dots"></i>
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
                    <Card.Subtitle className="mb-2 text-muted">
                        Card Subtitle
                    </Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </Animated>
    );
};

export default ChatBox;
