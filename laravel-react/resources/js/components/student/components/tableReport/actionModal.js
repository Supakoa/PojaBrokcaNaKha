import React from "react";
import { Modal, Button } from "react-bootstrap";

const actionModal = (show, setShow, item) => {
    return (
        <>
            <Button
                key={item.id}
                variant="primary"
                size="sm"
                onClick={() => setShow(true)}
            >
                action
            </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{item.form_id}</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default actionModal;
