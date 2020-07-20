import React, { useState, useEffect } from "react";
import { Modal, Container, Button } from "react-bootstrap";
import FormUser from "../user/FormUser";
import { useSelector, useDispatch } from "react-redux";
import { initShowUsers, updateShowUsers, formUser } from "../../../redux/actions";
import Axios from "axios";
import qs from "qs";
import {useTranslation} from 'react-i18next';

export default function ModalUser(props) {
    const {t} = useTranslation('', {useSuspense: false});

    //If isCreatedProp true is Modal Add but when false is Modal Edit
    const { isCreatedProp, id } = props;

    // init state
    // const [_onSubmit, setOnSubmit] = React.useState(false); not use
    const [_modalUser, setModalUser] = React.useState(false);

    // redux
    const redux_formUser = useSelector(state => state.formUser)
    const redux_users = useSelector(state => state.showUsers)
    const dispatch = useDispatch()

    const formOnSubmit = e => {
        // console.log(e.currentTarget.checkValidity());
        console.log("ok");

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        // setValidated(true);
    };

    const returnFromUserComponent = () => {
        return !isCreatedProp ? <FormUser isCreatedProp={isCreatedProp} id={id} submitOnButton={formOnSubmit} /> : <FormUser isCreatedProp={isCreatedProp} submitOnButton={formOnSubmit} />
    }

    const sendDataToDB = () => {

        const data = qs.stringify({
            'email': redux_formUser.email,
            'title': redux_formUser.title,
            'first_name': redux_formUser.firstName,
            'last_name': redux_formUser.lastName,
            'major_id': redux_formUser.majorId,
            'telephone': redux_formUser.phoneNumber,
            'role_id': redux_formUser.roleId,
        })

        Axios.put(`http://localhost:8000/api/users/${id}`, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${localStorage.getItem("_authLocal")}`
            }
        }).then(res => {
            let tempUsers = redux_users.data
            const indexResult = redux_users.data.findIndex(item => {
                return item.id == id
            })

            tempUsers[indexResult] = {
                ...tempUsers[indexResult],
                ...res.data
            }
            dispatch(updateShowUsers(tempUsers))
        })
    }

    return (
        <>
            <Button
                name="modalUser"
                variant={!isCreatedProp ? "warning" : "info"}
                size="sm"
                onClick={() => setModalUser(true)}
            >
                {!isCreatedProp ? t('edit') : t('add')}
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
                        {!isCreatedProp ? t('edit') : t('add')}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Container>
                        { returnFromUserComponent() }
                    </Container>
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        variant="success"
                        type="submit"
                        onClick={e => sendDataToDB(e)}
                    >{t('save')}</Button>

                    <Button
                        form="userForm"
                        variant="danger"
                        onClick={() => setModalUser(false)}
                    >{t('close')}</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
