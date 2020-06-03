import React from "react";
import { Card, Row, Col, Tab, ListGroup, Alert } from "react-bootstrap";
import BoxMessage from "./BoxMessage";
import FormSend from "./FormSend";

export default function TemplateMessage({ data }) {
    const [_list, setList] = React.useState([]);
    const [_text, setText] = React.useState([]);

    const fetchMessages = _data => {
        _data.map(item => {
            setList([..._list, item]);
        });
    };

    React.useEffect(() => {
        const abortController = new AbortController();
        fetchMessages(data, { signal: abortController.signal });
        if (_text.length > 0) {
            setList([..._list].push(_text));
        }

        return () => {
            abortController.abort();
        };
    }, []);

    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#default">
            <Row>
                <Col xs={12} sm={12} md={4} lg={4} className="border-right">
                    <p>รายชื่อ</p>
                    <hr />
                    <ListGroup variant="flush" className="rounded">
                        {_list !== []
                            ? _list.map((item, idx) => {
                                  return (
                                      <ListGroup.Item
                                          key={idx.toString()}
                                          action
                                          href={`#${item.name}`}
                                          className="border rounded"
                                      >
                                          {item.name}
                                      </ListGroup.Item>
                                  );
                              })
                            : "Empty List"}
                    </ListGroup>
                </Col>
                <Col xs={12} sm={12} md={8} lg={8}>
                    <p>ข้อความ</p>
                    <hr />
                    <Tab.Content>
                        {_list.map((item, idx) => {
                            return (
                                <Tab.Pane
                                    key={item.roleId}
                                    eventKey={`#${item.name}`}
                                >
                                    <Card>
                                        <Card.Body>
                                            <BoxMessage
                                                key={idx.toString()}
                                                textMessage={item}
                                            />
                                        </Card.Body>
                                        <Card.Footer className="p-0">
                                            <FormSend settext={setText} />
                                        </Card.Footer>
                                    </Card>
                                </Tab.Pane>
                            );
                        })}
                        <Tab.Pane eventKey="#default" className="text-center">
                            <Alert variant="info">
                                กรุณาเลือก รายชื่อเพื่อแสดงข้อความ
                            </Alert>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}
