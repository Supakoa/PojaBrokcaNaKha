import React from "react";
import LogoRegis from "./LogoReagis";
import { useHistory } from "react-router-dom";
import { Col, Form, Button, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { user, isAuththen } from "../../../redux/actions";
import redirectPage from "../../RedirectPage";
import selectedFac from "./getMajor";
import fetchFaculties from "./getFaculties";
import postToken from "./postToken";
import postUser from "./postUser";
import validateConfirmPassword from "./validatePassword";
import validateId from "./validateStudent-id";
import Swal from "sweetalert2";

export default function FormRegister() {
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
    const [_isValidConPass, _setIsValidConPass] = React.useState(false);

    const [_user, setUser] = React.useState({
        token: null
    });
    const [_error, setError] = React.useState({
        error: {
            message: []
        }
    });
    const [_responError, setResponError] = React.useState({ message: {} });

    React.useEffect(() => {
        const abortController = new AbortController();
        if (_isMount) {
            fetchFaculties(setFaculties, _isMount, {
                signal: abortController.signal
            });
        }
        return () => {
            abortController.abort();
            _setIsMount(false);
        };
    }, [_faculties]);

    const handleChanges = event => {
        const { name, value } = event.target;
    };

    // console.log(_responError);

    const handleOnClick = async event => {};

    return (
        <Form
            noValidate
            validated={validated}
            onSubmit={handleOnClick}
            className="p-4 w-75 m-auto"
        >
            <LogoRegis />
            <Form.Row className="mt-4">
                <Form.Group as={Col} controlId="title" sm={2} md={3} lg={3}>
                    <Form.Label
                        className={validated ? "text-danger" : "text-info"}
                    >
                        คำนำหน้า
                    </Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="คำนำหน้า"
                        name="title"
                        onChange={handleChanges}
                    />
                    <Form.Control.Feedback type="invalid">
                        {_responError.message
                            ? "กรุณากรอก คำนำหน้า"
                            : _responError.message.title[0]}
                    </Form.Control.Feedback>
                </Form.Group>
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
                        onChange={handleChanges}
                    />

                    <Form.Control.Feedback type="invalid">
                        {_responError.message
                            ? "กรุณากรอก ชื่อ"
                            : _responError.message.first_name[0]}
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
                        onChange={handleChanges}
                    />

                    <Form.Control.Feedback type="invalid">
                        {_responError.message
                            ? "กรุณากรอก นามสกุล"
                            : _responError.message.last_name[0]}
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
                        onChange={handleChanges}
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
                                : _responError.message.studebt_id[0]}
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
                        onChange={handleChanges}
                    />
                    <Form.Control.Feedback type="invalid">
                        {_responError.message
                            ? "กรุณากรอก รหัสผ่าน"
                            : _responError.message.password[0]}
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
                        onChange={handleChanges}
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
                                : _responError.message.c_password[0]}
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
                        onChange={handleChanges}
                    />
                    <Form.Control.Feedback type="invalid">
                        {_responError.message
                            ? "กรุณากรอก อีเมล"
                            : _responError.message.email[0]}
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
                        onChange={handleChanges}
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
                                : _responError.message.telephone[0]}
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
                        onChange={handleChanges}
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
                        onChange={handleChanges}
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
                            : _responError.message.major_id[0]}
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>

            <Button variant="primary" onClick={handleOnClick}>
                {_load ? "ยืนยัน" : <Spinner animation="border" />}
            </Button>
        </Form>
    );
}
