import React from "react";
import { Form, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function FormLogin(props) {
    const { t } = useTranslation();
    return (
        <Form onSubmit={props.clickLogin} className="effectSection">
            <Form.Group controlId="formBasicEmail">
                <Form.Label
                    className={
                        props.error.name === "username"
                            ? "text-danger"
                            : "text-info"
                    }
                >
                    {t("sign.sign-in.username")}
                </Form.Label>
                <Form.Control
                    className={
                        props.error.name === "username"
                            ? props.error.className
                            : ""
                    }
                    name="username"
                    type="text"
                    placeholder={t("sign.sign-in.username")}
                    onChange={props.inputValue}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label
                    className={
                        props.error.name === "password"
                            ? "text-danger"
                            : "text-info"
                    }
                >
                    {t("sign.sign-in.password")}
                </Form.Label>
                <Form.Control
                    className={
                        props.error.name === "password"
                            ? props.error.className
                            : ""
                    }
                    name="password"
                    type="password"
                    placeholder={t("sign.sign-in.password")}
                    onChange={props.inputValue}
                />
            </Form.Group>
            <Container className="d-table d-md-flex justify-content-between align-items-end">
                <Form.Group as={Row}>
                    <Button variant="primary" type="submit">
                        {t("sign.component.btn")}
                    </Button>
                </Form.Group>
                <Form.Group as={Row}>
                    <Link
                        to="/login"
                        className="text-secondary"
                        onClick={() => props.showForget(true)}
                    >
                        {t("sign.forget")} ?
                    </Link>
                </Form.Group>
            </Container>
        </Form>
    );
}

export default FormLogin;
