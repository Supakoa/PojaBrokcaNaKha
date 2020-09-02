import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import Welcome from "./Welcome";
import AlertMessage from "./AlertMessage";
import AlertReport from "./AlertReport";
import TimeZone from "./TimeZone";
import TableReport from "../report/table";
import TableUser from "../user/table";
import TableNews from "../news/table";

export default function Home() {
    return (
        <Container fluid className="my-2">
            <Row className="mb-3">
                <Col sm={6} md={6} lg={6}>
                    <AlertMessage />
                </Col>
                <Col sm={6} md={6} lg={6}>
                    <TimeZone />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col
                    style={{ maxHeight: "350px", overflowY: "scroll" }}
                    sm={12}
                    md={10}
                    lg={6}
                >
                    <Badge variant="info" className="sticky-top">
                        ตารางเอกสาร
                    </Badge>
                    <TableReport paging={false} />
                </Col>
                <Col
                    style={{ maxHeight: "350px", overflowY: "scroll" }}
                    sm={12}
                    md={10}
                    lg={6}
                >
                    <Badge variant="info" className="sticky-top">
                        ตารางสมาชิก
                    </Badge>
                    <TableUser paging={false} />
                </Col>
                <Col
                    style={{ maxHeight: "350px", overflowY: "scroll" }}
                    md={12}
                    lg={12}
                >
                    <Badge variant="info" className="sticky-top">
                        ตารางข่าว
                    </Badge>
                    <TableNews paging={false} />
                </Col>
            </Row>
        </Container>
    );
}
