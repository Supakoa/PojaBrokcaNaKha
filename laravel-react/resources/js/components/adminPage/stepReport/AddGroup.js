import React, { useState, useEffect } from 'react'
import { Button, Modal, Container, Form } from 'react-bootstrap'
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Axios from 'axios';

export const AddGroup = (props) => {

    // props
    const { } = props

    // local state
    const [showModal, setShowModal] = useState(false)

    // redux

    // fuction
    const handleClose = () => {
        setShowModal(false);
        // setModalShow(true)
    }

    const handleShow = () => {
        setShowModal(true);
        // setModalShow(false)
    }

    const initShowGroup = () => {
        console.log('initShowGroup')
        Axios.get(`http://localhost:8000/api/groups`, {
            
        })
    }

    // useeffect
    useEffect(() => {
        initShowGroup()
    }, [])

    // return component

    return (
        <div>
            <Button
                onClick={handleShow}
            >
                <AddCircleOutlineIcon />
            </Button>

            <Modal
                show={showModal}
                onHide={handleClose}
                backdrop="static"
                centered
                size="sm"
            >
                <Modal.Header>
                    <Modal.Title>เพิ่มกลุ่มในเส้นทางเอกสาร</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container style={{backgroundColor: "green"}}>
                        <Form>
                            <Form.Group controlId="exampleForm.SelectCustom">
                                <Form.Label>เลือกกลุ่มผู้ตรวจ</Form.Label>
                                <Form.Control as="select" defaultValue={0} custom>
                                    <option value="0" disabled={true}>เลือก</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        ปิด
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        บันทึก
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

