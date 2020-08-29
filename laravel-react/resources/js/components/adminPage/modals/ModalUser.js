import React from "react";
import { Modal, Container, Button } from "react-bootstrap";
import FormUser from "../user/FormUser";
import { useSelector, useDispatch } from "react-redux";
import {
    updateShowUsers,
    updateFormEditUserBySingleData
} from "../../../redux/actions";
import Axios from "axios";
import qs from "qs";
import { useTranslation } from "react-i18next";

export default function ModalUser({ isCreatedProp, id }) {
    const { t } = useTranslation();
    // init state
    const [_modalUser, setModalUser] = React.useState(false);
    const [_userData, setUserData] = React.useState({});

    // redux
    const redux_formUser = useSelector(state => state.formUser);
    const redux_users = useSelector(state => state.showUsers);
    const dispatch = useDispatch();

    const handleChange = e => {
        const { value, name } = e.target;
        dispatch(updateFormEditUserBySingleData(name, value));
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
                title: redux_formUser.title,
                role_id: Number(redux_formUser.role),
                major_id: Number(redux_formUser.majorId),
                student_id: Number(redux_formUser.studentId),
                first_name: redux_formUser.firstName,
                last_name: redux_formUser.lastName,
                email: redux_formUser.email,
                password: redux_formUser.password,
                telephone: redux_formUser.phoneNumber,
                c_password: redux_formUser.confirmPassword
            };

            await Axios.post(`http://localhost:8000/api/register`, data);
        } else {
            const data = qs.stringify({
                email: redux_formUser.email,
                title: redux_formUser.title,
                first_name: redux_formUser.firstName,
                last_name: redux_formUser.lastName,
                major_id: redux_formUser.majorId,
                telephone: redux_formUser.phoneNumber,
                role_id: redux_formUser.roleId
            });

            await Axios.put(`http://localhost:8000/api/users/${id}`, data, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization: `Bearer ${localStorage.getItem(
                        "_authLocal"
                    )}`
                }
            }).then(async res => {
                let tempUsers = redux_users.data;
                const indexResult = redux_users.data.findIndex(item => {
                    return item.id == id;
                });

                tempUsers[indexResult] = {
                    ...tempUsers[indexResult],
                    ...res.data
                };
                dispatch(updateShowUsers(tempUsers));
            });
        }
    };

    React.useEffect(() => {
        if (!!id) {
            findUserById(id);
        }
    }, [id]);

    return (
        <>
            <Button
                name="modalUser"
                variant={!isCreatedProp ? "warning" : "info"}
                size="sm"
                onClick={() => setModalUser(true)}
            >
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
                            isCreatedProp={!!id}
                            user={_userData}
                            onChangeState={handleChange}
                        />
                    </Container>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="success" onClick={sendDataToDB}>
                        {t("save")}
                    </Button>

                    <Button
                        variant="danger"
                        onClick={() => setModalUser(false)}
                    >
                        {t("close")}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
