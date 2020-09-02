import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import StatusBadgeDoc from "../../../../student/components/tableReport/statusDocument";
import { useTranslation } from "react-i18next";

const ListDetailApprovers = ({ translate, approvers }) => {
    const { i18n } = useTranslation();
    return (
        <Card>
            <Card.Body>
                <h5 className="pb-3">
                    <i className="fas fa-history"></i>{" "}
                    {i18n.language === "th"
                        ? "ประวัติผู้ตรวจ"
                        : "Aprover History"}
                    :
                </h5>
                <Row>
                    {approvers.map((approver, idx) => {
                        return (
                            <Col key={idx} lg={6} md={6}>
                                <dl className="row mb-0">
                                    <dt className="col-lg-3 col-md-3 col-sm-3 pr-0">
                                        {translate(
                                            "approvers.show-detail.user.fullname"
                                        )}
                                        :
                                    </dt>
                                    <dd className="col-lg-3 col-md-3 col-sm-3 px-0">
                                        {`${idx + 1}${approver.title} ${
                                            approver.first_name
                                        } ${approver.last_name}`}
                                    </dd>
                                </dl>
                                <dl className="row mb-0">
                                    <dt className="col-lg-3 col-md-3 col-sm-3 pr-0">
                                        {i18n.language === "th"
                                            ? "สถานะ"
                                            : "Status"}
                                        :
                                    </dt>
                                    <dd className="col-lg-3 col-md-3 col-sm-3 px-0">
                                        <StatusBadgeDoc
                                            status={approver.pivot.status}
                                        />
                                    </dd>
                                </dl>
                            </Col>
                        );
                    })}
                </Row>
            </Card.Body>
        </Card>
    );
};

export default ListDetailApprovers;
