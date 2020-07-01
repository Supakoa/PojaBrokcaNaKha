import React from "react";
import { Form, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function FormLogin(props) {
    return (
        <Form className="effectSection">
            <Form.Group controlId="formBasicEmail">
                <Form.Label
                    className={
                        props.error.name === "username"
                            ? "text-danger"
                            : "text-info"
                    }
                >
                    Username
                </Form.Label>
                <Form.Control
                    className={
                        props.error.name === "username"
                            ? props.error.className
                            : ""
                    }
                    name="username"
                    type="email"
                    placeholder="อีเมล"
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
                    Password
                </Form.Label>
                <Form.Control
                    className={
                        props.error.name === "password"
                            ? props.error.className
                            : ""
                    }
                    name="password"
                    type="text"
                    placeholder="Password"
                    onChange={props.inputValue}
                />
            </Form.Group>
            <Container className="d-flex justify-content-between align-items-end">
                <Form.Group as={Row}>
                    <Button variant="primary" onClick={props.clickLogin}>
                        ยืนยัน
                    </Button>
                </Form.Group>
                <Form.Group as={Row}>
                    <Link
                        to="/login"
                        className="text-secondary"
                        onClick={() => props.showForget(true)}
                    >
                        ลืมรหัสผ่าน ?
                    </Link>
                </Form.Group>
            </Container>
        </Form>
    );
}

export default FormLogin;
