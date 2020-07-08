import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalReport = () => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="warning" size="sm" onClick={handleShow}>
                ตรวจสอบ
            </Button>
            <Modal
                show={show}
                onHide={() => handleClose}
                aria-labelledby="modal-user"
                size="lg"
                backdrop="static"
                animation
                scrollable
                centered
            >
                <Modal.Header>
                    <Modal.Title>header</Modal.Title>
                </Modal.Header>
                <Modal.Body>body</Modal.Body>
                <Modal.Footer>
                    footer
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/*<Button variant="primary">Understood</Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalReport;
