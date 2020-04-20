import React, {useState} from 'react';
import {Button, Container, Modal, Form, Image} from "react-bootstrap";

export function Newsadd(props){

    return(
        <Modal
         show={props.show}
         onHide={props.onHide}
         aria-labelledby="modal-add-news"
         size="md"
         backdrop='static'
         animation
         centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    เพิ่มข่าวใหม่
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div className="mb-3">
                        <Form.File id="formcheck-api-custom" custom>
                            <Form.File.Input />
                            <Form.File.Label data-browse="เลือกรูป">
                                อัพรูปข่าว
                            </Form.File.Label>
                            <Form.Control.Feedback type="valid">คุณอัพแล้ว</Form.Control.Feedback>
                        </Form.File>
                    </div>
                    <Form.Group controlId="formNewsURL">
                        <Form.Label>URL รูปข่าว</Form.Label>
                        <Form.Control type="text" placeholder="www.google.com" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" >save</Button>
                <Button variant="danger" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export function Newsedit(props){
    return(
        <Modal
            show={props.show}
            onHide={props.onHide}
            aria-labelledby="modal-edit-news"
            size="md"
            backdrop='static'
            animation
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    แก้ไข้ข่าว
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div className="mb-3">
                        <Image
                            src="https://sisa.ssru.ac.th/useruploads/images/20191004/2019100415701812578706.jpg"
                            fluid
                            rounded
                        />
                    </div>
                    <div className="mb-3 border p-2">
                        <Form.File id="formcheck-api-custom" custom>
                            <Form.File.Input />
                            <Form.File.Label data-browse="เลือกรูป">
                                อัพรูปข่าใหม่
                            </Form.File.Label>
                            <Form.Control.Feedback type="valid">คุณอัพแล้ว</Form.Control.Feedback>
                        </Form.File>
                        <Form.Group controlId="formNewsURL">
                            <Form.Label>URL รูปข่าว</Form.Label>
                            <Form.Control type="text" placeholder="www.google.com" />
                        </Form.Group>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" >save</Button>
                <Button variant="danger" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export function Newsdelete(props){
    return(
        <Modal
            show={props.show}
            onHide={props.onHide}
            aria-labelledby="modal-delete-news"
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
