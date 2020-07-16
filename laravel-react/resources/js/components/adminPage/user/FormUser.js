import { Form, Col } from "react-bootstrap";
import React, { useState } from "react";
import Axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { initUserForm, updateFormEditUserBySingleData } from "../../../redux/actions";

// composent input
import FacultySelect from "../input/FacultySelect";
import MajorSelect from "../input/MajorSelect";

export default function FormUser(props) {
    // props
    const { isCreatedProp, submitOnButton, id } = props;

    // create state
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

    // redux
    const redux_user = useSelector(state => state.formUser)
    const dispatch = useDispatch()

    const apiPath = `http://localhost:8000/api`
    const userFormTemplate = {
        email: "",
        title: "",
        first_name: "",
        last_name: "",
        telephone: "",
        major_id: 0,
        role_id: 0
    }

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

    // const finallyOnSubmit = formData => {
    //     console.log(formData);
    // };

    const initUser = async ( id ) => {
        await Axios.get(`${apiPath}/users/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("_authLocal")}`
            }
        }).then(res => {
            dispatch(initUserForm(res.data))
        })
    }

    React.useEffect(() => {
        // if (submitOnButton) {
        //     console.log("yeah! you Click me");
        //     const formData = {};
        //     finallyOnSubmit();
        // }
        const abort = new AbortController();

        // init when component is create
        if (isCreatedProp) {
            dispatch(initUserForm(userFormTemplate))
        } else {
            initUser(id)
        }

        return () => {
            abort.abort();
        };
    }, []);

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
                    // onChange={_hendleChange}
                    onChange={e => dispatch(updateFormEditUserBySingleData(`email`, e.target.value))}
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    disabled={!isCreatedProp}
                    // defaultValue={!isCreatedProp ? _state.email : ""}
                    defaultValue={redux_user.email}
                />
            </Form.Group>

            {/* <Form.Row>
                <Form.Group as={Col} controlId="formUserpassword">
                    <Form.Label>รหัสผ่าน</Form.Label>
                    <Form.Control
                        onChange={_hendleChange}
                        type="password"
                        placeholder="Password"
                        name="password"
                        defaultValue={!isCreatedProp ? _state.password : ""}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formUserCpassword">
                    <Form.Label>คอนเฟิร์ม รหัสผ่าน</Form.Label>
                    <Form.Control
                        onChange={_hendleChange}
                        type="password"
                        placeholder="Confirm Password"
                        name="c_password"
                        defaultValue={!isCreatedProp ? _state.c_password : ""}
                    />
                </Form.Group>
            </Form.Row> */}

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
                        // onChange={_hendleChange}
                        onChange={e => dispatch(updateFormEditUserBySingleData(`titile`, e.target.value))}
                        type="text"
                        placeholder="คำนำหน้า"
                        name="title"
                        // defaultValue={!isCreatedProp ? _state.title : ""}
                        defaultValue={redux_user.title}
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
                        // onChange={_hendleChange}
                        onChange={e => dispatch(updateFormEditUserBySingleData(`firstName`, e.target.value))}
                        type="text"
                        placeholder="ชื่อ"
                        name="firstName"
                        // defaultValue={!isCreatedProp ? _state.firstName : ""}
                        defaultValue={redux_user.firstName}
                    />
                </Form.Group>

                <Form.Group controlId="formUserLastname" as={Col} sm={5} md={5} lg={5} >
                    <Form.Label>นามสกุล</Form.Label>
                    <Form.Control
                        // onChange={_hendleChange}
                        onChange={e => dispatch(updateFormEditUserBySingleData(`lastName`, e.target.value))}
                        type="text"
                        placeholder="นามสกุล"
                        name="lastName"
                        // defaultValue={!isCreatedProp ? _state.lastName : ""}
                        defaultValue={redux_user.lastName}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} md={8} lg={8} controlId="formUserphone">
                    <Form.Label>เบอร์โทร</Form.Label>

                    <Form.Control
                        // onChange={_hendleChange}
                        onChange={e => dispatch(updateFormEditUserBySingleData(`phoneNumber`, e.target.value))}
                        type="text"
                        name="phone"
                        maxLength={11}
                        placeholder="+66 or 08, 09"
                        // defaultValue={!isCreatedProp ? _state.phone : ""}
                        defaultValue={redux_user.phoneNumber}
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
                        // onChange={_hendleChange}
                        onChange={e => dispatch(updateFormEditUserBySingleData(`role`, e.target.value))}
                        value={redux_user.role}
                    >
                        <option value={0}>เลือกประเภท</option>
                        <option value={1}>แอดดมิน</option>
                        <option value={2}>อาจารย์</option>
                        <option value={3}>นักศึกษา</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                {/* <Form.Group as={Col} controlId="formUserSelectFac">
                    <Form.Label>คณะ</Form.Label>

                    <Form.Control
                        as="select"
                        name="faculty"
                        onChange={_hendleChange}
                    >
                        <option value={0}>เลือกคณะ</option>
                    </Form.Control>
                </Form.Group> */}

                <FacultySelect />

                {/* <Form.Group as={Col} controlId="formUserSelectMajor" >
                    <Form.Label>สาขา</Form.Label>

                    <Form.Control
                        as="select"
                        name="major"
                        onChange={_hendleChange}
                        disabled={redux_selectFaculty.id != 0}
                    >
                        <option>เลือกสาขา</option>
                    </Form.Control>
                </Form.Group> */}

                <MajorSelect />
            </Form.Row>
        </Form>
    );
}
