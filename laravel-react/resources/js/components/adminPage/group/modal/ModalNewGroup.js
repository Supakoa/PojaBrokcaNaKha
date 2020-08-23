import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Container, Col } from "react-bootstrap";
import {useTranslation, composeInitialProps} from 'react-i18next';
import Axios from "axios";
import Swal from "sweetalert2";
import { initNewsForm } from "../../../../redux/actions";

const ModalNewGroup = (props) => {
    // props
    const { isCreateProps, res, setModalHidden } = props

    // local state
    const [show, setShow] = useState(false);
    const [showCreateButton, setshowCreateButton] = useState(false)
    const [th_nameGroup, setThNameGroup] = useState("")
    const [eng_nameGroup, setEngNameGroup] = useState("")
    const [selectTypeGroup, setSelectTypeGroup] = useState("")

    // redux

    // local variable

    // import variable
    const {t} = useTranslation('', {useSuspense: false}); // not use now

    // function
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sendDataToDB = () => {
        let data = new FormData()
        data.append('th_name', th_nameGroup)
        data.append('eng_name', eng_nameGroup),
        data.append('type', selectTypeGroup)

        if (isCreateProps) {
            Axios.post(`http://localhost:8000/api/groups`, data ,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "_authLocal"
                    )}`
                }
            }).then(res => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1500,
                    // timerProgressBar: true,
                    onOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                if (res.status == 201) {
                    Toast.fire({
                        icon: 'success',
                        title: 'สร้างกลุ่มสำเร็จ'
                    })
                } else {
                    Toast.fire({
                        icon: 'warning',
                        title: 'เกิดข้อผิดพลาดในการสร้างกลุ่ม'
                    })
                }

                handleClose()
            })
        } else {
            // not have id sing will edit tommorow
        }
    }

    const checkValueIsReadyToSend = () => {
        if (th_nameGroup != "" && eng_nameGroup != "" && selectTypeGroup) {
            setshowCreateButton(true)
        } else {
            setshowCreateButton(false)
        }
    }

    const initGroupForm = () => {
        if (!isCreateProps) {
            setThNameGroup(res.th_name)
            setEngNameGroup(res.eng_name)
            if (res.type == "normal") {
                setSelectTypeGroup(1)
            } else {
                setSelectTypeGroup(2)
            }
        }
    }

    const returnTitleName = () => {
        return isCreateProps ? "สร้างกลุ่มผู้ตรวจ" : "แก้ไขกลุ่มผู้ตรวจ"
    }

    const returnClassEdit = () => {
        return isCreateProps ? "" : "mt-3"
    }

    const checkShowEvent = () => {
        if (show && !isCreateProps) {
            setModalHidden(true)
        }
    }

    const eventOnCloseButton = () => {
        if (!isCreateProps) {
            setModalHidden(false)
        }
        handleClose()
    }

    // useEffect
    useEffect(() => {
        initGroupForm()
    }, [])

    useEffect(() => {
        checkShowEvent()
    }, [show])

    useEffect(() => {
        checkValueIsReadyToSend()
    }, [th_nameGroup, eng_nameGroup, selectTypeGroup])

    return (
        <>
            <Button className={returnClassEdit()} variant="primary" onClick={handleShow}>
                {returnTitleName()}
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                aria-labelledby="modal-user"
                size="md"
                // backdrop="static"
                animation
                scrollable
                centered
            >
                <Modal.Header>
                    <Modal.Title>สร้างกลุ่มผู้ตรวจ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Form.Group controlId="formThaiGroupName">
                            <Form.Label>ชื่อกลุ่มภาษาไทย</Form.Label>
                            <Form.Control type="text" placeholder="ใส่ชื่อกลุ่ม ภาษาไทย" defaultValue={th_nameGroup} onChange={e => setThNameGroup(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formEngGroupName">
                            <Form.Label>ชื่อกลุ่มภาษาอังกฤษ</Form.Label>
                            <Form.Control type="text" placeholder="ใส่ชื่อกลุ่ม ภาษาอังกฤษ" defaultValue={eng_nameGroup} onChange={e => setEngNameGroup(e.target.value)} />
                        </Form.Group>
                        <hr/>
                        <Form.Group>
                            <Form.Label as="legend" column>
                                ประเภทกลุ่ม
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="กลุ่มที่ 1: ตรวจธรรมดา"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                    onChange={e => setSelectTypeGroup(1)}
                                    defaultChecked={(isCreateProps) ? false : res.type == "normal"}
                                />
                                <Form.Check
                                    type="radio"
                                    label="กลุ่มที่ 1: ตรวจตามวิชาในเอกสาร"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                    onChange={e => setSelectTypeGroup(2)}
                                    defaultChecked={(isCreateProps) ? false : res.type != "normal"}
                                />
                            </Col>
                        </Form.Group>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={eventOnCloseButton}>
                        {t('close')}
                    </Button>
                    <Button variant="primary" disabled={!showCreateButton} onClick={e => sendDataToDB()}>
                        {"บันทึก"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalNewGroup;
