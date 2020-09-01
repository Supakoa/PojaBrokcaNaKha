import React from "react";
// import { Link, useHistory, useLocation } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

import SwitchingLanguageBtn from "../../middleware/switchingLanguage";
import ComponentLogin from "./ComponentLogin";
import FormRegister from "./FormRegister";
import { useTranslation } from "react-i18next";

export default function SignUp() {
    const { t } = useTranslation();
    return (
        <Container fluid className="effectSection">
            <Row className="section-log-in">
                <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    className="bg-info text-light d-flex align-item-center"
                >
                    <ComponentLogin />
                </Col>
                <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    className="bg-light d-flex align-item-center"
                >
                    <div
                        style={{ top: "0", right: "0" }}
                        className="position-absolute py-5 px-5 d-flex align-items-center"
                    >
                        <span className="px-2">{t("sign.language")} </span>{" "}
                        <SwitchingLanguageBtn className="nav-link float-right" />
                    </div>
                    <FormRegister />
                </Col>
            </Row>
        </Container>
    );
}
