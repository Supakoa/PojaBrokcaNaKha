import React from "react";
import { Modal, Container, Button } from "react-bootstrap";
import FormUser from "./components/users/FormUser";

export default function ModalUser(props) {
    const { type } = props;
    //If type is true Modal Add else type is false Modal Edit
    // console.log(props);
    const [_modalUser, setModalUser] = React.useState(false);
    return (
        <div>
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
                            <FormUser typeForm={type} user="obj" />
                        ) : (
                            <FormUser typeForm={type} />
                        )}
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success">บันทัก</Button>
                    <Button
                        variant="danger"
                        onClick={() => setModalUser(false)}
                    >
                        ปิด
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
