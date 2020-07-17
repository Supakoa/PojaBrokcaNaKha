import React, { useState, useEffect } from "react";
import { Modal, Container, Button } from "react-bootstrap";
import FormUser from "../user/FormUser";
import {useTranslation} from 'react-i18next';
import { useSelector } from "react-redux";
import { formUser } from "../../../redux/actions";

export default function ModalUser(props) {
    const {t} = useTranslation('', {useSuspense: false});

    //If isCreatedProp true is Modal Add but when false is Modal Edit
    const { isCreatedProp, id } = props;

    // init state
    // const [_onSubmit, setOnSubmit] = React.useState(false); not use
    const [_modalUser, setModalUser] = React.useState(false);

    // redux
    const redux_formUser = useSelector(state => state.formUser)

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
        console.log('sendDataToDB(): ', redux_formUser)
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
