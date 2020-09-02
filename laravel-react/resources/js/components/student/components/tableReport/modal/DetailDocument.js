import React from "react";
import { Container, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import ConvertDate from "../../../../middleware/method/convertDate";
import StatusBadgeDoc from "../statusDocument";

const DetailDocument = ({ document, styles }) => {
    const { t } = useTranslation();
    const _userName = useSelector(state => state.userState);
    return (
        <Container style={styles}>
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
                        {t("students.modal.status-documents.create")}
                    </h6>{" "}
                    <span className="pl-2">
                        {document.created_at_converted ? (
                            document.created_at_converted
                        ) : (
                            <ConvertDate dateTime={document.created_at} />
                        )}
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
                        {t("students.modal.status-documents.edit")}
                    </h6>{" "}
                    <span className="pl-2">
                        {document.updated_at_converted ? (
                            document.updated_at_converted
                        ) : (
                            <ConvertDate dateTime={document.updated_at} />
                        )}
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
                        {t("students.modal.status-documents.cancel")}
                    </h6>{" "}
                    <span className="pl-2">
                        {document.canceled_at_converted ? (
                            document.canceled_at_converted
                        ) : document.canceled_at ? (
                            <ConvertDate dateTime={document.canceled_at} />
                        ) : (
                            "-"
                        )}
                    </span>
                </Col>

                {/* status */}
                <Col className="py-2" as="dt" sm={4} md={4} lg={4}>
                    <i className="fas fa-spinner" aria-hidden="true"></i>{" "}
                    {t("students.modal.status-documents.status")}
                </Col>
                <Col className="py-2" as="dd" sm={8} md={8} lg={8}>
                    {document.status_badge ? (
                        document.status_badge
                    ) : (
                        <StatusBadgeDoc status={document.status} />
                    )}
                </Col>

                {/* sender */}
                <Col className="py-2" as="dt" sm={4} md={4} lg={4}>
                    <i className="fas fa-user" aria-hidden="true"></i>{" "}
                    {t("students.modal.status-documents.sender")}
                </Col>
                <Col className="py-2" as="dd" sm={8} md={8} lg={8}>
                    {document.user_id === _userName.id
                        ? `${_userName.title} ${_userName.first_name} ${_userName.last_name}`
                        : document.user.title +
                          " " +
                          document.user.first_name +
                          " " +
                          document.user.last_name}
                </Col>

                {/* user_cancel */}
                <Col className="py-2" as="dt" sm={4} md={4} lg={4}>
                    <i className="fas fa-user" aria-hidden="true"></i>{" "}
                    {t("students.modal.status-documents.canceler")}
                </Col>
                <Col className="py-2" as="dd" sm={8} md={8} lg={8}>
                    {document.user_cancel !== null
                        ? document.user_cancel.title +
                          " " +
                          document.user_cancel.first_name +
                          " " +
                          document.user_cancel.last_name
                        : "-"}
                </Col>

                {/* not */}
                <Col className="py-2" as="dt" sm={4} md={4} lg={4}>
                    <i className="fas fa-clipboard" aria-hidden="true"></i>{" "}
                    {t("students.modal.status-documents.note")}
                </Col>
                <Col className="py-2" as="dd" sm={8} md={8} lg={8}>
                    {document.note !== null ? document.note : "-"}
                </Col>
            </dl>
        </Container>
    );
};

export default DetailDocument;
