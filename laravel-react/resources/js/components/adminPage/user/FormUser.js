import { Form, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";

// composent input
import FacultySelect from "../input/FacultySelect";
import MajorSelect from "../input/MajorSelect";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function FormUser({ isCreatedProp, user, onChangeState, formUser, setFormUser }) {
    // external module
    const { t } = useTranslation();

    // lcaol state
    const [selectFacultyId, setselectFacultyId] = useState(0)
    // FIXME: not to use now
    const [isSelectFac, setIsSeclected] = React.useState(true);
    const [facultyId, setFacultyId] = React.useState(0);
    const  [selected, setSelected] = React.useState(0);

    // redux
    const redux_showFaculty = useSelector(state => state.showFaculty)
    const redux_userState = useSelector(state => state.userState)

    // local variable

    // function
    const selecetedRole = (e) =>{
        // setSelected(e.target.value)
        const { value } = e.target
        setFormUser(preState => {
            return {
                ...preState,
                userType: Number(value)
            }
        })
    }

    const selectedFaculty = (e) => {
        const { value } = e.target
        setselectFacultyId(value)
    }

    const selcetedMajor = (e) => {
        const { value } = e.target

        setFormUser(preState => {
            return {
                ...preState,
                majorId: value
            }
        })
    }

    // FIXME: not to use now
    const changePassword = (e) => {
        e.preventDefault()

        const { value } = e.target;

        setFormUser(preState => {
            return {
                ...preState,
                password: value
            }
        })
    }

    const initMajor = () => {
        if (isCreatedProp) {
            if (user.major) {
                setselectFacultyId(user.major.faculty_id)
            }
        }
    }

    // useEffect
    useEffect(() => {
        initMajor()
    }, [])

    // return component
    const whenUpdateUser = (isCreatedProp) => {
        if (!isCreatedProp) {
            return (
                <>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formUserpassword">
                            <Form.Label>รหัสผ่าน</Form.Label>
                            <Form.Control
                                // key={"password"}
                                onChange={onChangeState}
                                type="password"
                                placeholder="Password"
                                name="password"
                                defaultValue={formUser.password}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formUserCpassword">
                            <Form.Label>คอนเฟิร์ม รหัสผ่าน</Form.Label>
                            <Form.Control
                                // key={"confirmPassword"}
                                onChange={onChangeState}
                                disabled={(formUser.password == "")}
                                type="password"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                defaultValue={formUser.confirmPassword}
                            />
                        </Form.Group>
                    </Form.Row>
                </>
            )
        }

        return (<></>)
    }

    const mapFacultyOption = () => {
        if (redux_showFaculty.data) {
            return redux_showFaculty.data.map((item, index) => {
                return (<option key={`faculty-${index + 1}`} value={item.id}>{item.name}</option>)
            })
        }

        return
    }

    const mapMajorOption = () => {
        if (selectFacultyId != 0) {
            const tmp_selectMajor = redux_showFaculty.data.find(item => {
                return item.id == selectFacultyId
            })

            return tmp_selectMajor.majors.map((item, index) => {
                return (<option key={`major-${index + 1}`} value={item.id}>{item.name}</option>)
            })
        } else {
            return
        }
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
                    defaultValue={formUser.email}
                />
            </Form.Group>

            {whenUpdateUser(isCreatedProp)}

            <hr />

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
                        // defaultValue={user.title ? user.title : ""}
                        defaultValue={formUser.title}
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
                        // defaultValue={user.first_name ? user.first_name : ""}
                        defaultValue={formUser.firstName}
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
                        // defaultValue={user.last_name ? user.last_name : ""}
                        defaultValue={formUser.lastName}
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
                        // defaultValue={user.telephone ? user.telephone : ""}
                        defaultValue={formUser.phoneNumber}
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
                        disabled={redux_userState.id == user.id}
                        // value={user.role_id ? user.role_id : selected}
                        defaultValue={formUser.userType}
                    >
                        <option value='0' disabled>เลือกประเภท</option>
                        <option value='1'>แอดดมิน</option>
                        <option value='2'>อาจารย์</option>
                        <option value='3'>นักศึกษา</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>

            <hr hidden={formUser.userType !== 3} />

            <Form.Group
                hidden={formUser.userType !== 3}
                controlId="formUserStudentID"
            >
                <Form.Label>รหัสนักศึกษา</Form.Label>
                <Form.Control
                    // key={"studentId"}
                    onChange={onChangeState}
                    type="text"
                    name="studentId"
                    placeholder="xxxxxxxxxxx"
                    // defaultValue={user.student_id ? user.student_id : ""}
                    defaultValue={(formUser.studentId) ? formUser.studentId : ""}
                />
            </Form.Group>

            <Form.Row hidden={user.role_id !== 3 && isCreatedProp}>
                {/* <FacultySelect
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
                /> */}

                <Form.Group
                    as={Col}
                    controlId="formGroupFacultySelect"
                    hidden={formUser.userType !== 3}
                >
                    <Form.Label>{t("faculty.index")}</Form.Label>

                    <Form.Control
                        as="select"
                        name="facultySelect"
                        // defaultValue={selectFacultyId}
                        value={selectFacultyId}
                        onChange={selectedFaculty}
                        // value={
                        //     selected == 0
                        //         ? defaultData.faculty_id
                        //             ? defaultData.faculty_id
                        //             : selected
                        //         : selected
                        // }
                    >
                        <option key="faculty-0" value={0}>
                            {t("faculty.selectFaculty")}
                        </option>
                        {mapFacultyOption()}
                    </Form.Control>
                </Form.Group>

                <Form.Group
                    as={Col}
                    controlId="formGroupMajorSelect"
                    hidden={formUser.userType !== 3}
                >
                    <Form.Label>{t("major.index")}</Form.Label>

                    <Form.Control
                        as="select"
                        name="major"
                        onChange={selcetedMajor}
                        value={formUser.majorId}
                        // disabled={isSelectFac}
                        // value={
                        //     selected == 0
                        //         ? defaultData.id
                        //             ? defaultData.id
                        //             : selected
                        //         : selected
                        // }
                    >
                        <option key={"major-0"} value={0}>{t("major.selectMajor")}</option>
                        {mapMajorOption()}
                    </Form.Control>
                </Form.Group>

            </Form.Row>
        </Form>
    );
}
