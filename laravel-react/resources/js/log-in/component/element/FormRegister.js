import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Col, Form, Button, Image, Alert, Spinner } from "react-bootstrap";
import Logo from "./../../../components/images/logo.png";
import { useDispatch } from "react-redux";
import { user, isAuththen } from "../../../redux/actions";
import { redirectPage } from "../../RedirectPage";

export default function FormRegister(props) {
    let history = useHistory();
    const dispatchRegis = useDispatch();
    const [validated, setValidated] = React.useState(false);
    const [_select, setSelect] = React.useState(true);
    const [_majors, setMajors] = React.useState([]);
    const [_faculties, setFaculties] = React.useState([]);
    const [_load, setLoading] = React.useState(true);

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
        token: null
    });

    const [_error, setError] = React.useState({
        notMatch: true,
        name: "",
        className: "border-danger",
        message: ""
    });

    const selectedFac = async value => {
        // const facId = Number(value);
        if (!isNaN(value)) {
            await axios
                .get(`http://127.0.0.1:8000/api/faculties/${value}/majors`)
                .then(res => {
                    setMajors(res.data);
                    // return res.data;
                });
        }
    };

    React.useEffect(() => {
        async function fetchData() {
            await axios
                .get(`http://127.0.0.1:8000/api/faculties`, {})
                .then(res => {
                    const data = res.data.success;
                    setFaculties(data);
                })
                .catch(error => {
                    const result = confirm(error);
                    if (result) {
                        return null;
                    }
                });
        }
        fetchData();
    }, []);

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
            return true;
        } else if (name.lastName === "") {
            erName("lastName");
            return true;
        } else if (name.studentId === "") {
            erName("studentId");
            return true;
        } else if (name.password === "") {
            erName("password");
            return true;
        } else if (name.conPassword === "") {
            erName("conPassword");
            return true;
        } else if (name.email === "") {
            erName("email");
            return true;
        } else if (name.phone === "") {
            erName("phone");
            return true;
        } else if (name.faculty === "") {
            erName("faculty");
            return true;
        } else if (name.major === "") {
            erName("major");
            return true;
        }
        return false;
    };

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
        } else {
            setUser({
                ..._user,
                [name]: value
            });
        }
    };

    const handleOnClick = async event => {
        event.preventDefault();
        const dataUser = _user;
        const _validate = validateInput(dataUser);
        const item = {
            title: "eiei",
            role_id: 3,
            major_id: dataUser.major,
            student_id: dataUser.studentId,
            first_name: dataUser.firstName,
            last_name: dataUser.lastName,
            email: dataUser.email,
            password: dataUser.password,
            telephone: dataUser.phone,
            c_password: dataUser.conPassword
        };
        // console.log(validate);
        setValidated(_validate);
        if (!_validate) {
            // console.log("success isTrue");
            setLoading(false);
            const tokenRegis = await axios
                .post(`http://127.0.0.1:8000/api/register`, item)
                .then(res => {
                    console.log(res);
                    const token = res.data.success.token;
                    // console.log(token);
                    setUser({
                        ..._user,
                        token: token
                    });
                    return token;
                })
                .catch(error => {
                    if (error.response) {
                        // Request made and server responded
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        // The request was made but no response was received
                        console.log(error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log("Error", error.message);
                    }
                    let errors = error.response.data.error;
                    errors.map(data => {
                        console.log(Object.keys(data));
                    });
                    console.log(errors);

                    // const result = confirm(error);
                    //
                    // if (result) {
                    //     setUser({
                    //         ..._user,
                    //         token: null
                    //     });
                    //     setLoading(true);
                    //
                    //     return null;
                    // }
                });

            // const tokenRegis = _user.token;
            if (tokenRegis !== null) {
                await axios
                    .post(`http://localhost:8000/api/user`, tokenRegis, {
                        headers: {
                            Authorization: `Bearer ${tokenRegis}`,
                            "Content-Type": "application/json"
                        }
                    })
                    .then(res => {
                        const role = res.data.success.role_id;
                        const data = res.data.success;
                        // console.log(data);
                        if (role === 3) {
                            const _path = redirectPage(role_id);
                            localStorage.setItem("_authLocal", tokenUser);
                            _history.push(_path);
                            dispatch(isAuththen(true));
                            dispatchRegis(user(data));
                        }
                    })
                    .catch(error => {
                        const result = confirm(error);
                        if (result) {
                            return null;
                        }
                        setLoading(true);
                    });
            }
        } else {
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
                        firstName
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
                        lastName
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
                        required
                        type="text"
                        placeholder="รหัสนักศึกษา"
                        name="studentId"
                        onChange={hadleChanges}
                    />
                    <Form.Control.Feedback type="invalid">
                        {_error.notMatch ? "eiei" : _error.message}
                    </Form.Control.Feedback>
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
                        password
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
                        placeholder="ยืนยัน รหัสผ่าน"
                        name="conPassword"
                        onChange={hadleChanges}
                    />
                    <Form.Control.Feedback type="invalid">
                        conPassword
                    </Form.Control.Feedback>
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
                        email
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="phone">
                    <Form.Label
                        className={validated ? "text-danger" : "text-info"}
                    >
                        เบอร์โทรศัพท์
                    </Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="เบอร์โทรศัพท์"
                        name="phone"
                        onChange={hadleChanges}
                    />
                    <Form.Control.Feedback type="invalid">
                        phone number
                    </Form.Control.Feedback>
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
                        onClick={() => {}}
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
                        faculty
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
                        mojor
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
                {_load ? "ยืนยัน" : <Spinner animation="border" />}
            </Button>
        </Form>
    );
}
