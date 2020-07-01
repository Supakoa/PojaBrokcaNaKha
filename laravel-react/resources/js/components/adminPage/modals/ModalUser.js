import React from "react";
import { Modal, Container, Button } from "react-bootstrap";
import FormUser from "../user/FormUser";

export default function ModalUser(props) {
    const { type } = props;
    //If type is true Modal Add else type is false Modal Edit
    // console.log(props);
    const [_onSubmit, setOnSubmit] = React.useState(false);
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
    return (
        <>
            <Button
                name="modalUser"
                variant={!type ? "warning" : "info"}
                size="sm"
                onClick={() => setModalUser(true)}
            >
                {!type ? "แก้ไขข้อมูล" : "เพิ่มข้อมูล"}
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
                        {!type ? "แก้ไขข้อมูล" : "เพิ่มสมาชิค"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        {!type ? (
                            <FormUser
                                typeForm={type}
                                user="obj"
                                submitOnButton={formOnSubmit}
                            />
                        ) : (
                            <FormUser
                                typeForm={type}
                                submitOnButton={formOnSubmit}
                            />
                        )}
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="success"
                        type="submit"
                        // onClick={() => setOnSubmit(true)}
                        // formAction="userForm"
                    >
                        บันทัก
                    </Button>
                    <Button
                        form="userForm"
                        variant="danger"
                        onClick={() => setModalUser(false)}
                    >
                        ปิด
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
