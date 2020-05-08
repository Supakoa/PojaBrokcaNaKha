import React from 'react';
import {Link} from 'react-router-dom';
import Logo from './../../components/images/logo.png';
import {Col, Container, Row, Form, Button, Image} from "react-bootstrap";


export default function Register() {
    return (
        <Container fluid className="effectSection">
            <Row className="section-log-in">
                <Col xs={12} sm={12} md={6} lg={6} className="bg-info text-light d-flex align-item-center">
                    <ComponentLogIn/>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} className="bg-light d-flex align-item-center">
                    <FormRegister/>
                </Col>
            </Row>
        </Container>
    );
}

function ComponentLogIn() {
    return (
        <section className="w-75 m-auto">
            <p>Petition คือ ?</p>
            <p>เว็บไซต์ส่งแบบคำร้องของมหาวิทยาลัยราชภัฎสวนสุนันทา</p>
            <hr/>
            <p>คุณต้องการเข้าสู่ระบบเพื่อส่งแบบคำร้องใช่หรือไม่ ?</p>
            <Link className="m-auto btn btn-light" to="/log-in">ล็อคอิน</Link>
        </section>
    );
}

function FormRegister() {
    return (
        <Form className="p-4 w-75 m-auto">
            <section className="d-table text-center m-auto">
                <Image className="border-bottom border-info" src={Logo} width="80" height="80"/>
                <p className="text-info">GE Petition</p>
            </section>
            <Form.Row className="mt-4">
                <Form.Group as={Col} controlId="formRowFirstName">
                    <Form.Label className="text-info">ชื่อ</Form.Label>
                    <Form.Control type="text" placeholder="ชื่อ"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formRowLastName">
                    <Form.Label className="text-info">นามสกุล</Form.Label>
                    <Form.Control type="text" placeholder="นามสกุล"/>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} md={8} controlId="formRowStudentID">
                    <Form.Label className="text-info">รหัสนักศึกษา</Form.Label>
                    <Form.Control type="text" placeholder="รหัสนักศึกษา"/>
                </Form.Group>

                <Form.Group as={Col} md={6} controlId="formRowPassword">
                    <Form.Label className="text-info">รหัสผ่าน</Form.Label>
                    <Form.Control type="text" placeholder="รหัสผ่าน"/>
                </Form.Group>

                <Form.Group as={Col} md={6} controlId="formRowConFirmPassword">
                    <Form.Label className="text-info">ยืนยันรหัสผ่าน</Form.Label>
                    <Form.Control type="text" placeholder="รหัสผ่าน"/>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formRoweMail">
                    <Form.Label className="text-info">อีเมล</Form.Label>
                    <Form.Control type="email" placeholder="example@ssru.ac.th.com"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formRowPhone">
                    <Form.Label className="text-info">เบอร์โทรศัพท์</Form.Label>
                    <Form.Control type="text" placeholder="เบอร์โทรศัพท์"/>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridFaculty">
                    <Form.Label className="text-info">คณะ</Form.Label>
                    <Form.Control as="select" custom>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridMajor">
                    <Form.Label className="text-info">สาขา</Form.Label>
                    <Form.Control as="select" custom>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
                ยืนยัน
            </Button>
        </Form>
    );
}
