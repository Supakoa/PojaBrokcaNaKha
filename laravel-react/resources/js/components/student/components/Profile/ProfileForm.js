import React from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import Swal from "sweetalert2";
import { validateIndex } from "./validate";

const ProfileForm = () => {
    const [_profile, setProfile] = React.useState({
        title: "",
        name_f: "",
        name_l: "",
        student_id: "",
        phone: "",
        email: ""
    });

    const [_state, setState] = React.useState(false);
    const [_loading, setLoading] = React.useState(false);

    const handleChange = e => {
        const { name, value } = e.target;

        const _validate = validateIndex(name, value);

        console.log(_validate);

        if (value) {
            setState(true);
        }
        setProfile({
            ..._profile,
            [name]: value
        });
    };

    const handleSubmit = () => {
        if (_state) {
            setLoading(true);
            setState(false);

            setTimeout(() => {
                setLoading(false);
            }, 2000);
        } else {
            Swal.fire("ข้อมูลไม่มีการเปลี่ยนแปลง. !");
        }
    };

    return (
        <Form>
            <Form.Group as={Row} controlId="formName">
                <Form.Label column sm={2} md={3} lg={4}>
                    ชื่อ - นามสกุล
                </Form.Label>
                <Col sm={1} md={1} lg={1}>
                    <Form.Control
                        type="text"
                        placeholder="คำนำหน้า"
                        name="title"
                        onChange={handleChange}
                        defaultValue={_profile.title}
                    />
                </Col>
                <Col sm={4} md={4} lg={3}>
                    <Form.Control
                        type="text"
                        placeholder="ชื่อ"
                        name="name_f"
                        onChange={handleChange}
                        defaultValue={_profile.name_f}
                    />
                </Col>
                <Col sm={5} md={5} lg={4}>
                    <Form.Control
                        type="text"
                        placeholder="นามสกุล"
                        name="name_l"
                        onChange={handleChange}
                        defaultValue={_profile.name_l}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2} lg={4}>
                    รหัสนักศึกษา
                </Form.Label>
                <Col sm={10} md={8} lg={8}>
                    <Form.Control
                        type="text"
                        name="student_id"
                        placeholder="รหัสนักศึกษา"
                        onChange={handleChange}
                        defaultValue={_profile.student_id}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2} lg={4}>
                    เบอร์โทรศัพท์
                </Form.Label>
                <Col sm={10} md={8} lg={8}>
                    <Form.Control
                        type="text"
                        name="phone"
                        placeholder="เบอร์โทรศัพท์"
                        onChange={handleChange}
                        defaultValue={_profile.phone}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2} lg={4}>
                    Email
                </Form.Label>
                <Col sm={10} md={8} lg={8}>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        defaultValue={_profile.email}
                    />
                </Col>
            </Form.Group>

            <Col className="text-center">
                {_loading ? (
                    <Spinner animation="grow" />
                ) : (
                    <Button
                        variant={_state ? "outline-warning" : "warning"}
                        onClick={handleSubmit}
                    >
                        {_state ? "อัพเดต" : "บันทึก"}
                    </Button>
                )}
            </Col>
        </Form>
    );
};

export default ProfileForm;
