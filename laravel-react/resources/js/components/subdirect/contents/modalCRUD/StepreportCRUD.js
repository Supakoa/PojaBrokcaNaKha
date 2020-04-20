import React from 'react';
import {Button, Container, Modal} from 'react-bootstrap';


export function StepAdd(props){
    return(
        <Modal
           show={props.show}
           onHide={props.onHide}
           aria-labelledby="modal-add-step"
           size="sm"
           backdrop='static'
           animation
           centered
        >

        </Modal>
    );
}

export function StepEdit(props){
    return(
        <Modal
            show={props.show}
            onHide={props.onHide}
            aria-labelledby="modal-edit-step"
            size="md"
            backdrop='static'
            animation
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>

                </Modal.Title>
            </Modal.Header>

        </Modal>
    );
}

export function StepDelete(props){
    return(
        <Modal
            show={props.show}
            onHide={props.onHide}
            aria-labelledby="modal-delete-step"
            size="sm"
            backdrop='static'
            animation
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    ลบข้อมูล
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container className="text-center">
                    <p>
                        ยืนยันที่จะลบข้อมูลหรือไหม ?
                    </p>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" >ยืนยัน</Button>
                <Button variant="light" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
