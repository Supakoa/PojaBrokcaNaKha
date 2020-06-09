import { Form } from "react-bootstrap";
import React from "react";

export default function FormUser(props) {
    const { type } = props;
    // console.log(props);
    const [_error, setError] = React.useState({});

    const [_state, setState] = React.useState({
        id: "",
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        role: "",
        email: "",
        phone: "",
        major: ""
    });

    const _hendleChange = e => {
        const { value, name, maxLength } = e.target;
        console.log(e.target);
        console.log(value);

        if (value.length > 0) {
            setError({
                ..._error,
                [name]: {
                    _isValid: true
                }
            });
        } else {
            setError({
                ..._error,
                [name]: {
                    _isInValid: true
                }
            });
        }
        setState({
            ..._state,
            [name]: value
        });
    };
    const validateInput = () => {};

    React.useEffect(() => {
        const abort = new AbortController();

        return () => {
            abort.abort();
        };
    }, []);

    return (
        <Form>
            <Form.Group controlId="formUserusername">
                <Form.Label>รหัสผู้ใช</Form.Label>
                <Form.Control
                    isValid={_error.username._isValid}
                    isInvalid={_error.username._isInValid}
                    onChange={_hendleChange}
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={!type ? _state.username : ""}
                />
            </Form.Group>
            <Form.Group controlId="formUserpassword">
                <Form.Label>รหัสผ่าน</Form.Label>
                <Form.Control
                    isValid={_error.password._isValid}
                    isInvalid={_error.password._isInValid}
                    onChange={_hendleChange}
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={!type ? _state.password : ""}
                />
            </Form.Group>
            <Form.Group controlId="formUserNameLastname">
                <Form.Label>ชื่อ</Form.Label>
                <Form.Control
                    isValid={_error.firstName._isValid}
                    isInvalid={_error.firstName._isInValid}
                    onChange={_hendleChange}
                    type="text"
                    placeholder="ชื่อ"
                    name="firstName"
                    value={!type ? _state.firstName : ""}
                />
            </Form.Group>
            <Form.Group controlId="formUserLastname">
                <Form.Label>นามสกุล</Form.Label>
                <Form.Control
                    isValid={_error.lastName._isValid}
                    isInvalid={_error.lastName._isInValid}
                    onChange={_hendleChange}
                    type="text"
                    placeholder="นามสกุล"
                    name="lastName"
                    value={!type ? _state.lastName : ""}
                />
            </Form.Group>
            <Form.Group controlId="formUserSelectRole">
                <Form.Label>เลือกประเภท</Form.Label>
                <Form.Control
                    as="select"
                    name="role"
                    isValid={_error.role._isValid}
                    isInvalid={_error.role._isInValid}
                    onChange={_hendleChange}
                >
                    <option value={0}>เลือกประเภท</option>
                    <option value={1}>แอดดมิน</option>
                    <option value={2}>อาจารย์</option>
                    <option value={3}>นักศึกษา</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="formUseremail">
                <Form.Label>อีเมล</Form.Label>
                <Form.Control
                    isValid={_error.email._isValid}
                    isInvalid={_error.email._isInValid}
                    onChange={_hendleChange}
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    value={!type ? _state.email : ""}
                />
            </Form.Group>
            <Form.Group controlId="formUserphone">
                <Form.Label>เบอร์โทร</Form.Label>
                <Form.Control
                    isValid={_error.phone._isValid}
                    isInvalid={_error.phone._isInValid}
                    onChange={_hendleChange}
                    type="text"
                    name="phone"
                    maxLength={11}
                    placeholder="+66 or 08, 09"
                    value={!type ? _state.phone : ""}
                />
            </Form.Group>
            <Form.Group controlId="formUserSelectFac">
                <Form.Label>คณะ</Form.Label>
                <Form.Control
                    as="select"
                    name="faculty"
                    isValid={_error.faculty._isValid}
                    isInvalid={_error.faculty._isInValid}
                    onChange={_hendleChange}
                >
                    <option>คณะ</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="formUserSelectMajor">
                <Form.Label>สาขา</Form.Label>
                <Form.Control
                    as="select"
                    name="major"
                    isValid={_error.major._isValid}
                    isInvalid={_error.major._isInValid}
                    onChange={_hendleChange}
                >
                    <option>สาขา</option>
                </Form.Control>
            </Form.Group>
        </Form>
    );
}
