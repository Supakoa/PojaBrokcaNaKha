import React from "react";
import { Container, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const DetailDocument = props => {
    const { document } = props;
    const _userName = useSelector(state => state.userState);
    return (
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
                        <i className="fa fa-clock" aria-hidden="true"></i>{" "}
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
                        <i className="fa fa-clock" aria-hidden="true"></i>{" "}
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
                        <i className="fa fa-clock" aria-hidden="true"></i>{" "}
                        วันที่ยกเลิก
                    </h6>{" "}
                    <span className="pl-2">
                        {document.canceled_at_converted}
                    </span>
                </Col>

                {/* status */}
                <Col className="py-2" as="dt" sm={3} md={3} lg={3}>
                    <i className="fas fa-spinner" aria-hidden="true"></i> สถานะ
                </Col>
                <Col className="py-2" as="dd" sm={9} md={9} lg={9}>
                    {document.status_badge}
                </Col>

                {/* sender */}
                <Col className="py-2" as="dt" sm={3} md={3} lg={3}>
                    <i className="fas fa-user" aria-hidden="true"></i> ผู้ส่ง
                </Col>
                <Col className="py-2" as="dd" sm={9} md={9} lg={9}>
                    {document.user_id === _userName.id
                        ? `${_userName.title} ${_userName.first_name} ${_userName.last_name}`
                        : "-"}
                </Col>

                {/* user_cancel */}
                <Col className="py-2" as="dt" sm={3} md={3} lg={3}>
                    <i className="fas fa-user" aria-hidden="true"></i> ผู้ยกเลิก
                </Col>
                <Col className="py-2" as="dd" sm={9} md={9} lg={9}>
                    {document.user_cancel_id !== null
                        ? document.user_cancel_id
                        : "ไม่มีข้อมูล"}
                </Col>

                {/* not */}
                <Col className="py-2" as="dt" sm={3} md={3} lg={3}>
                    <i className="fas fa-clipboard" aria-hidden="true"></i>{" "}
                    หมายเหตุ
                </Col>
                <Col className="py-2" as="dd" sm={9} md={9} lg={9}>
                    {document.note !== null ? document.note : "ไม่มีข้อมูล"}
                </Col>
            </dl>
        </Container>
    );
};

export default DetailDocument;
