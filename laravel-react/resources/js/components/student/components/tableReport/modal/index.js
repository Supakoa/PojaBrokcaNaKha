import React from "react";
import {
    Button,
    Modal,
    Col,
    Container,
    Tabs,
    Tab,
    Form
} from "react-bootstrap";
import { useSelector } from "react-redux";

const UserModalDoc = props => {
    const { document } = props;
    const _userName = useSelector(state => state.userState);
    const [show, setShow] = React.useState(false);
    return (
        <div>
            <Button variant="info" size="sm" onClick={() => setShow(true)}>
                ดูเพิ่ม
            </Button>

            <Modal
                show={show}
                size="lg"
                onHide={() => setShow(false)}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title as="h6">- {document.form_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs defaultActiveKey="infoDocument" id="ModalDocument">
                        <Tab eventKey="infoDocument" title="สถานะเอกสาร">
                            <Container>
                                <dl className="row border-left border-right border-bottom rounded">
                                    {/* date */}
                                    <Col
                                        className="py-2 d-table align-items-center justify-content-start"
                                        as="dd"
                                        sm={4}
                                        md={4}
                                        lg={4}
                                    >
                                        <h6>
                                            <i
                                                className="fa fa-clock"
                                                aria-hidden="true"
                                            ></i>{" "}
                                            วันที่สร้าง
                                        </h6>{" "}
                                        <span className="pl-2">
                                            {document.created_at_converted}
                                        </span>
                                    </Col>
                                    <Col
                                        className="py-2 d-table align-items-center justify-content-start"
                                        as="dd"
                                        sm={4}
                                        md={4}
                                        lg={4}
                                    >
                                        <h6>
                                            <i
                                                className="fa fa-clock"
                                                aria-hidden="true"
                                            ></i>{" "}
                                            วันที่แก้ไข
                                        </h6>{" "}
                                        <span className="pl-2">
                                            {document.updated_at_converted}
                                        </span>
                                    </Col>
                                    <Col
                                        className="py-2 d-table align-items-center justify-content-start"
                                        as="dd"
                                        sm={4}
                                        md={4}
                                        lg={4}
                                    >
                                        <h6>
                                            <i
                                                className="fa fa-clock"
                                                aria-hidden="true"
                                            ></i>{" "}
                                            วันที่ยกเลิก
                                        </h6>{" "}
                                        <span className="pl-2">
                                            {document.canceled_at_converted}
                                        </span>
                                    </Col>

                                    {/* status */}
                                    <Col
                                        className="py-2"
                                        as="dt"
                                        sm={3}
                                        md={3}
                                        lg={3}
                                    >
                                        <i
                                            className="fas fa-spinner"
                                            aria-hidden="true"
                                        ></i>{" "}
                                        สถานะ
                                    </Col>
                                    <Col
                                        className="py-2"
                                        as="dd"
                                        sm={9}
                                        md={9}
                                        lg={9}
                                    >
                                        {document.status_badge}
                                    </Col>

                                    {/* sender */}
                                    <Col
                                        className="py-2"
                                        as="dt"
                                        sm={3}
                                        md={3}
                                        lg={3}
                                    >
                                        <i
                                            className="fas fa-user"
                                            aria-hidden="true"
                                        ></i>{" "}
                                        ผู้ส่ง
                                    </Col>
                                    <Col
                                        className="py-2"
                                        as="dd"
                                        sm={9}
                                        md={9}
                                        lg={9}
                                    >
                                        {document.user_id === _userName.id
                                            ? `${_userName.title} ${_userName.first_name} ${_userName.last_name}`
                                            : "-"}
                                    </Col>

                                    {/* user_cancel */}
                                    <Col
                                        className="py-2"
                                        as="dt"
                                        sm={3}
                                        md={3}
                                        lg={3}
                                    >
                                        <i
                                            className="fas fa-user"
                                            aria-hidden="true"
                                        ></i>{" "}
                                        ผู้ยกเลิก
                                    </Col>
                                    <Col
                                        className="py-2"
                                        as="dd"
                                        sm={9}
                                        md={9}
                                        lg={9}
                                    >
                                        {document.user_cancel_id !== null
                                            ? document.user_cancel_id
                                            : "ไม่มีข้อมูล"}
                                    </Col>

                                    {/* not */}
                                    <Col
                                        className="py-2"
                                        as="dt"
                                        sm={3}
                                        md={3}
                                        lg={3}
                                    >
                                        <i
                                            className="fas fa-clipboard"
                                            aria-hidden="true"
                                        ></i>{" "}
                                        หมายเหตุ
                                    </Col>
                                    <Col
                                        className="py-2"
                                        as="dd"
                                        sm={9}
                                        md={9}
                                        lg={9}
                                    >
                                        {document.note !== null
                                            ? document.note
                                            : "ไม่มีข้อมูล"}
                                    </Col>
                                </dl>
                            </Container>
                        </Tab>
                        <Tab eventKey="formDocument" title="ข้อมูลเอกสาร">
                            <div className="border-left border-right border-bottom rounded">
                                <Container className="py-2">
                                    <Form>
                                        <Form.Row>
                                            <Form.Group
                                                as={Col}
                                                md="4"
                                                controlId="validationCustom01"
                                            >
                                                <Form.Label>
                                                    First name
                                                </Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="First name"
                                                    defaultValue="Mark"
                                                />
                                                <Form.Control.Feedback>
                                                    Looks good!
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group
                                                as={Col}
                                                md="4"
                                                controlId="validationCustom02"
                                            >
                                                <Form.Label>
                                                    Last name
                                                </Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Last name"
                                                    defaultValue="Otto"
                                                />
                                                <Form.Control.Feedback>
                                                    Looks good!
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group
                                                as={Col}
                                                md="6"
                                                controlId="validationCustom03"
                                            >
                                                <Form.Label>City</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="City"
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a valid city.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group
                                                as={Col}
                                                md="3"
                                                controlId="validationCustom04"
                                            >
                                                <Form.Label>State</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="State"
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a valid
                                                    state.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group
                                                as={Col}
                                                md="3"
                                                controlId="validationCustom05"
                                            >
                                                <Form.Label>Zip</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Zip"
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a valid zip.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Group>
                                            <Form.Check
                                                required
                                                label="Agree to terms and conditions"
                                                feedback="You must agree before submitting."
                                            />
                                        </Form.Group>
                                    </Form>
                                </Container>
                            </div>
                        </Tab>
                    </Tabs>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger">Cancel Document</Button>
                    <Button onClick={() => setShow(false)} variant="secondary">
                        close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default UserModalDoc;
