import React from "react";
import "./login.css";
import { Link, Redirect } from "react-router-dom";
import Logo from "./../components/images/logo.png";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { user } from "../redux/actions";

export default function LogIn(props) {
    const disPatchLogin = useDispatch();
    const getPostLogin = useSelector(state => state.userState);
    const [forgetPass, setForgetPass] = React.useState(false);
    const [_roleId, set_roleId] = React.useState(0);
    const [role, setRole] = React.useState("");
    const [_auth, setAuth] = React.useState(false);
    const [_login, setLogin] = React.useState({
        username: "",
        password: ""
    });
    const [_error, setError] = React.useState({
        name: "",
        className: "border-danger"
    });

    const handleForget = value => {
        setForgetPass(value);
    };

    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        setLogin({
            ..._login,
            [name]: value
        });
    };

    const validateInput = (email, password) => {
        const setName = errorName =>
            setError({
                ..._error,
                name: errorName
            });
        if (email === "") {
            setName("username");
            return false;
        } else if (password === "") {
            setName("password");
            return false;
        }
        return true;
    };

    const handleClickLogIn = async event => {
        event.preventDefault();
        const _user = {
            email: _login.username,
            password: _login.password
        };
        const validate = validateInput(user.email, user.password);
        if (validate) {
            const postToken = await axios
                .post(`http://localhost:8000/api/login`, _user)
                .then(res => {
                    if (res.status === 200) {
                        return res.data.success.token;
                    }
                })
                .catch(error => {
                    const result = confirm("ลองอีกครั้ง.");
                    if (result) {
                        window.location = "/login";
                    }
                });

            const tokenUser = postToken;
            if (tokenUser !== null) {
                const tokenGetUser = await axios
                    .post(
                        `http://localhost:8000/api/user`,
                        {},
                        {
                            headers: {
                                Authorization: `Bearer ${tokenUser}`
                            }
                        }
                    )
                    .then(res => {
                        const data = res.data.success;
                        return data;
                    })
                    .catch(error => {
                        const result = confirm(
                            "Post Token มีปัญหาลองอีกครั้ง."
                        );
                        if (result) {
                            window.location = "/login";
                        }
                    });
                disPatchLogin(user(tokenGetUser));
            }
        }
    };

    const redirectOfRole = roleId => {
        if (roleId === 1) {
            //addmin
            setAuth(true);
            setRole("admin");
        } else if (roleId === 2) {
            //staff
            setRole("staff");
            setAuth(true);
        } else if (roleId === 3) {
            //studebt
            setRole("student");
            setAuth(true);
        } else if (roleId === 0) {
            console.log("Role 0");
        } else {
            const result = confirm("Role ไม่ถูกต้อง");
            if (result) {
                window.location = "/login";
            }
        }
    };
    // console.log(getPostLogin);

    return (
        <section className="overflow-hidden">
            {/* {$.map(getPostLogin, function(item, index) {
                return <li key={index}>{item !== null ? item : "null"}</li>;
            })} */}
            {_roleId !== 0 ? redirectOfRole(_roleId) : null}
            {!_auth ? (
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
                                    <p className="text-info">GE Petition</p>
                                    {!forgetPass ? (
                                        <h3 className="p-1 effectSection">
                                            เข้าสู่ระบบ
                                        </h3>
                                    ) : (
                                        <h3 className="p-1 effectSection">
                                            ลืมรหัสผ่าน
                                        </h3>
                                    )}
                                </section>
                                {!forgetPass ? (
                                    <FromLogIn
                                        error={_error}
                                        showForget={handleForget}
                                        clickLogin={handleClickLogIn}
                                        inputValue={handleChange}
                                    />
                                ) : (
                                    <ComponentForgetPassword
                                        closeForget={handleForget}
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
            ) : (
                <Redirect
                    exact
                    from="/login"
                    to={role !== "" ? role : "login"}
                />
            )}
        </section>
    );
}

function ComponentRegister() {
    return (
        <section className="w-75 m-auto effectSection">
            <p>Petition คือ ?</p>
            <p>เว็บไซต์ส่งแบบคำร้องของมหาวิทยาลัยราชภัฎสวนสุนันทา</p>
            <hr />
            <p>คุณต้องการส่งแบบคำร้องแต่ยังไม่ได้ลงทะเบียนใช่หรือไม่ ?</p>
            <Link className="m-auto btn btn-light" to="/register">
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
                <Form.Label className="text-info">Password</Form.Label>
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
            <Container>
                <Form.Group as={Row}>
                    <Link to="/login" onClick={() => props.showForget(true)}>
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
