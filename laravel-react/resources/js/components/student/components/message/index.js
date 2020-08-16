import React from "react";
import { Button } from "react-bootstrap";
import ChatBox from "./ChatBox";

const MessageElements = () => {
    const [show, setShow] = React.useState(false);

    return (
        <>
            <div className="px-3 py-3 clearfix">
                <Button
                    variant="info"
                    className="rounded-circle float-right"
                    onClick={() => setShow(true)}
                >
                    Message <i className="fas fa-comment-dots"></i>
                </Button>
            </div>

            <ChatBox show={show} closeMessage={setShow} />
        </>
    );
};

export default MessageElements;
