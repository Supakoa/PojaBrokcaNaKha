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

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: "",
            select: {
                disable: true
            },
            majors: [],
            faculties: [],
            user: {
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
            },
            error: {
                notMatch: true,
                name: "",
                className: "border-danger",
                message: ""
            }
        };
        this.handleOnClick = this.handleOnClick.bind(this);
        this.hadleChanges = this.hadleChanges.bind(this);
        this.validateInput = this.validateInput.bind(this);
        this.validateConfirm = this.validateConfirm.bind(this);
        this.selectedFac = this.selectedFac.bind(this);
    }

    hadleChanges(event) {
        const user = this.state.user;
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
                this.validateConfirm(false, name, message);
            } else {
                if (name === "studentId" && value.length !== 11) {
                    message = "รหัสนักศึกษาต้อง 11 หลัก";
                    this.validateConfirm(false, name, message);
                } else if (name === "phone" && value.length !== 10) {
                    message = "เบอร์โทรศัพท์ต้อง 10 หลัก";
                    this.validateConfirm(false, name, message);
                } else {
                    this.setState({
                        user: {
                            ...this.state.user,
                            [name]: value
                        }
                    });
                    this.validateConfirm(true, "", "");
                }
            }
        } else if (name === "conPassword") {
            if (user.password == value) {
                this.validateConfirm(true, "", "");
                this.setState({
                    user: {
                        ...this.state.user,
                        [name]: value
                    }
                });
            } else if (user.password !== value) {
                if (value !== "") {
                    const message = "กรุณาตรวจสอบพาสเวิร์ดอีกครั้ง";
                    this.validateConfirm(false, "conPassword", message);
                } else {
                    this.validateInput("conPassword");
                }
            }
        } else if (name === "faculty") {
            if (value !== "") {
                this.setState({
                    select: {
                        ...this.state.select,
                        disable: false
                    },
                    user: {
                        ...this.state.user,
                        [name]: value
                    }
                });
                this.selectedFac(value === "" ? 0 : value);
            } else {
                this.setState({
                    select: {
                        ...this.state.select,
                        disable: true
                    },
                    user: {
                        ...this.state.user,
                        [name]: value
                    }
                });
            }
        } else if (name === "major") {
            if (value !== "") {
                this.setState({
                    user: {
                        ...this.state.user,
                        [name]: value
                    }
                });
            } else {
                this.setState({
                    user: {
                        ...this.state.user,
                        [name]: value
                    }
                });
            }
        } else {
            this.setState({
                user: {
                    ...this.state.user,
                    [name]: value
                }
            });
        }
    }

    async componentDidMount() {
        await axios
            .get(`http://127.0.0.1:8000/api/faculties`)
            .then(res => {
                this.setState({
                    ...this.state,
                    faculties: res.data.success
                });
            })
            .catch(error => {
                const result = confirm(error);
                if (result) {
                    window.location = "/register";
                }
            });
    }

    selectedFac(value) {
        const facId = Number(value);

        if (facId !== 0) {
            axios
                .get(`http://127.0.0.1:8000/api/faculties/${facId}/majors`)
                .then(res => {
                    this.setState({
                        ...this.state,
                        majors: res.data
                    });
                });
        }
    }

    validateConfirm(value, targetName, targetMessage) {
        const user = this.state.user;
        this.setState({
            error: {
                ...this.state.error,
                name: targetName,
                notMatch: value,
                message: targetMessage
            }
        });
    }

    validateInput(name) {
        const erName = name => {
            this.setState({
                error: {
                    ...this.state.error,
                    name: name
                }
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
    }

    async handleOnClick(event) {
        event.preventDefault();
        const user = this.state.user;
        const validate = this.validateInput(user);
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
            const register = await axios
                .post(`http://127.0.0.1:8000/api/register`, data)
                .then(res => {
                    const token = res.data.success.token;
                    this.setState({
                        user: {
                            ...this.state.user,
                            token: token
                        }
                    });
                })
                .catch(error => {
                    const result = confirm(error);
                    if (result) {
                        window.location = "/register";
                    }
                });
        }

        const tokenRegis = this.state.user.token;
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
                    switch (role) {
                        case 1:
                            window.location = "/admin";
                            break;
                        case 2:
                            window.location = "/staff";
                            break;
                        case 3:
                            window.location = "/student";
                            break;
                        default:
                            window.location = "/login";
                    }
                })
                .catch(error => {
                    const result = confirm("ลองอีกครั้ง.");
                    if (result) {
                        window.location = "/login";
                    }
                });
        }
    }
    render() {
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
                            selected={this.state.select.disable}
                            error={this.state.error}
                            majors={this.state.majors}
                            faculties={this.state.faculties}
                            inputValue={this.hadleChanges}
                            handleClick={this.handleOnClick}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
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
