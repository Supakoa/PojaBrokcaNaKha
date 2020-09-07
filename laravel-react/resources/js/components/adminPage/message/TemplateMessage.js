import React from "react";
import {
    Card,
    Row,
    Col,
    Tab,
    ListGroup,
    Alert,
    Badge,
    Spinner
} from "react-bootstrap";
import BoxMessage from "./BoxMessage";
import FormSend from "./FormSend";
import { useTranslation } from "react-i18next";
import { getMessages } from "../../middleware/axios/getMessages";
import ListMessages from "../../student/components/message/list-message";
import axios from "axios";
import { _urlGetMessages } from "../../middleware/apis";
import headerConfig from "../../middleware/headerConfig";
import Swal from "sweetalert2";
import { forEach } from "react-bootstrap/cjs/ElementChildren";
import { _URL } from "../../middleware/URL";
import LoadingComponent from "../../LoadingComponent/Loading";

export default function TemplateMessage() {
    const [_listUsers, setListUsers] = React.useState([]);
    const [isopen, setIsOpen] = React.useState(true);
    const { t } = useTranslation();

    const fetchMessages = async token => {
        const _getAll = await getMessages(token);
        if (_getAll) setListUsers(_getAll);
    };

    const read = async id =>
        axios
            .get(`${_URL}/api/messages/${id}/read`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "_authLocal"
                    )}`
                }
            })
            .then(res => {
                let user = _listUsers.find(value => {
                    console.log("value", value.id);
                    console.log("e.target.name ", id);
                    return value.id == id;
                });
                if (!!user) {
                    console.log("user ", user);
                    user.count_unread = 0;
                    setListUsers([..._listUsers]);
                }
            });
    let channel = window.Echo.channel("channel-chat");
    channel.listen(".event-chat-admin", async function(data) {
        let user = _listUsers.find(value => value.id === data.user_id);
        setIsOpen(true);
        if (!!user) {
            user["count_unread"] = data.count_messages_unread;
            let tmp_message = {};
            tmp_message.id = data.count_messages + 1;
            tmp_message.message = data.message;
            tmp_message.admin_id = null;
            tmp_message.user_id = data.user_id;
            if (
                user.messages.findIndex(
                    value => value.id === tmp_message.id
                ) === -1
            ) {
                user.messages.push(tmp_message);
                setListUsers([..._listUsers]);
            }
        } else if (data.count_messages === 1) {
            const _getAll = await getMessages(localStorage._authLocal);
            if (_getAll) setListUsers(_getAll);
        }
        var element = document.getElementById("chatBody");
        element.scrollTop = element.scrollHeight;
    });

    const scrollToBottom = e => {
        if (isopen) {
            let id = e.target.name;
            read(id);
            setIsOpen(false);
            setTimeout(() => {
                var element = document.getElementById("chatBody");
                element.scrollTop = element.scrollHeight;
            }, 200);
        }
    };

    React.useEffect(() => {
        const abort = new AbortController();
        fetchMessages(localStorage._authLocal, { signal: abort.signal });

        return () => {
            abort.abort();
        };
    }, [localStorage._authLocal]);

    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#default">
            <Row>
                <Col xs={12} sm={12} md={4} lg={4} className="border-right">
                    <p>{t("sender")}</p>
                    <hr />
                    <ListGroup variant="flush" className="rounded">
                        {_listUsers.length > 0 ? (
                            _listUsers.map((item, idx) => {
                                return (
                                    <ListGroup.Item
                                        key={idx.toString()}
                                        action
                                        href={`#${item.id}`}
                                        name={item.id}
                                        onClick={scrollToBottom}
                                        className="border rounded clearfix"
                                    >
                                        <i className="fas fa-comment-dots"></i>{" "}
                                        {`${item.title} ${item.first_name} ${item.last_name}`}
                                        {item.count_unread ? (
                                            <Badge
                                                variant="danger"
                                                className="float-right"
                                            >
                                                {item.count_unread}
                                            </Badge>
                                        ) : (
                                            ""
                                        )}
                                    </ListGroup.Item>
                                );
                            })
                        ) : (
                            <LoadingComponent />
                        )}
                    </ListGroup>
                </Col>
                <Col xs={12} sm={12} md={8} lg={8}>
                    <p>{t("menu.message")}</p>
                    <hr />
                    <Tab.Content>
                        {_listUsers.map((userMessages, idx) => {
                            return (
                                <Tab.Pane
                                    key={idx.toString()}
                                    eventKey={`#${userMessages.id}`}
                                >
                                    <Card>
                                        <Card.Body
                                            id="chatBody"
                                            style={{
                                                minHeight: "20vh",
                                                height: "100%",
                                                maxHeight: "50vh",
                                                overflowY: "scroll"
                                            }}
                                            className="w-100 clearfix pt-1"
                                        >
                                            {userMessages.messages.map(
                                                (message, idx) => {
                                                    return (
                                                        <ListMessages
                                                            key={idx}
                                                            data={message}
                                                            isSender={
                                                                message.admin_id !=
                                                                null
                                                            }
                                                            name={`${userMessages.title} ${userMessages.first_name} ${userMessages.last_name}`}
                                                        />
                                                    );
                                                }
                                            )}
                                        </Card.Body>
                                        <Card.Footer className="p-0">
                                            <FormSend
                                                userId={userMessages.id}
                                                _listUsers={_listUsers}
                                                setListUsers={setListUsers}
                                            />
                                        </Card.Footer>
                                    </Card>
                                </Tab.Pane>
                            );
                        })}
                        <Tab.Pane eventKey="#default" className="text-center">
                            <Alert variant="info">
                                {t("selectToShowMessage")}
                            </Alert>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}
