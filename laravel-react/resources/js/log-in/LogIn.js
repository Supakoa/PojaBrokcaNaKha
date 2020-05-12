import React, { Component } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Logo from "./../components/images/logo.png";
import Register from "./component/Register";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import axios from "axios";

export default class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: {
                username: "",
                password: "",
                token: ""
            },
            forgetPassword: {
                forget: false
            }
        };
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleClickLogIn = this.handleClickLogIn.bind(this);
        this.handleForget = this.handleForget.bind(this);
    }

    handleForget(value) {
        this.setState({
            forgetPassword: {
                ...this.state.forgetPassword,
                forget: value
            }
        });
    }

    handleChangeUsername(event) {
        this.setState({
            login: {
                ...this.state.login,
                username: event.target.value
            }
        });
    }

    handleChangePassword(event) {
        this.setState({
            login: {
                ...this.state.login,
                password: event.target.value
            }
        });
    }

   async handleClickLogIn(event) {
        await event.preventDefault();
        const user = {
            email: this.state.login.username,
            password: this.state.login.password
        };

        console.log(user);
        axios.post(`http://localhost:8000/api/login`, user).then(res => {
            console.log(res);
        });
    }

    render() {
        return (
            <section className="overflow-hidden">
                <Router>
                    <Switch>
                        <Route exact path="/login">
                            <Container fluid>
                                <Row className="section-log-in">
                                    <Col
                                        xs={12}
                                        sm={12}
                                        md={6}
                                        lg={6}
                                        className="bg-light d-flex align-item-center"
                                    >
                                        <section className="d-table p-4 w-50 m-auto">
                                            <section className="d-table text-center m-auto">
                                                <Image
                                                    className="border-bottom border-info"
                                                    src={Logo}
                                                    width="80"
                                                    height="80"
                                                />
                                                <p className="text-info">
                                                    GE Petition
                                                </p>
                                                {!this.state.forgetPassword
                                                    .forget ? (
                                                    <h3 className="p-1 effectSection">
                                                        เข้าสู่ระบบ
                                                    </h3>
                                                ) : (
                                                    <h3 className="p-1 effectSection">
                                                        ลืมรหัสผ่าน
                                                    </h3>
                                                )}
                                            </section>
                                            {!this.state.forgetPassword
                                                .forget ? (
                                                <FromLogIn
                                                    showForget={
                                                        this.handleForget
                                                    }
                                                    clickLogin={
                                                        this.handleClickLogIn
                                                    }
                                                    username={
                                                        this
                                                            .handleChangeUsername
                                                    }
                                                    password={
                                                        this
                                                            .handleChangePassword
                                                    }
                                                />
                                            ) : (
                                                <ComponentForgetPassword
                                                    closeForget={
                                                        this.handleForget
                                                    }
                                                />
                                            )}
                                        </section>
                                    </Col>
                                    <Col
                                        xs={12}
                                        sm={12}
                                        md={6}
                                        lg={6}
                                        className="bg-info text-light d-flex align-item-center"
                                    >
                                        <ComponentRegister />
                                    </Col>
                                </Row>
                            </Container>
                        </Route>
                        <Route path="/login/register" component={Register} />
                    </Switch>
                </Router>
            </section>
        );
    }
}

function ComponentRegister() {
    return (
        <section className="w-75 m-auto effectSection">
            <p>Petition คือ ?</p>
            <p>เว็บไซต์ส่งแบบคำร้องของมหาวิทยาลัยราชภัฎสวนสุนันทา</p>
            <hr />
            <p>คุณต้องการส่งแบบคำร้องแต่ยังไม่ได้ลงทะเบียนใช่หรือไม่ ?</p>
            <Link className="m-auto btn btn-light" to="/log-in/register">
                ลงทะเบียน
            </Link>
        </section>
    );
}

function ComponentForgetPassword(props) {
    return (
        <Form className="w-75 m-auto effectSection">
            <Form.Row>
                <Form.Group as={Col} controlId="formBasicForget">
                    <Form.Label className="text-info">อีเมล</Form.Label>
                    <Form.Control type="text" placeholder="อีเมล" />
                </Form.Group>
            </Form.Row>
            <Button onClick={() => props.closeForget(false)}>ยืนยัน</Button>
        </Form>
    );
}

function FromLogIn(props) {
    return (
        <Form className="effectSection">
            <Form.Group controlId="formBasicEmail">
                <Form.Label className="text-info">Username</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="อีเมล"
                    onChange={props.username}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label className="text-info">Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={props.password}
                />
            </Form.Group>
            <Container>
                <Form.Group as={Row}>
                    <Link to="/log-in" onClick={() => props.showForget(true)}>
                        ลืมรหัสผ่าน ?
                    </Link>
                </Form.Group>
                <Form.Group as={Row}>
                    <Button variant="primary" onClick={props.clickLogin}>
                        ยืนยัน
                    </Button>
                </Form.Group>
            </Container>
        </Form>
    );
}
