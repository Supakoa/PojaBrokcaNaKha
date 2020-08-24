import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const NoneDetail = () => {
    const { t } = useTranslation();
    return (
        <Container
            style={{ borderStyle: "dotted", height: "30vh" }}
            className="d-flex align-items-center justify-content-center"
        >
            <div>
                {t("approvers.emptyDetail")}{" "}
                <i className="far fa-sticky-note"></i>
            </div>
        </Container>
    );
};

export default NoneDetail;
