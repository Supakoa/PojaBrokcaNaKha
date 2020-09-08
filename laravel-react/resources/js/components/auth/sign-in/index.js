import React from "react";
import "./login.css";
import ComponentRegister from "./ComponentRegister";
import ComponentForgetPassword from "./ComponentForgetPassword";
import FormLogin from "./FormLogin";
import { useHistory } from "react-router-dom";
import Logo from "./../../images/logo.png";
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { user, isAuththen, pathRoleUser } from "../../../redux/actions";
import redirectPage from "./RedirectPage";
import postUser from "../post/postUser";
import Swal from "sweetalert2";
import SwitchingLanguageBtn from "../../middleware/switchingLanguage";
import { useTranslation } from "react-i18next";
import alertResetPassword from "./AlertResetPassword";
import { _URL } from "../../middleware/URL";

export default function SignIn() {
    let _history = useHistory();
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const [_loading, setLoading] = React.useState(true);
    const [forgetPass, setForgetPass] = React.useState(false);
    const [isStatus, setIsStatus] = React.useState(true);
    const [_login, setLogin] = React.useState({
        username: "",
        password: ""
    });
    // //use Param campaign_id in url
    let _param = new URLSearchParams(window.location.search);
    let status = _param.get("status");

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
                .post(`${_URL}/api/login`, _user)
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
                    localStorage.setItem("pathRoleUser", _path);
                    _history.push(_path);
                    dispatch(pathRoleUser(_path));
                    dispatch(isAuththen(true));
                    dispatch(user(_data));
                }
            } else {
                setLoading(true);
            }
        }
    };

    React.useEffect(() => {
        if (!!status && isStatus) {
            alertResetPassword(status);
            setIsStatus(false);
        }
    });

    return (
        <section className="overflow-hidden">
            <Container fluid>
                <Row className="section-log-in">
                    <Col
                        md={12}
                        lg={6}
                        className="bg-light d-flex align-item-center"
                    >
                        <div
                            style={{ top: "0", right: "0" }}
                            className="position-absolute py-5 px-5 d-flex align-items-center"
                        >
                            <span className="px-2 d-sm-none d-md-block">
                                {t("sign.language")}{" "}
                            </span>{" "}
                            <SwitchingLanguageBtn className="nav-link float-right" />
                        </div>
                        <section className="d-table p-4 w-75 m-auto">
                            <section className="d-table text-center m-auto">
                                <Image
                                    className="border-bottom border-info"
                                    src={Logo}
                                    width="80"
                                    height="80"
                                />
                                <p className="text-info">GE Petition</p>

                                {_loading ? (
                                    <>
                                        {!forgetPass ? (
                                            <h3 className="p-1 effectSection">
                                                {t("sign.sign-in.signIn")}
                                            </h3>
                                        ) : (
                                            <h3 className="p-1 effectSection">
                                                {t("sign.forget")}
                                            </h3>
                                        )}
                                    </>
                                ) : (
                                    <div className="d-flex text-center w-100">
                                        <span>
                                            <Spinner
                                                className="m-auto"
                                                animation="border"
                                                size="sm"
                                            />{" "}
                                            {i18n.language === "th"
                                                ? "กำลังโหลด..."
                                                : "Loading..."}
                                        </span>
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
                        md={12}
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
