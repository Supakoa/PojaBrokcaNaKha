import React from "react";
import { Card, Row, Col, Tab, ListGroup, Alert } from "react-bootstrap";
import BoxMessage from "./BoxMessage";
import FormSend from "./FormSend";
import { useTranslation } from "react-i18next";
import { getMessages } from "../../middleware/axios/getMessages";
import ListMessages from "../../student/components/message/list-message";

export default function TemplateMessage() {
    const [_listUsers, setListUsers] = React.useState([]);
    const [isopen, setIsOpen] = React.useState(true);
    const { t } = useTranslation();

    const fetchMessages = async token => {
        const _getAll = await getMessages(token);
        if (_getAll) setListUsers(_getAll);
    };

    let channel = window.Echo.channel("channel-chat");
    channel.listen(".event-chat-admin", async function(data) {
        let user = _listUsers.find(value => value.id === data.user_id);
        setIsOpen(true);
        if (!!user) {
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
        scrollToBottom();
    });

    const scrollToBottom = () => {
        if (isopen) {
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
                        {_listUsers.length > 0
                            ? _listUsers.map((item, idx) => {
                                  return (
                                      <ListGroup.Item
                                          key={idx.toString()}
                                          action
                                          href={`#${item.id}`}
                                          onClick={scrollToBottom}
                                          className="border rounded"
                                      >
                                          <i className="fas fa-comment-dots"></i>{" "}
                                          {`${item.title} ${item.first_name} ${item.last_name}`}
                                      </ListGroup.Item>
                                  );
                              })
                            : "Empty List"}
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
                                                height: "30vh",
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
