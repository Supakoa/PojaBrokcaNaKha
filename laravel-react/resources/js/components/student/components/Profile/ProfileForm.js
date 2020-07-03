import React from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import Swal from "sweetalert2";
import validateIndex from "./validate";
import { ProfileContext } from "../../context";

const ProfileForm = () => {
    const [_profile, setProfile] = React.useState({});

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
        <ProfileContext.Consumer>
            {user => {
                console.log(user);
                return (
                    <Form>
                        <Form.Group as={Row} controlId="formName">
                            <Col sm={12} md={12} lg={12}>
                                <Form.Label>ชื่อ-นามสกุล</Form.Label>
                            </Col>
                            <Col sm={2} md={2} lg={2}>
                                <Form.Control
                                    className="border-right-0 border-left-0 border-top-0 p-1"
                                    maxLength={6}
                                    type="text"
                                    placeholder="คำนำหน้า"
                                    name="title"
                                    onChange={handleChange}
                                    defaultValue={
                                        _profile.title === undefined
                                            ? user.title
                                            : _profile.title
                                    }
                                />
                            </Col>
                            <Col md={4} lg={4}>
                                <Form.Control
                                    className="border-right-0 border-left-0 border-top-0 p-1"
                                    type="text"
                                    placeholder="ชื่อ"
                                    name="first_name"
                                    onChange={handleChange}
                                    defaultValue={
                                        _profile.first_name === undefined
                                            ? user.first_name
                                            : _profile.first_name
                                    }
                                />
                            </Col>
                            <Col md={5} lg={5}>
                                <Form.Control
                                    className="border-right-0 border-left-0 border-top-0 p-1"
                                    type="text"
                                    placeholder="นามสกุล"
                                    name="last_name"
                                    onChange={handleChange}
                                    defaultValue={
                                        _profile.last_name === undefined
                                            ? user.last_name
                                            : _profile.last_name
                                    }
                                />
                            </Col>
                            <Col sm={12} md={12} lg={12}>
                                <Form.Text className="text-muted pl-2">
                                    คำนำหน้า กรุณาใช้เป็น นาย นาง หรือ นางสาว
                                </Form.Text>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col sm={10} md={6} lg={6}>
                                <Form.Label>รหัสนักศึกษา</Form.Label>
                                <Form.Control
                                    className="border-right-0 border-left-0 border-top-0 p-1"
                                    type="text"
                                    name="student_id"
                                    placeholder="59xxxxxxxxx"
                                    onChange={handleChange}
                                    defaultValue={
                                        _profile.student_id === undefined
                                            ? user.student_id
                                            : _profile.student_id
                                    }
                                />
                            </Col>
                            <Col sm={10} md={6} lg={6}>
                                <Form.Label>เบอร์โทรศัพท์</Form.Label>
                                <Form.Control
                                    className="border-right-0 border-left-0 border-top-0 p-1"
                                    type="text"
                                    name="telephone"
                                    placeholder="08 or 09"
                                    onChange={handleChange}
                                    defaultValue={
                                        _profile.telephone === undefined
                                            ? user.telephone
                                            : _profile.telephone
                                    }
                                />
                                <Form.Text className="text-muted pl-2">
                                    กรุณาใส่หมายเลขที่สามารถติดต่อได้ทันที.
                                </Form.Text>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col sm={12} md={12} lg={12}>
                                <Form.Label>อีเมล</Form.Label>
                            </Col>
                            <Col sm={10} md={6} lg={6}>
                                <Form.Control
                                    className="border-right-0 border-left-0 border-top-0 p-1"
                                    type="email"
                                    name="email"
                                    placeholder="s59xxxxxxxx@ssru.ac.th"
                                    onChange={handleChange}
                                    defaultValue={
                                        _profile.email === undefined
                                            ? user.email
                                            : _profile.email
                                    }
                                />
                                <Form.Text className="text-muted pl-2">
                                    กรุณาบันทึกอีเมลของมหาวิยาลัย.
                                </Form.Text>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col md={4} lg={4}>
                                <Form.Group>
                                    <Form.Label>คณะ</Form.Label>
                                    <Form.Control
                                        as="select"
                                        custom
                                        className="border-right-0 border-left-0 border-top-0 "
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={4} lg={4}>
                                <Form.Label>สาขา</Form.Label>
                                <Form.Control
                                    as="select"
                                    custom
                                    className="border-right-0 border-left-0 border-top-0 "
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        <Col className="text-center">
                            {_loading ? (
                                <Spinner animation="grow" />
                            ) : (
                                <Button
                                    variant={
                                        _state ? "outline-warning" : "warning"
                                    }
                                    onClick={handleSubmit}
                                >
                                    {_state ? "อัพเดต" : "บันทึก"}
                                </Button>
                            )}
                        </Col>
                    </Form>
                );
            }}
        </ProfileContext.Consumer>
    );
};

export default ProfileForm;
