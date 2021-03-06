import React from 'react';
import {Button, Container, Modal, Col, Row, Card, Alert} from 'react-bootstrap';



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
    const [modalShow, setModalShow] = React.useState(false);
    const stepColors = ['info','success','danger'];
    const modalStyle = {overflowY: 'hidden'};
    return(
        <div key={props.id} className="mr-1" >
            <Button variant="warning" name="btnEdit" size="sm" className="text-light" onClick={() => setModalShow(true)}   >
                แก้ไข
            </Button>{' || '}
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                aria-labelledby="modal-edit-step"
                size="lg"
                backdrop='static'
                animation
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title >
                        ตั้งค่าเส้นทางเอกสาร
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>รหัสฟอร์มเอกสาร: </Col>
                            <Col> DE - 2019</Col>
                        </Row><hr/>
                        <Row>
                            <Col>ชื่อฟอร์มเอกสาร: </Col>
                            <Col> เอกสารขอขึ้นสอบ</Col>
                        </Row>
                    </Container><hr/>
                    <Card className="p-2">
                        <Card.Header>
                            <Card.Title style={modalStyle}>
                                เส้นทางเอกสาร
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            {
                                stepColors.map( (variant,id) => (
                                    id === (stepColors.length - 1)
                                        ? <Container key={id.toString()}>
                                            <Row className="mb-2">
                                                <Col xs={12} md={8}>
                                                    <Alert  variant={variant} className="p-2 mb-0">
                                                        <Alert.Link href="#">an example link</Alert.Link>
                                                    </Alert>
                                                </Col>
                                                <Col xs={6} md={4} className="text-center">
                                                    <Button size="sm" variant="info" className="mt-2">+</Button>
                                                </Col>
                                            </Row>
                                        </Container>
                                        : <Container key={id.toString()} >
                                            <Row className="mb-2">
                                                <Col xs={12} md={8}>
                                                    <Alert variant={variant} className="p-2 mb-0">
                                                        <Alert.Link href="#">an example link</Alert.Link>
                                                    </Alert>
                                                </Col>
                                                <Col xs={6} md={4} className="text-center">
                                                    <Button size="sm" variant="info" className="mt-2">+</Button>
                                                </Col>
                                                <Col xs={12} md={8} className="text-center m-2">
                                                    <Button size="sm" variant="outline-warning" disabled>step {(id + 1 )}</Button>
                                                </Col>
                                            </Row>
                                        </Container>
                                ))
                            }
                        </Card.Body>
                    </Card>
                </Modal.Body>
                <Modal.Footer className="d-block">
                    <div className="text-center align-middle">
                        <Button size="sm" variant="info">เพิ่ม</Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export function StepDelete(props){
    const [modalShow, setModalShow] = React.useState(false);
    return(
        <div key={props.id}>
            <Button size="sm" name="delete" variant="danger" onClick = {() => setModalShow(true)} >
                ลบ
            </Button>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
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
                    <Button variant="light" onClick={() => setModalShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
}
