import React from "react";
import { Card, Row, Col, Tab, ListGroup, Alert } from "react-bootstrap";
import BoxMessage from "./BoxMessage";
import FormSend from "./FormSend";
import { useTranslation } from "react-i18next";
import { getMessages } from "../../middleware/axios/getMessages";
import ListMeassges from "../../student/components/message/list-message";

export default function TemplateMessage({ data }) {
    const [_list, setList] = React.useState([]);
    const { t } = useTranslation();

    const fetchMessages = async token => {
        const _getAll = await getMessages(token);
        if (_getAll) setList(_getAll);
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
                        {_list !== []
                            ? _list.map((item, idx) => {
                                  return (
                                      <ListGroup.Item
                                          key={idx.toString()}
                                          action
                                          href={`#${item.id}`}
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
                        {_list.map((list, idx) => {
                            return (
                                <Tab.Pane
                                    key={idx.toString()}
                                    eventKey={`#${list.id}`}
                                >
                                    <Card>
                                        <Card.Body
                                            style={{
                                                height: "30vh",
                                                overflowY: "scroll"
                                            }}
                                            className="w-100 clearfix pt-1"
                                        >
                                            {list.messages.map(item => {
                                                return (
                                                    <ListMeassges
                                                        key={item.id}
                                                        data={item}
                                                        isSender={
                                                            item.admin_id == 1
                                                        }
                                                        name={`${list.title} ${list.first_name} ${list.last_name}`}
                                                    />
                                                );
                                            })}
                                        </Card.Body>
                                        <Card.Footer className="p-0">
                                            <FormSend userId={list.id} />
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
