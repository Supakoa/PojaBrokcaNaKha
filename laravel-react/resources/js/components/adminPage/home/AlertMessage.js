import React from "react";
import { Card, ListGroup, Badge } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { getMessages } from "../../middleware/axios/getMessages";

export default function AlertMessage() {
    const { t } = useTranslation();
    const [_listUsers, setListUsers] = React.useState([]);
    const [isopen, setIsOpen] = React.useState(true);

    const fetchMessages = async token => {
        const _getAll = await getMessages(token);
        if (_getAll) setListUsers(_getAll);
    };
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
        <Card>
            <Card.Header>
                <Card.Title>
                    {t("menu.message")}{" "}
                    <Badge variant="warning">{_listUsers.length}</Badge>
                </Card.Title>
            </Card.Header>
            <Card.Body
                style={{ maxHeight: "150px", overflowY: "scroll" }}
                className="p-1"
            >
                <ListGroup variant="flush" className="rounded">
                    {_listUsers.length > 0
                        ? _listUsers.map((item, idx) => {
                              return (
                                  <ListGroup.Item
                                      key={idx.toString()}
                                      action
                                      href={`/admin/inbox#${item.id}`}
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
            </Card.Body>
        </Card>
    );
}
