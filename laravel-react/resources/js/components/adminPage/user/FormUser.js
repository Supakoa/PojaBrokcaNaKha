import { Form, Col } from "react-bootstrap";
import React from "react";

// composent input
import FacultySelect from "../input/FacultySelect";
import MajorSelect from "../input/MajorSelect";

export default function FormUser({ isCreatedProp, user, onChangeState }) {
    const [isSelectFac, setIsSeclected] = React.useState(true);
    const [facultyId, setFacultyId] = React.useState(0);
    const  [selected, setSelected] = React.useState(0);
    console.log(user.role_id)
    const selecetedRole = (e) =>{
        setSelected(e.target.value)
    }

    return (
        <Form name="userForm">
            <Form.Group controlId="formUseremail">
                <Form.Label>อีเมล</Form.Label>
                <Form.Control
                    onChange={onChangeState}
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    disabled={isCreatedProp}
                    defaultValue={user.email}
                />
            </Form.Group>

            <Form.Row hidden={isCreatedProp}>
                <Form.Group as={Col} controlId="formUserpassword">
                    <Form.Label>รหัสผ่าน</Form.Label>
                    <Form.Control
                        onChange={onChangeState}
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formUserCpassword">
                    <Form.Label>คอนเฟิร์ม รหัสผ่าน</Form.Label>
                    <Form.Control
                        onChange={onChangeState}
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                    />
                </Form.Group>
            </Form.Row>

            <Form.Group
                hidden={user.role_id !== 3 && isCreatedProp}
                controlId="formUserStudentID"
            >
                <Form.Label>รหัสนักศึกษา</Form.Label>
                <Form.Control
                    onChange={onChangeState}
                    type="text"
                    name="studentId"
                    placeholder="xxxxxxxxxxx"
                    defaultValue={user.student_id ? user.student_id : ""}
                />
            </Form.Group>

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
                        onChange={onChangeState}
                        type="text"
                        placeholder="คำนำหน้า"
                        name="title"
                        defaultValue={user.title ? user.title : ""}
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
                        onChange={onChangeState}
                        type="text"
                        placeholder="ชื่อ"
                        name="firstName"
                        defaultValue={user.first_name ? user.first_name : ""}
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
                        onChange={onChangeState}
                        type="text"
                        placeholder="นามสกุล"
                        name="lastName"
                        defaultValue={user.last_name ? user.last_name : ""}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} md={8} lg={8} controlId="formUserphone">
                    <Form.Label>เบอร์โทร</Form.Label>

                    <Form.Control
                        onChange={onChangeState}
                        type="text"
                        name="phoneNumber"
                        maxLength={11}
                        placeholder="+66 or 08, 09"
                        defaultValue={user.telephone ? user.telephone : ""}
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
                        name="role_id"
                        onChange={selecetedRole}
                        value={user.role_id ? user.role_id : selected}
                    >
                        <option value='0'>เลือกประเภท</option>
                        <option value='1'>แอดดมิน</option>
                        <option value='2'>อาจารย์</option>
                        <option value='3'>นักศึกษา</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Row hidden={user.role_id !== 3 && isCreatedProp}>
                <FacultySelect
                    defaultData={user.major ? user.major : ""}
                    onSelectOption={onChangeState}
                    isSelect={setIsSeclected}
                    setIdFac={setFacultyId}
                />
                <MajorSelect
                    defaultData={user.major ? user.major : ""}
                    onSelectOption={onChangeState}
                    isSelectFac={isSelectFac}
                    facultyId={facultyId}
                />
            </Form.Row>
        </Form>
    );
}
