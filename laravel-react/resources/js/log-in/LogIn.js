import React from "react";
import "./login.css";
import ComponentRegister from "./ComponentRegister";
import ComponentForgetPassword from "./ComponentForgetPassword";
import FormLogin from "./FormLogin";
import { useHistory } from "react-router-dom";
import Logo from "./../components/images/logo.png";
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { user, isAuththen } from "../redux/actions";
import redirectPage from "./RedirectPage";
import postUser from "./component/element/postUser";
import Swal from "sweetalert2";

export default function LogIn() {
    let _history = useHistory();
    const dispatch = useDispatch();
    const [_load, setLoading] = React.useState(true);
    const [forgetPass, setForgetPass] = React.useState(false);
    const [_login, setLogin] = React.useState({
        username: "",
        password: ""
    });
    const [_error, setError] = React.useState({
        name: "",
        className: "border-danger"
    });

    React.useEffect(() => {});

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
        const setName = errorName => {
            setError({
                ..._error,
                name: errorName
            });
        };
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

        const validate = validateInput(_user.email, _user.password);

        if (validate) {
            setLoading(false);
            const postToken = await axios
                .post(`http://localhost:8000/api/login`, _user)
                .then(res => {
                    if (res.status === 200) {
                        return res.data.success.token;
                    }
                })
                .catch(error => {
                    Swal.fire({
                        icon: "error",
                        title: "อีเมล หรือ รหัสผ่าน ไม่ถูกต้อง!",
                        text: `${error}`
                    });
                    return null;
                });

            const tokenUser = postToken;
            if (tokenUser !== null) {
                const _authUser = await postUser(tokenUser);
                if (_authUser.status) {
                    const _data = _authUser._data;
                    const role_id = _authUser._role;
                    const _path = redirectPage(role_id);
                    localStorage.setItem("_authLocal", tokenUser);
                    _history.push(_path);
                    dispatch(isAuththen(true));
                    dispatch(user(_data));
                } else {
                }
            } else {
                setLoading(true);
            }
        }
    };

    return (
        <section className="overflow-hidden">
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

                                {_load ? (
                                    <>
                                        {!forgetPass ? (
                                            <h3 className="p-1 effectSection">
                                                เข้าสู่ระบบ
                                            </h3>
                                        ) : (
                                            <h3 className="p-1 effectSection">
                                                ลืมรหัสผ่าน
                                            </h3>
                                        )}
                                    </>
                                ) : (
                                    <div className="d-flex text-center w-100">
                                        <Spinner
                                            className="m-auto"
                                            animation="border"
                                        />
                                    </div>
                                )}
                            </section>

                            {!forgetPass ? (
                                <FormLogin
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
        </section>
    );
}
