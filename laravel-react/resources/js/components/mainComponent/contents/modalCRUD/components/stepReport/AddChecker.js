import React from "react";
import { Button, Modal, Breadcrumb } from "react-bootstrap";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

export const AddChecker = props => {
    const [show, setShow] = React.useState(false);
    return (
        <>
            <Button
                size="sm"
                variant="info"
                className="mt-2"
                onClick={() => setShow(true)}
            >
                <AddCircleOutlineIcon />
            </Button>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="modal-addChecker"
                size="sm"
                backdrop="static"
                animation
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>รายชื่อคนตรวจ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Library</Breadcrumb.Item>
                        <Breadcrumb.Item>Data</Breadcrumb.Item>
                    </Breadcrumb>
                </Modal.Body>
                <Modal.Footer className="d-block">
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant="info">บันทึก</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
