import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./../../components/images/logo.png";
import {
    Col,
    Container,
    Row,
    Form,
    Button,
    Image,
    Alert
} from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { user } from "../redux/actions";
import Student from "./../../components/student/Student";
import Main from "./../../components/subdirect/Main";

export default function Register() {
    const disPatchRegis = useDispatch();
    const getPostRegis = useSelector(state => state.userState);
    const [_classes, setClasses] = React.useState("");
    const [_select, setSelect] = React.useState(true);
    const [_majors, setMajors] = React.useState([]);
    const [_faculties, setFaculties] = React.useState([]);
    const [_user, setUser] = React.useState({
        firstName: "",
        lastName: "",
        studentId: "",
        password: "",
        conPassword: "",
        email: "",
        phone: "",
        faculty: "",
        major: "",
        token: ""
    });
    const [_error, setError] = React.useState({
        notMatch: true,
        name: "",
        className: "border-danger",
        message: ""
    });

    const hadleChanges = event => {
        const user = _user;
        const name = event.target.name;
        const value = event.target.value;

        if (name === "studentId" || name === "phone") {
            const id = Number(value);
            var message;
            if (isNaN(id)) {
                if (name === "studentId") {
                    message = "รหัสนักศึกษาต้องเป็นตัวเลข";
                } else {
                    message = "เบอร์โทรศัพท์ควรเป็นตัวเลข";
                }
                validateConfirm(false, name, message);
            } else {
                if (name === "studentId" && value.length !== 11) {
                    message = "รหัสนักศึกษาต้อง 11 หลัก";
                    validateConfirm(false, name, message);
                } else if (name === "phone" && value.length !== 10) {
                    message = "เบอร์โทรศัพท์ต้อง 10 หลัก";
                    validateConfirm(false, name, message);
                } else {
                    setUser({
                        ..._user,
                        [name]: value
                    });
                    validateConfirm(true, "", "");
                }
            }
        } else if (name === "conPassword") {
            if (user.password == value) {
                validateConfirm(true, "", "");
                setUser({
                    ..._user,
                    [name]: value
                });
            } else if (user.password !== value) {
                if (value !== "") {
                    const message = "กรุณาตรวจสอบพาสเวิร์ดอีกครั้ง";
                    validateConfirm(false, "conPassword", message);
                } else {
                    validateInput("conPassword");
                }
            }
        } else if (name === "faculty") {
            if (value !== "") {
                setUser({
                    ..._user,
                    [name]: value
                });
                setSelect(false);
                selectedFac(value === "" ? 0 : value);
            } else {
                setUser({
                    ..._user,
                    [name]: value
                });
                setSelect(false);
            }
        } else if (name === "major") {
            if (value !== "") {
                setUser({
                    ..._user,
                    [name]: value
                });
            } else {
                setUser({
                    ..._user,
                    [name]: value
                });
            }
        } else {
            setUser({
                ..._user,
                [name]: value
            });
        }
    };

    const componentDidMount = async () => {
        const getFac = await axios
            .get(`http://127.0.0.1:8000/api/faculties`)
            .then(res => {
                return res.data.success;
            })
            .catch(error => {
                const result = confirm(error);
                if (result) {
                    window.location = "/register";
                }
            });
        setFaculties(getFac);
    };

    const selectedFac = value => {
        const facId = Number(value);

        if (facId !== 0) {
            const getMajors = axios
                .get(`http://127.0.0.1:8000/api/faculties/${facId}/majors`)
                .then(res => {
                    return res.data;
                });
            setMajors(getMajors);
        }
    };

    const validateConfirm = (value, targetName, targetMessage) => {
        // const user = _user;
        setError({
            ..._error,
            name: targetName,
            notMatch: value,
            message: targetMessage
        });
    };

    const validateInput = name => {
        const erName = name => {
            setError({
                ..._error,
                name: name
            });
        };
        if (name.firstName == "") {
            erName("firstName");
            return false;
        } else if (name.lastName === "") {
            erName("lastName");
            return false;
        } else if (name.studentId === "") {
            erName("studentId");
            return false;
        } else if (name.password === "") {
            erName("password");
            return false;
        } else if (name.conPassword === "") {
            erName("conPassword");
            return false;
        } else if (name.email === "") {
            erName("email");
            return false;
        } else if (name.phone === "") {
            erName("phone");
            return false;
        } else if (name.faculty === "") {
            erName("faculty");
            return false;
        } else if (name.major === "") {
            erName("major");
            return false;
        }
        return true;
    };

    const handleOnClick = async event => {
        event.preventDefault();
        const user = _user;
        const validate = validateInput(user);
        const data = {
            first_name: user.firstName,
            last_name: user.lastName,
            email: user.email,
            password: user.password,
            telephone: user.phone,
            c_password: user.conPassword,
            student_id: user.studentId,
            major_id: user.major
        };
        console.log(validate);

        if (validate) {
            console.log("success isTrue");
            const tokenRegister = await axios
                .post(`http://127.0.0.1:8000/api/register`, data)
                .then(res => {
                    const token = res.data.success.token;
                    return token;
                })
                .catch(error => {
                    const result = confirm(error);
                    if (result) {
                        window.location = "/register";
                    }
                });
            setUser({
                ..._user,
                token: tokenRegister
            });
        }

        const tokenRegis = _user.token;
        if (tokenRegis !== "") {
            const userApi = await axios
                .post(
                    `http://localhost:8000/api/user`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${tokenRegis}`
                        }
                    }
                )
                .then(res => {
                    const role = res.data.success.role_id;
                    const user = res.data.success;
                    return user
                })
                .catch(error => {
                    const result = confirm("ลองอีกครั้ง.");
                    if (result) {
                        window.location = "/login";
                    }
                });
                disPatchRegis(user(userApi));
        }
        console.log(getPostRegis);
    };
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
                    <ComponentLogIn />
                </Col>
                <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    className="bg-light d-flex align-item-center"
                >
                    <FormRegister
                        selected={_select}
                        error={_error}
                        majors={_majors}
                        faculties={_faculties}
                        inputValue={hadleChanges}
                        handleClick={andleOnClick}
                    />
                </Col>
            </Row>
        </Container>
    );
}

function ComponentLogIn() {
    return (
        <section className="w-75 m-auto">
            <p>Petition คือ ?</p>
            <p>เว็บไซต์ส่งแบบคำร้องของมหาวิทยาลัยราชภัฎสวนสุนันทา</p>
            <hr />
            <p>คุณต้องการเข้าสู่ระบบเพื่อส่งแบบคำร้องใช่หรือไม่ ?</p>
            <Link className="m-auto btn btn-light" to="/login">
                ล็อคอิน
            </Link>
        </section>
    );
}

function FormRegister(props) {
    const majors = props.majors;
    const facs = props.faculties;

    return (
        <Form className="p-4 w-75 m-auto">
            <section className="d-table text-center m-auto">
                <Image
                    className="border-bottom border-info"
                    src={Logo}
                    width="80"
                    height="80"
                />
                <p className="text-info">GE Petition</p>
            </section>
            {props.error.notMatch ? null : (
                <Alert variant="danger">{props.error.message}</Alert>
            )}
            <Form.Row className="mt-4">
                <Form.Group as={Col} controlId="formRowFirstName">
                    <Form.Label className="text-info">ชื่อ</Form.Label>
                    <Form.Control
                        className={
                            props.error.name === "firstName"
                                ? props.error.className
                                : ""
                        }
                        type="text"
                        placeholder="ชื่อ"
                        name="firstName"
                        onChange={props.inputValue}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formRowLastName">
                    <Form.Label className="text-info">นามสกุล</Form.Label>
                    <Form.Control
                        className={
                            props.error.name === "lastName"
                                ? props.error.className
                                : ""
                        }
                        type="text"
                        placeholder="นามสกุล"
                        name="lastName"
                        onChange={props.inputValue}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} md={8} controlId="formRowStudentID">
                    <Form.Label className="text-info">รหัสนักศึกษา</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="รหัสนักศึกษา"
                        name="studentId"
                        className={
                            props.error.name === "studentId"
                                ? props.error.className
                                : ""
                        }
                        onChange={props.inputValue}
                    />
                </Form.Group>

                <Form.Group as={Col} md={6} controlId="formRowPassword">
                    <Form.Label className="text-info">รหัสผ่าน</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="รหัสผ่าน"
                        name="password"
                        className={
                            props.error.name === "password"
                                ? props.error.className
                                : ""
                        }
                        onChange={props.inputValue}
                    />
                </Form.Group>

                <Form.Group as={Col} md={6} controlId="formRowConFirmPassword">
                    <Form.Label className="text-info">
                        ยืนยันรหัสผ่าน
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="ยืนยัน รหัสผ่าน"
                        name="conPassword"
                        className={
                            props.error.name === "conPassword"
                                ? props.error.className
                                : ""
                        }
                        onChange={props.inputValue}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formRoweMail">
                    <Form.Label className="text-info">อีเมล</Form.Label>
                    <Form.Control
                        className={
                            props.error.name === "email"
                                ? props.error.className
                                : ""
                        }
                        type="email"
                        placeholder="example@ssru.ac.th.com"
                        name="email"
                        onChange={props.inputValue}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formRowPhone">
                    <Form.Label className="text-info">เบอร์โทรศัพท์</Form.Label>
                    <Form.Control
                        className={
                            props.error.name === "phone"
                                ? props.error.className
                                : ""
                        }
                        type="text"
                        placeholder="เบอร์โทรศัพท์"
                        name="phone"
                        onChange={props.inputValue}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridFaculty">
                    <Form.Label className="text-info">คณะ</Form.Label>
                    <Form.Control
                        className={
                            props.error.name === "faculty"
                                ? props.error.className
                                : ""
                        }
                        as="select"
                        custom
                        name="faculty"
                        onChange={props.inputValue}
                    >
                        <option value="">คณะ</option>
                        {$.map(facs, (fac, indexOrKey) => {
                            const facName = fac.name;
                            const facId = fac.id;
                            return (
                                <option key={indexOrKey} value={facId}>
                                    {facName}
                                </option>
                            );
                        })}
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridMajor">
                    <Form.Label className="text-info">สาขา</Form.Label>
                    <Form.Control
                        className={
                            props.error.name === "major"
                                ? props.error.className
                                : ""
                        }
                        as="select"
                        custom
                        name="major"
                        onChange={props.inputValue}
                        disabled={props.selected}
                    >
                        <option value="">สาขา</option>
                        {$.map(majors, (major, indexOrKey) => {
                            const majorName = major.name;
                            const majorId = major.id;
                            return (
                                <option key={indexOrKey} value={majorId}>
                                    {majorName}
                                </option>
                            );
                        })}
                    </Form.Control>
                </Form.Group>
            </Form.Row>

            <Button variant="primary" onClick={props.handleClick}>
                ยืนยัน
            </Button>
        </Form>
    );
}
