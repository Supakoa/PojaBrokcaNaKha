import React from "react";
import { Badge, Button, ListGroup } from "react-bootstrap";
import ChatBox from "./ChatBox";
import { useTranslation } from "react-i18next";
import { getMessages } from "../../../middleware/axios/getMessages";
import { useSelector } from "react-redux";
import axios from "axios";
import { _URL } from "../../../middleware/URL";

const MessageElements = ({ token }) => {
    const [show, setShow] = React.useState(false);
    const [_messages, setMessages] = React.useState([]);
    const [count_unread, setCount_unread] = React.useState(0);
    const user = useSelector(state => state.userState);

    const { t } = useTranslation();
    const fetchUserMessage = async token => {
        const _getAll = await getMessages(token);
        if (!!_getAll) {
            setMessages(_getAll.success);
            setCount_unread(_getAll.count_unread);
        }
    };
    const scrollToBottom = () => {
        setShow(true);
        read(user.id);
        setTimeout(() => {
            var element = document.getElementById("chatBody");
            element.scrollTop = element.scrollHeight;
        }, 800);
    };
    const read = async id => {
        if (count_unread > 0) {
            await axios
                .get(`${_URL}/api/messages/${id}/read`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "_authLocal"
                        )}`
                    }
                })
                .then(res => {
                    setCount_unread(0);
                });
        }
    };
    React.useEffect(() => {
        const abort = new AbortController();
        if (show) {
            fetchUserMessage(token, { signal: abort.signal });
        }
        return () => abort.abort();
    }, [token, show]);
    React.useEffect(() => {
        const abort = new AbortController();
        if (user && show) read(user.id);
        return () => abort.abort();
    }, [count_unread]);
    React.useEffect(() => {
        const abort = new AbortController();
        let channel = window.Echo.channel("channel-chat");
        channel.listen(".event-chat-user-" + user.id, function(data) {
            // console.log("data ",data)
            if (_messages.length || data.count_messages === 1) {
                let tmp_message = {};
                tmp_message.id = data.message_id;
                tmp_message.message = data.message;
                tmp_message.admin_id = data.admin_id;
                tmp_message.user_id = user.id;

                if (
                    _messages.findIndex(
                        value => value.id === tmp_message.id
                    ) === -1
                ) {
                    // console.log("Data : ",data)
                    _messages.push(tmp_message);
                    setMessages([..._messages]);
                    setCount_unread(data.count_messages_unread);
                }
            }
            var element = document.getElementById("chatBody");
            element.scrollTop = element.scrollHeight;
        });
        return () => {
            abort.abort();
            channel.stopListening(".event-chat-user-" + user.id);
        };
    }, [_messages, count_unread]);
    React.useEffect(() => {
        const abort = new AbortController();

        if (token) fetchUserMessage(token, { signal: abort.signal });

        return () => abort.abort();
    }, []);

    return (
        <>
            <div className="px-3 py-3 clearfix">
                <Button
                    variant="info"
                    style={{ bottom: "0" }}
                    className={` float-left position-sticky ${
                        show ? `d-none` : ``
                    }`}
                    onClick={scrollToBottom}
                >
                    {t("students.message.title")}{" "}
                    <i className="fas fa-comment-dots mr-2"></i>
                    {count_unread > 0 ? (
                        <Badge variant="danger" className="float-right">
                            {count_unread}
                        </Badge>
                    ) : (
                        ""
                    )}
                </Button>
            </div>

            <ChatBox
                show={show}
                closeMessage={setShow}
                _messages={_messages}
                setMessages={setMessages}
                setCount_unread={setCount_unread}
            />
        </>
    );
};

export default MessageElements;
