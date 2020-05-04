import React from 'react';
import {Modal, Container, Button, Form} from 'react-bootstrap';

export function Useradd(props){
    const [addModal, setAddModal] = React.useState(false);
    return(
        <div>
            <Button name="modalAdd" variant="info" size="sm" onClick={() => setAddModal(true)}  >
                เพิ่ม
            </Button>
            <Modal
                show={addModal}
                onHide={() => setAddModal(false)}
                aria-labelledby="modal-add-user"
                size="lg"
                backdrop='static'
                animation
                scrollable
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="modal-add-user">
                        เพิ่มสมาชิค
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Form>
                            <Form.Group controlId="formUserusername">
                                <Form.Label>รหัสผู้ใช</Form.Label>
                                <Form.Control type="text" placeholder="Username" />
                            </Form.Group>
                            <Form.Group controlId="formUserpassword">
                                <Form.Label>รหัสผ่าน</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formUserNameLastname">
                                <Form.Label>ชื่อ</Form.Label>
                                <Form.Control type="text" placeholder="ชื่อ" />
                            </Form.Group>
                            <Form.Group controlId="formUserLastname">
                                <Form.Label>นามสกุล</Form.Label>
                                <Form.Control type="text" placeholder="นามสกุล" />
                            </Form.Group>
                            <Form.Group controlId="formUserSelectRole">
                                <Form.Label>เลือกประเภท</Form.Label>
                                <Form.Control as="select">
                                    <option>เลือกประเภท</option>
                                    <option>แอดดมิน</option>
                                    <option>อาจารย์</option>
                                    <option>นักศึกษา</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formUseremail">
                                <Form.Label>อีเมล</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group controlId="formUserphone">
                                <Form.Label>เบอร์โทร</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group controlId="formUserSelectFac">
                                <Form.Label>คณะ</Form.Label>
                                <Form.Control as="select">
                                    <option>คณะ</option>

                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formUserSelectMajor">
                                <Form.Label>สาขา</Form.Label>
                                <Form.Control as="select">
                                    <option>สาขา</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" >save</Button>
                    <Button variant="danger" onClick={() => setAddModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
}

export function Useredit(props){
    return(
        <Modal
            show={props.show}
            onHide={props.onHide}
            aria-labelledby="modal-edit-user"
            size="lg"
            backdrop='static'
            animation
            scrollable
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="modal-edit-user">
                    แก้ไขสมาชิค
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Form>
                        <Form.Group controlId="formUserusername">
                            <Form.Label>รหัสผู้ใช</Form.Label>
                            <Form.Control type="text" placeholder="Username" />
                        </Form.Group>
                        <Form.Group controlId="formUserpassword">
                            <Form.Label>รหัสผ่าน</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formUserNameLastname">
                            <Form.Label>ชื่อ</Form.Label>
                            <Form.Control type="text" placeholder="ชื่อ" />
                        </Form.Group>
                        <Form.Group controlId="formUserLastname">
                            <Form.Label>นามสกุล</Form.Label>
                            <Form.Control type="text" placeholder="นามสกุล" />
                        </Form.Group>
                        <Form.Group controlId="formUserSelectRole">
                            <Form.Label>เลือกประเภท</Form.Label>
                            <Form.Control as="select">
                                <option>เลือกประเภท</option>
                                <option>แอดดมิน</option>
                                <option>อาจารย์</option>
                                <option>นักศึกษา</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formUseremail">
                            <Form.Label>อีเมล</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group controlId="formUserphone">
                            <Form.Label>เบอร์โทร</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group controlId="formUserSelectFac">
                            <Form.Label>คณะ</Form.Label>
                            <Form.Control as="select">
                                <option>คณะ</option>

                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formUserSelectMajor">
                            <Form.Label>สาขา</Form.Label>
                            <Form.Control as="select">
                                <option>สาขา</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" >save</Button>
                <Button variant="danger" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export function Userdelete(props){
    return(
        <Modal
            show={props.show}
            onHide={props.onHide}
            aria-labelledby="modal-delete-user"
            size="sm"
            backdrop='static'
            animation
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="modal-delete-user">
                    ลบข้อมูลสมาชิค
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
