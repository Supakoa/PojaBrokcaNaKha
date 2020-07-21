import React from "react";
import { Button, Modal, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const UserModalDoc = props => {
    const { document } = props;
    const _userName = useSelector(state => state.userState);
    const [show, setShow] = React.useState(false);
    console.log(document);
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
                    <Modal.Title as="h5">{document.form_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container as="dl" className="row">
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
                        <Col className="py-2" as="dt" sm={3} md={3} lg={3}>
                            <i
                                className="fas fa-spinner"
                                aria-hidden="true"
                            ></i>{" "}
                            สถานะ
                        </Col>
                        <Col className="py-2" as="dd" sm={9} md={9} lg={9}>
                            {document.status_badge}
                        </Col>

                        {/* sender */}
                        <Col className="py-2" as="dt" sm={3} md={3} lg={3}>
                            <i className="fas fa-user" aria-hidden="true"></i>{" "}
                            ผู้ส่ง
                        </Col>
                        <Col className="py-2" as="dd" sm={9} md={9} lg={9}>
                            {document.user_id === _userName.id
                                ? `${_userName.title} ${_userName.first_name} ${_userName.last_name}`
                                : "-"}
                        </Col>

                        {/* user_cancel */}
                        <Col className="py-2" as="dt" sm={3} md={3} lg={3}>
                            <i className="fas fa-user" aria-hidden="true"></i>{" "}
                            ผู้ยกเลิก
                        </Col>
                        <Col className="py-2" as="dd" sm={9} md={9} lg={9}>
                            {document.user_cancel_id !== null
                                ? document.user_cancel_id
                                : "ไม่มีข้อมูล"}
                        </Col>

                        {/* not */}
                        <Col className="py-2" as="dt" sm={3} md={3} lg={3}>
                            <i
                                className="fas fa-clipboard"
                                aria-hidden="true"
                            ></i>{" "}
                            หมายเหตุ
                        </Col>
                        <Col className="py-2" as="dd" sm={9} md={9} lg={9}>
                            Bootstrap v4.3 ships with the option to enable
                            responsive font sizes, allowing text to scale more
                            naturally across device and viewport sizes. RFS can
                            be enabled by changing the
                            $enable-responsive-font-sizes Sass variable to true
                            and recompiling Bootstrap. To support RFS, we use a
                            Sass mixin to replace our normal font-size
                            properties. Responsive font sizes will be compiled
                            into calc() functions with a mix of rem and viewport
                            units to enable the responsive scaling behavior.
                            More about RFS and its configuration can be found on
                            its
                            {/* {document.note !== null
                                ? document.note
                                : "ไม่มีข้อมูล"} */}
                        </Col>
                    </Container>
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
