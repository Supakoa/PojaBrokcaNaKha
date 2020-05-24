import React from "react";
// import axios from "axios";
import { useHistory } from "react-router-dom";
import { Col, Form, Button, Image, Spinner } from "react-bootstrap";
import Logo from "./../../../components/images/logo.png";
import { useDispatch } from "react-redux";
import { user, isAuththen } from "../../../redux/actions";
import redirectPage from "../../RedirectPage";
import selectedFac from "./getMajor";
import fetchFaculties from "./getFaculties";
import postToken from "./postToken";
import postUser from "./postUser";
import validateConfirmPassword from "./validatePassword";
import validateId from "./validateStudent-id";

export default function FormRegister(props) {
    let history = useHistory();
    const dispatch = useDispatch();
    const [validated, setValidated] = React.useState(false);
    const [_select, setSelect] = React.useState(true);
    const [_majors, setMajors] = React.useState([]);
    const [_faculties, setFaculties] = React.useState([]);
    const [_load, setLoading] = React.useState(true);
    const [_isMount, _setIsMount] = React.useState(true);
    const [_isValidStudentId, _setIsValidStudentId] = React.useState(false);
    const [_isValidPhone, _setIsValidPhone] = React.useState(false);
    const [_isValidConPass, _setIsValidConPass] = React.useState(false)
    // let _isMount = true;
    const [_user, setUser] = React.useState({
        token: null
    });
    const [_error, setError] = React.useState({
        error: {
            message: []
        }
    });
    const [_responError, setResponError] = React.useState({ message: [] });

    React.useEffect(() => {
        if (_isMount) {
            fetchFaculties(setFaculties, _isMount);
        }
        return () => _setIsMount(false);
    }, [_isMount]);

    const hadleChanges = event => {
        // const user = _user;
        const name = event.target.name;
        const value = event.target.value;
        const oldPass = _user.password;
        const _length = value.length;

        if (name === "studentId") {
            const _max = value.slice(0, event.target.maxLength);
            const _validateId = validateId(value, name);
            if (_validateId.status) {
                setUser({
                    ..._user,
                    [name]: _max
                });
            } else {
                _setIsValidStudentId(!_validateId.status);
                setError({
                    error: {
                        ..._error.error,
                        message: [
                            ..._error.error.message,
                            { [name]: _validateId.message }
                        ]
                    }
                });
            }
        } else if (name === "conPassword") {
            const _validatePass = validateConfirmPassword(name, value, oldPass);
            if (_validatePass.status) {
                setUser({
                    ..._user,
                    [name]: value
                });
            } else {
                _setIsValidConPass(true)
                setError({
                    error: {
                        ..._error.error,
                        message: [
                            ..._error.error.message,
                            { [name]: _validatePass.message }
                        ]
                    }
                });
            }
        } else if (name === "phone") {
            const _max = value.slice(0, event.target.maxLength);
            const _validateId = validateId(value, name);
            if (_validateId.status) {
                setUser({
                    ..._user,
                    [name]: _max
                });
            } else {
                _setIsValidPhone(!_validateId.status);
                setError({
                    error: {
                        ..._error.error,
                        message: [
                            ..._error.error.message,
                            { [name]: _validateId.message }
                        ]
                    }
                });
            }
        } else if (name === "faculty") {
            _setIsMount(false);
            setUser({
                ..._user,
                [name]: value
            });
            setSelect(false);
            selectedFac(value === "" ? 0 : value, setMajors);
        } else {
            setUser({
                ..._user,
                [name]: value
            });
        }
        // console.log(_error.error.message);
    };

    const handleOnClick = async event => {
        const form = event.currentTarget.checkValidity();
        // console.log(form);
        const item = {
            title: "eiei",
            role_id: 3,
            major_id: _user.major,
            student_id: _user.studentId,
            first_name: _user.firstName,
            last_name: _user.lastName,
            email: _user.email,
            password: _user.password,
            telephone: _user.phone,
            c_password: _user.conPassword
        };
        setValidated(!form);
        if (form) {
            setLoading(false);
            const tokenRegis = await postToken(item);

            if (tokenRegis.token !== null) {
                setUser({
                    ..._user,
                    token: tokenRegis.token
                });

                const _postUser = await postUser(tokenRegis.token);
                if (!_postUser.status) {
                    setResponError({
                        message: [..._responError.message, _postUser.error]
                    });
                    setLoading(true);
                } else {
                    if (_postUser._role === 3) {
                        const _path = redirectPage(_postUser._role);
                        localStorage.setItem("_authLocal", tokenRegis.token);
                        history.push(_path);
                        dispatch(isAuththen(true));
                        dispatch(user(_postUser._data));
                        setLoading(true);
                    } else {
                        console.log("role_id fail");
                    }
                }
            } else {
                setResponError({
                    message: [..._responError, tokenRegis.error]
                });
                setUser({
                    ..._user,
                    token: tokenRegis.token
                });
                setLoading(true);
            }
        } else {
            setLoading(true);
            event.preventDefault();
            event.stopPropagation();
            history.push("/register");
        }
    };

    return (
        <Form
            noValidate
            validated={validated}
            onSubmit={handleOnClick}
            className="p-4 w-75 m-auto"
        >
            <section className="d-table text-center m-auto">
                <Image
                    className="border-bottom border-info"
                    src={Logo}
                    width="80"
                    height="80"
                />
                <p className="text-info">GE Petition</p>
            </section>

            <Form.Row className="mt-4">
                <Form.Group as={Col} controlId="firstName">
                    <Form.Label
                        className={validated ? "text-danger" : "text-info"}
                    >
                        ชื่อ
                    </Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="ชื่อ"
                        name="firstName"
                        onChange={hadleChanges}
                    />

                    <Form.Control.Feedback type="invalid">
                        {_responError.message
                            ? "กรุณากรอก ชื่อ"
                            : _responError.message.first_name}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="lastName">
                    <Form.Label
                        className={validated ? "text-danger" : "text-info"}
                    >
                        นามสกุล
                    </Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="นามสกุล"
                        name="lastName"
                        onChange={hadleChanges}
                    />

                    <Form.Control.Feedback type="invalid">
                        {_responError.message
                            ? "กรุณากรอก นามสกุล"
                            : _responError.message.last_name}
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} md={8} controlId="studentId">
                    <Form.Label
                        className={validated ? "text-danger" : "text-info"}
                    >
                        รหัสนักศึกษา
                    </Form.Label>
                    <Form.Control
                        maxLength={11}
                        required
                        type="text"
                        placeholder="รหัสนักศึกษา"
                        name="studentId"
                        onChange={hadleChanges}
                        isInvalid={_isValidStudentId}
                    />

                    {_isValidStudentId ? (
                        _error.error.message.map((message, index) => {
                            if (index === 0) {
                                return (
                                    <Form.Control.Feedback
                                        key={index}
                                        type="invalid"
                                    >
                                        {message.studentId}
                                    </Form.Control.Feedback>
                                );
                            }
                        })
                    ) : (
                        <Form.Control.Feedback type="invalid">
                            {_responError.message
                                ? "กรุณากรอก รหัสนักศึกษา"
                                : _responError.message.studebt_id}
                        </Form.Control.Feedback>
                    )}
                </Form.Group>

                <Form.Group as={Col} md={6} controlId="password">
                    <Form.Label
                        className={validated ? "text-danger" : "text-info"}
                    >
                        รหัสผ่าน
                    </Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="รหัสผ่าน"
                        name="password"
                        onChange={hadleChanges}
                    />
                    <Form.Control.Feedback type="invalid">
                        {_responError.message
                            ? "กรุณากรอก รหัสผ่าน"
                            : _responError.message.password}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md={6} controlId="conPassword">
                    <Form.Label
                        className={validated ? "text-danger" : "text-info"}
                    >
                        ยืนยันรหัสผ่าน
                    </Form.Label>
                    <Form.Control
                        required
                        type="text"
                        isInvalid={_isValidConPass}
                        placeholder="ยืนยัน รหัสผ่าน"
                        name="conPassword"
                        onChange={hadleChanges}
                    />
                    {_isValidConPass ? (
                        _error.error.message.map((message, index) => {
                            if (index === 0) {
                                return (
                                    <Form.Control.Feedback
                                        key={index}
                                        type="invalid"
                                    >
                                        {message.conPassword}
                                    </Form.Control.Feedback>
                                );
                            }
                        })
                    ) : (
                        <Form.Control.Feedback type="invalid">
                            {_responError.message
                            ? "กรุณากรอก ยืนยันรหัสผ่าน"
                            : _responError.message.c_password}
                        </Form.Control.Feedback>
                    )}
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="email">
                    <Form.Label
                        className={validated ? "text-danger" : "text-info"}
                    >
                        อีเมล
                    </Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="example@ssru.ac.th.com"
                        name="email"
                        onChange={hadleChanges}
                    />
                    <Form.Control.Feedback type="invalid">
                        {_responError.message
                            ? "กรุณากรอก อีเมล"
                            : _responError.message.email}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="phone">
                    <Form.Label
                        className={validated ? "text-danger" : "text-info"}
                    >
                        เบอร์โทรศัพท์
                    </Form.Label>
                    <Form.Control
                        maxLength={10}
                        required
                        type="text"
                        placeholder="เบอร์โทรศัพท์"
                        name="phone"
                        isInvalid={_isValidPhone}
                        onChange={hadleChanges}
                    />
                    {_isValidPhone ? (
                        _error.error.message.map((message, index) => {
                            if (index === 0) {
                                return (
                                    <Form.Control.Feedback
                                        key={index}
                                        type="invalid"
                                    >
                                        {message.phone}
                                    </Form.Control.Feedback>
                                );
                            }
                        })
                    ) : (
                        <Form.Control.Feedback type="invalid">
                            {_responError.message
                                ? "กรุณากรอก เบอร์โทรศัพท์"
                                : _responError.message.telephone}
                        </Form.Control.Feedback>
                    )}
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="faculty">
                    <Form.Label
                        className={validated ? "text-danger" : "text-info"}
                    >
                        คณะ
                    </Form.Label>
                    <Form.Control
                        required
                        as="select"
                        custom
                        name="faculty"
                        onChange={hadleChanges}
                    >
                        {}
                        <option value="">คณะ</option>
                        {$.map(_faculties, (fac, indexOrKey) => {
                            const facName = fac.name;
                            const facId = fac.id;
                            return (
                                <option key={indexOrKey} value={facId}>
                                    {facName}
                                </option>
                            );
                        })}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        กรุณาเลือก คณะ
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="major">
                    <Form.Label
                        className={validated ? "text-danger" : "text-info"}
                    >
                        สาขา
                    </Form.Label>
                    <Form.Control
                        required
                        as="select"
                        custom
                        name="major"
                        onChange={hadleChanges}
                        disabled={_select}
                    >
                        <option value="">สาขา</option>
                        {$.map(_majors, (major, indexOrKey) => {
                            const majorName = major.name;
                            const majorId = major.id;
                            return (
                                <option key={indexOrKey} value={majorId}>
                                    {majorName}
                                </option>
                            );
                        })}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        {_responError.message
                            ? "กรุณากรอกเลือก สาขา"
                            : _responError.message.major_id}
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
                {_load ? "ยืนยัน" : <Spinner animation="border" />}
            </Button>
        </Form>
    );
}
