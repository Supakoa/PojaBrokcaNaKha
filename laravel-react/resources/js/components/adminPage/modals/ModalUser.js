import React, { useEffect, useState } from "react";
import { Modal, Container, Button } from "react-bootstrap";
import FormUser from "../user/FormUser";
import { useSelector, useDispatch } from "react-redux";
import {
    updateShowUsers,
    updateFormEditUserBySingleData,
    showUserAction
} from "../../../redux/actions";
import Axios from "axios";
import qs from "qs";
import { useTranslation } from "react-i18next";
import {_URL} from "../../middleware/URL";
import Swal from "sweetalert2";

export default function ModalUser({ isCreatedProp, id, res }) {

    // external module
    const { t } = useTranslation();

    // local state
    const [_modalUser, setModalUser] = React.useState(false);
    const [_userData, setUserData] = React.useState({});
    const [formUser, setFormUser] = useState(null)
    // FIXME: not to use
    const [select_facultyId, setSelect_facultyId] = useState(0)
    const [select_majorId, setSelect_majorId] = useState(0)

    // redux
    const redux_formUser = useSelector(state => state.formUser);
    const redux_users = useSelector(state => state.showUsers);
    const dispatch = useDispatch();

    // local variable
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    // function
    const handleChange = e => {
        e.preventDefault()

        const { value, name } = e.target;

        setFormUser(preState => {
            return {
                ...preState,
                [name]: value
            }
        })

        // dispatch(updateFormEditUserBySingleData(name, value));
    };

    const findUserById = id => {
        const _data = redux_users.data.find(item => {
            return item.id === Number(id);
        });
        if (!!_data) {
            setUserData(_data);
        }
    };

    const sendDataToDB = async () => {
        if (isCreatedProp) {
            const data = {
                title: formUser.title,
                role_id: Number(formUser.userType),
                major_id: Number(formUser.majorId),
                student_id: Number(formUser.studentId),
                first_name: formUser.firstName,
                last_name: formUser.lastName,
                email: formUser.email,
                password: formUser.password,
                telephone: formUser.phoneNumber,
                c_password: formUser.confirmPassword
            };

            Axios.post(`${_URL}/api/register`, data).then(res => {
                if (res.status == 200) {
                    let tmp_showUsers = redux_users.data
                    tmp_showUsers.push(res.data.success.user)
                    dispatch(showUserAction("INIT_SHOW_USERS", tmp_showUsers))

                    Toast.fire({
                        icon: 'success',
                        title: 'เพิ่มข้อมูลสำเร็จ'
                      })
                } else {
                    Toast.fire({
                        icon: 'error',
                        title: 'เกิดข้อผิดพลาดในการเพิ่มข้อมูล'
                    })
                }
            }).catch(err => {
                if (err.response) {
                    if (err.response.status == 401) {
                        Toast.fire({
                            icon: 'error',
                            title: 'มีข้อมูลผู้ใช้งานแล้ว'
                        })
                    }
                }
            })
        } else {
            const data = qs.stringify({
                email: formUser.email,
                title: formUser.title,
                first_name: formUser.firstName,
                last_name: formUser.lastName,
                major_id: formUser.majorId,
                telephone: formUser.phoneNumber,
                role_id: Number(formUser.userType),
                student_id: Number(formUser.studentId)
            });

            Axios.put(`${_URL}/api/users/${id}`, data, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization: `Bearer ${localStorage.getItem(
                        "_authLocal"
                    )}`
                }
            }).then(async res => {
                console.log('res', res)
                let tempUsers = redux_users.data;
                const indexResult = redux_users.data.findIndex(item => {
                    return item.id == id;
                });

                tempUsers[indexResult] = {
                    ...tempUsers[indexResult],
                    ...res.data
                };
                dispatch(showUserAction("INIT_SHOW_USERS", tempUsers));
                // showUserAction("INIT_SHOW_USERS", tmp_showUsers)
                // window.location.reload(false);
            });
        }

        setModalUser(false)
    };

    const initFormUsers = () => {
        if (isCreatedProp) {
            setFormUser({
                email: "",
                password: "",
                confirmPassword: "",
                studentId: "",
                title: "",
                firstName: "",
                lastName: "",
                phoneNumber: "",
                userType: 0,
                majorId: 0
            })
        } else {
            setFormUser({
                email: res.email,
                studentId: res.student_id,
                title: res.title,
                firstName: res.first_name,
                lastName: res.last_name,
                phoneNumber: res.telephone,
                userType: res.role_id,
                majorId: res.major_id
            })
        }
    }

    const eventOpenOnSave = () => {
        if (formUser) {
            if (isCreatedProp) {
                let tmp_result = ( formUser.email == "" || formUser.password == "" || formUser.confirmPassword == ""
                                                        || formUser.studentId == "" || formUser.title == "" || formUser.firstName == ""
                                                        || formUser.lastName == "" || formUser.phoneNumber == "" || formUser.userType == 0
                                                        || formUser.majorId == 0)
                return tmp_result
            } else {
                return false
            }
        }
    }

    // useEffect
    useEffect(() => {
        initFormUsers()
    }, [])

    // FIXME: not to use now
    React.useEffect(() => {
        if (!!id) {
            findUserById(id);
        }
    }, [id]);

    // return component

    return (
        <>
            <Button
                className="mx-2"
                name="modalUser"
                variant={!isCreatedProp ? "warning" : "info"}
                size="sm"
                onClick={() => setModalUser(true)}
            >
                <i className="fas fa-user-plus"></i>{" "}
                {!isCreatedProp ? t("edit") : t("add")}
            </Button>

            <Modal
                show={_modalUser}
                onHide={() => setModalUser(false)}
                aria-labelledby="modal-user"
                size="lg"
                backdrop="static"
                animation
                scrollable
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="modal-user">
                        {!isCreatedProp ? t("edit") : t("add")}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Container>
                        <FormUser
                            isCreatedProp={!isCreatedProp}
                            user={_userData}
                            onChangeState={handleChange}
                            formUser={formUser}
                            setFormUser={setFormUser}
                        />
                    </Container>
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => setModalUser(false)}
                    >
                        {t("close")}
                    </Button>

                    <Button
                        variant="primary"
                        onClick={sendDataToDB}
                        disabled={eventOpenOnSave()}
                    >
                        {t("save")}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
