import React, { useState, useEffect } from "react";
import { Modal, Container, Button } from "react-bootstrap";
import FormUser from "../user/FormUser";

export default function ModalUser(props) {

    //If isCreatedProp true is Modal Add but when false is Modal Edit
    const { isCreatedProp, id } = props;

    // init state
    // const [_onSubmit, setOnSubmit] = React.useState(false); not use
    const [_modalUser, setModalUser] = React.useState(false);

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

    const sendDataToDB = ( e ) => {
        console.log('sendDataToDB()')
    }

    return (
        <>
            <Button
                name="modalUser"
                variant={!isCreatedProp ? "warning" : "info"}
                size="sm"
                onClick={() => setModalUser(true)}
            >
                {!isCreatedProp ? "แก้ไขข้อมูล" : "เพิ่มข้อมูล"}
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
                        {!isCreatedProp ? "แก้ไขข้อมูล" : "เพิ่มสมาชิค"}
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
                    >บันทัก</Button>

                    <Button
                        form="userForm"
                        variant="danger"
                        onClick={() => setModalUser(false)}
                    >ปิด</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
