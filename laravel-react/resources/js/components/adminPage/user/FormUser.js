import { Form, Col } from "react-bootstrap";
import React from "react";

export default function FormUser(props) {
    const { type, submitOnButton } = props;
    console.log(props);
    // const [_error, setError] = React.useState();
    const [validated, setValidated] = React.useState(false);
    const [_state, setState] = React.useState({
        id: "",
        password: "",
        c_password: "",
        firstName: "",
        lastName: "",
        title: "",
        role: "",
        email: "",
        phone: "",
        major: ""
    });

    const _hendleChange = e => {
        const { value, name, maxLength } = e.target;
        // console.log(e.target);
        // console.log(value);

        setState({
            ..._state,
            [name]: value
        });
    };
    // const validateInput = () => {};

    React.useEffect(() => {
        // if (submitOnButton) {
        //     console.log("yeah! you Click me");
        //     const formData = {};
        //     finallyOnSubmit();
        // }
        const abort = new AbortController();

        return () => {
            abort.abort();
        };
    }, []);

    const finallyOnSubmit = formData => {
        console.log(formData);
    };
    return (
        <Form
            name="userForm"
            noValidate
            validated={validated}
            onSubmit={submitOnButton}
        >
            <Form.Group controlId="formUseremail">
                <Form.Label>อีเมล</Form.Label>
                <Form.Control
                    onChange={_hendleChange}
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    defaultValue={!type ? _state.email : ""}
                />
            </Form.Group>
            <Form.Row>
                <Form.Group as={Col} controlId="formUserpassword">
                    <Form.Label>รหัสผ่าน</Form.Label>
                    <Form.Control
                        onChange={_hendleChange}
                        type="password"
                        placeholder="Password"
                        name="password"
                        defaultValue={!type ? _state.password : ""}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="formUserCpassword">
                    <Form.Label>คอนเฟิร์ม รหัสผ่าน</Form.Label>
                    <Form.Control
                        onChange={_hendleChange}
                        type="password"
                        placeholder="Confirm Password"
                        name="c_password"
                        defaultValue={!type ? _state.c_password : ""}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group
                    controlId="formUserNameLastname"
                    as={Col}
                    sm={2}
                    md={2}
                    lg={2}
                >
                    <Form.Label>คำนำหน้า</Form.Label>
                    <Form.Control
                        onChange={_hendleChange}
                        type="text"
                        placeholder="คำนำหน้า"
                        name="title"
                        defaultValue={!type ? _state.title : ""}
                    />
                </Form.Group>
                <Form.Group
                    controlId="formUserNameLastname"
                    as={Col}
                    sm={5}
                    md={5}
                    lg={5}
                >
                    <Form.Label>ชื่อ</Form.Label>
                    <Form.Control
                        onChange={_hendleChange}
                        type="text"
                        placeholder="ชื่อ"
                        name="firstName"
                        defaultValue={!type ? _state.firstName : ""}
                    />
                </Form.Group>
                <Form.Group
                    controlId="formUserLastname"
                    as={Col}
                    sm={5}
                    md={5}
                    lg={5}
                >
                    <Form.Label>นามสกุล</Form.Label>
                    <Form.Control
                        onChange={_hendleChange}
                        type="text"
                        placeholder="นามสกุล"
                        name="lastName"
                        defaultValue={!type ? _state.lastName : ""}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} md={8} lg={8} controlId="formUserphone">
                    <Form.Label>เบอร์โทร</Form.Label>
                    <Form.Control
                        onChange={_hendleChange}
                        type="text"
                        name="phone"
                        maxLength={11}
                        placeholder="+66 or 08, 09"
                        defaultValue={!type ? _state.phone : ""}
                    />
                </Form.Group>
                <Form.Group
                    as={Col}
                    md={4}
                    lg={4}
                    controlId="formUserSelectRole"
                >
                    <Form.Label>เลือกประเภท</Form.Label>
                    <Form.Control
                        as="select"
                        name="role"
                        onChange={_hendleChange}
                    >
                        <option value={0}>เลือกประเภท</option>
                        <option value={1}>แอดดมิน</option>
                        <option value={2}>อาจารย์</option>
                        <option value={3}>นักศึกษา</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formUserSelectFac">
                    <Form.Label>คณะ</Form.Label>
                    <Form.Control
                        as="select"
                        name="faculty"
                        onChange={_hendleChange}
                    >
                        <option>คณะ</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formUserSelectMajor">
                    <Form.Label>สาขา</Form.Label>
                    <Form.Control
                        as="select"
                        name="major"
                        onChange={_hendleChange}
                    >
                        <option>สาขา</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
        </Form>
    );
}
