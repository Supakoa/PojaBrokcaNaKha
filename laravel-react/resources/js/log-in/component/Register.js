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
                id: 0,
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
                major: ""
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
            const facId = Number(value);
            if (value !== 0) {
                this.setState({
                    select: {
                        ...this.state.select,
                        id: facId,
                        disable: false
                    },
                    user: {
                        ...this.state.user,
                        [name]: facId
                    }
                });
            } else {
                this.setState({
                    select: {
                        ...this.state.select,
                        id: 0,
                        disable: true
                    },
                    user: {
                        ...this.state.user,
                        [name]: facId
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
        const facId = this.state.select.id;
        const id = Number(facId);
        await axios.get(`http://127.0.0.1:8000/api/faculties`).then(res => {
            this.setState({
                ...this.state,
                faculties: res.data.success
            });
        });

        if (id !== 0) {
            console.log(id);

            await axios
                .get(`http://127.0.0.1:8000/api/faculties/${id}/majors`)
                .then(res => {
                    console.log(res.data);

                    this.setState({
                        ...this.state,
                        moajors: res.data.success
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
            return false;
        };
        if (name.firstName == "") {
            erName("firstName");
        } else if (name.lastName === "") {
            erName("lastName");
        } else if (name.studentId === "") {
            erName("studentId");
        } else if (name.password === "") {
            erName("password");
        } else if (name.conPassword === "") {
            erName("conPassword");
        } else if (name.email === "") {
            erName("email");
        } else if (name.phone === "") {
            erName("phone");
        } else if (name.faculty === "") {
            erName("faculty");
        } else if (name.major === "") {
            erName("major");
        } else {
            erName("");
        }
    }

    handleOnClick(event) {
        event.preventDefault();
        const user = this.state.user;
        this.validateInput(user);
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
                            major={this.state.majors}
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
    const majors = props.major;
    const facs = props.faculties;

    console.log(majors);
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
                        <option>สาขา</option>
                        {$.map(majors, (major, indexOrKey) => {
                            const majorName = major.name;
                            return (
                                <option key={indexOrKey} value={majorName}>
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
