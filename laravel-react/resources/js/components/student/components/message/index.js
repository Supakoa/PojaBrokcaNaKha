import React from "react";
import { Button } from "react-bootstrap";
import ChatBox from "./ChatBox";
import { useTranslation } from "react-i18next";

const MessageElements = () => {
    const [show, setShow] = React.useState(false);
    const { t } = useTranslation();
    return (
        <>
            <div className="px-3 py-3 clearfix">
                <Button
                    variant="info"
                    style={{ bottom: "0" }}
                    className={` float-left position-sticky ${
                        show ? `d-none` : ``
                    }`}
                    onClick={() => setShow(true)}
                >
                    {t("students.message.title")}{" "}
                    <i className="fas fa-comment-dots"></i>
                </Button>
            </div>

            <ChatBox show={show} closeMessage={setShow} />
        </>
    );
};

export default MessageElements;
