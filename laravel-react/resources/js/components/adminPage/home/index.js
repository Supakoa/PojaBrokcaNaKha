import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import AlertMessage from "./AlertMessage";
import TimeZone from "./TimeZone";
import TableReport from "../report/table";
import TableUser from "../user/table";
import TableNews from "../news/table";
import { useTranslation } from "react-i18next";

export default function Home() {
    const { i18n } = useTranslation();
    return (
        <Container fluid className="my-2">
            <Row className="mb-3">
                <Col className="py-2" sm={6} md={6} lg={6}>
                    <AlertMessage />
                </Col>
                <Col className="py-2" sm={6} md={6} lg={6}>
                    <TimeZone />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col
                    className="py-2"
                    style={{ maxHeight: "350px", overflowY: "scroll" }}
                    sm={12}
                    md={10}
                    lg={6}
                >
                    <Badge variant="info" className="sticky-top">
                        {i18n.language === "th"
                            ? "ตารางเอกสาร"
                            : "Table Document"}
                    </Badge>
                    <TableReport paging={false} />
                </Col>
                <Col
                    className="py-2"
                    style={{ maxHeight: "350px", overflowY: "scroll" }}
                    sm={12}
                    md={10}
                    lg={6}
                >
                    <Badge variant="info" className="sticky-top">
                        {i18n.language === "th" ? "ตารางสมาชิก" : "Table User"}
                    </Badge>
                    <TableUser paging={false} />
                </Col>
                <Col
                    className="py-2"
                    style={{ maxHeight: "350px", overflowY: "scroll" }}
                    md={12}
                    lg={12}
                >
                    <Badge variant="info" className="sticky-top">
                        {i18n.language === "th" ? "ตารางข่าว" : "Table News"}
                    </Badge>
                    <TableNews paging={false} />
                </Col>
            </Row>
        </Container>
    );
}
