import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import StatusBadgeDoc from "../../../../student/components/tableReport/statusDocument";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ModalImage from "../../../../student/components/tableReport/modal/ModalImage";
import { _URL } from "../../../../middleware/URL";

const ListDetailApprovers = ({ translate, approvers }) => {
    const { i18n } = useTranslation();
    React.useEffect(() => {}, [approvers]);
    console.log("approvers", approvers);
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
                {!!approvers && approvers.length === 0 ? (
                    <div className="text-center">
                        <i className="fas fa-signature"></i>
                    </div>
                ) : (
                    approvers.map((approver, idx) => {
                        return (
                            <Row key={idx}>
                                <Col lg={8} md={8}>
                                    <dl className="row mb-0">
                                        <dt className="col-lg-6 col-md-6  pr-0">
                                            {translate(
                                                "approvers.show-detail.user.fullname"
                                            )}
                                            :
                                        </dt>
                                        <dd className="col-lg-3 col-md-3  px-0">
                                            {`${idx + 1} ${approver.title} ${
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
                                    <dl className="row mb-0">
                                        <dt className="col-lg-3 col-md-3 col-sm-3 pr-0">
                                            {i18n.language === "th"
                                                ? "คำอธิบาย"
                                                : "Note"}
                                            :
                                        </dt>
                                        <dd className="col-lg-3 col-md-3 col-sm-3 px-0">
                                            {approver.pivot.comment !== null
                                                ? approver.pivot.comment
                                                : "-"}
                                        </dd>
                                    </dl>
                                    <dl className="row mb-0">
                                        <dt className="col-lg-3 col-md-3 col-sm-3 pr-0">
                                            {i18n.language === "th"
                                                ? "โหลดไฟล์แนบ"
                                                : "Download file"}
                                            :
                                        </dt>
                                        <dd className="col-lg-3 col-md-3 col-sm-3 px-0">
                                            {approver.pivot.return_file !==
                                            null ? (
                                                <a
                                                    href={
                                                        "/storage/" +
                                                        approver.pivot
                                                            .return_file
                                                    }
                                                    download
                                                >
                                                    {i18n.language === "th"
                                                        ? "โหลด"
                                                        : "Download"}
                                                </a>
                                            ) : (
                                                "-"
                                            )}
                                        </dd>
                                    </dl>
                                </Col>
                                <Col
                                    md={4}
                                    lg={4}
                                    className="d-flex align-items-center justify-content-center"
                                >
                                    {approver.license ? (
                                        <ModalImage src={approver.license} />
                                    ) : (
                                        <Link
                                            style={{ fontSize: "22px" }}
                                            className="text-secondary"
                                            to="/Approvers/profile"
                                        >
                                            <i className="far fa-image"></i>{" "}
                                            {i18n.language === "th"
                                                ? "ไม่พบรูป"
                                                : "image not found"}
                                        </Link>
                                    )}
                                </Col>
                            </Row>
                        );
                    })
                )}
            </Card.Body>
        </Card>
    );
};

export default ListDetailApprovers;
