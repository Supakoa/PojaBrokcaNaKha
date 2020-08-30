import React from "react";
import { Button } from "react-bootstrap";
import ChatBox from "./ChatBox";
import { useTranslation } from "react-i18next";
import { getMessages } from "../../../middleware/axios/getMessages";

const MessageElements = () => {
    const [show, setShow] = React.useState(false);
    const [_messages, setMessages] = React.useState([]);
    const { t } = useTranslation();

    const fetchUserMessage = async token => {
        const _getAll = await getMessages(token);

        if (!!_getAll) setMessages(_getAll);
    };

    React.useEffect(() => {
        const abort = new AbortController();
        if (show) {
            fetchUserMessage(localStorage._authLocal, { signal: abort.signal });
        }
        return () => abort.abort();
    }, [localStorage._authLocal, show]);

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

            <ChatBox show={show} closeMessage={setShow} listMsg={_messages} />
        </>
    );
};

export default MessageElements;
