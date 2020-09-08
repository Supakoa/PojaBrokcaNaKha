import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Container, Col, Row } from "react-bootstrap";
import { useTranslation, composeInitialProps } from "react-i18next";
import Axios from "axios";
import Swal from "sweetalert2";
import { initNewsForm } from "../../../../redux/actions";
import TableGroups from "../table";
import {_URL} from "../../../middleware/URL";

const ModalNewGroup = ({
    isCreateProps,
    res,
    setModalHidden,
    setgroupDetail,
    groupDetail,
    groups, setGroups
}) => {
    // local state
    const [show, setShow] = useState(false);
    const [showCreateButton, setshowCreateButton] = useState(false);
    const [th_nameGroup, setThNameGroup] = useState("");
    const [eng_nameGroup, setEngNameGroup] = useState("");
    const [selectTypeGroup, setSelectTypeGroup] = useState("");

    // redux

    // local variable

    // import variable
    const { t } = useTranslation("", { useSuspense: false }); // not use now

    // function
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sendDataToDB = async () => {
        let data = new FormData();
        data.append("th_name", th_nameGroup);
        data.append("eng_name", eng_nameGroup),
            data.append("type", selectTypeGroup);

        if (isCreateProps) {
            await Axios.post(`${_URL}/api/groups`, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "_authLocal"
                    )}`
                }
            }).then(res => {
                // console.log(res);

                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 1500,
                    // timerProgressBar: true,
                    onOpen: toast => {
                        toast.addEventListener("mouseenter", Swal.stopTimer);
                        toast.addEventListener("mouseleave", Swal.resumeTimer);
                    }
                });

                if (res.status == 201) {
                    Toast.fire({
                        icon: "success",
                        title: "สร้างกลุ่มสำเร็จ"
                    });
                } else {
                    Toast.fire({
                        icon: "warning",
                        title: "เกิดข้อผิดพลาดในการสร้างกลุ่ม"
                    });
                }
                window.location.reload(true);
                handleClose();
            });
        } else {
            // not have id sing will edit tommorow
            let select = selectTypeGroup == 1 ? "normal" : "subject";
            // let sendData = new FormData()
            // sendData.append('th_name', th_nameGroup)
            // sendData.append('eng_name', eng_nameGroup)
            // sendData.append('type', select)

            let qs = require("qs");
            let sendData = qs.stringify({
                th_name: th_nameGroup,
                eng_name: eng_nameGroup,
                type: select
            });

            await Axios.patch(
                `${_URL}/api/groups/${res.id}`,
                sendData,
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        Authorization: `Bearer ${localStorage.getItem(
                            "_authLocal"
                        )}`
                    }
                }
            ).then(res => {
                setgroupDetail({
                    th_name: res.data.th_name,
                    eng_name: res.data.eng_name,
                    type: res.data.type
                });
                handleClose();
                setModalHidden(false);
                // window.location.reload(false);

            });
        }
    };

    const checkValueIsReadyToSend = () => {
        if (th_nameGroup != "" && eng_nameGroup != "" && selectTypeGroup) {
            setshowCreateButton(true);
        } else {
            setshowCreateButton(false);
        }
    };

    const initGroupForm = () => {
        if (!isCreateProps) {
            setThNameGroup(res.th_name);
            setEngNameGroup(res.eng_name);
            if (res.type == "normal") {
                setSelectTypeGroup(1);
            } else {
                setSelectTypeGroup(2);
            }
        }
    };

    const returnTitleName = () => {
        return isCreateProps ? "สร้างกลุ่มผู้ตรวจ" : "แก้ไขกลุ่มผู้ตรวจ";
    };

    const returnClassEdit = () => {
        return isCreateProps ? "" : "mt-3";
    };

    const checkShowEvent = () => {
        if (show && !isCreateProps) {
            setModalHidden(true);
        }
    };

    const eventOnCloseButton = () => {
        if (!isCreateProps) {
            setModalHidden(false);
        }
        handleClose();
    };

    const mapTitleName = () => {
        return isCreateProps ? `สร้างกลุ่มผู้ตรวจ` : `แก้ไขกลุ่มผู้ตรวจ`;
    };

    // useEffect
    useEffect(() => {
        initGroupForm();
    }, []);

    useEffect(() => {
        checkShowEvent();
    }, [show]);

    useEffect(() => {
        checkValueIsReadyToSend();
    }, [th_nameGroup, eng_nameGroup, selectTypeGroup]);

    return (
        <>
            <Button
                className={returnClassEdit()}
                variant="primary"
                onClick={handleShow}
            >
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
                    <Modal.Title>{mapTitleName()}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Form.Group controlId="formThaiGroupName">
                            <Form.Label>ชื่อกลุ่มภาษาไทย</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="ใส่ชื่อกลุ่ม ภาษาไทย"
                                defaultValue={th_nameGroup}
                                onChange={e => setThNameGroup(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formEngGroupName">
                            <Form.Label>ชื่อกลุ่มภาษาอังกฤษ</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="ใส่ชื่อกลุ่ม ภาษาอังกฤษ"
                                defaultValue={eng_nameGroup}
                                onChange={e => setEngNameGroup(e.target.value)}
                            />
                        </Form.Group>
                        <hr />
                        <Form.Group as={Row}>
                            <Form.Label as="legend" column>
                                ประเภทกลุ่ม
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="กลุ่มที่ 1: ตรวจธรรมดา"
                                    name="formHorizontalRadios"
                                    id="1"
                                    onChange={e =>
                                        setSelectTypeGroup(e.target.id)
                                    }
                                    defaultChecked={
                                        isCreateProps
                                            ? false
                                            : groupDetail.type == "normal"
                                    }
                                    disabled={!isCreateProps}
                                />
                                <Form.Check
                                    type="radio"
                                    label="กลุ่มที่ 2: ตรวจตามวิชาในเอกสาร"
                                    name="formHorizontalRadios"
                                    id="2"
                                    onChange={e =>
                                        setSelectTypeGroup(e.target.id)
                                    }
                                    defaultChecked={
                                        isCreateProps
                                            ? false
                                            : groupDetail.type != "normal"
                                    }
                                    disabled={!isCreateProps}
                                />
                            </Col>
                        </Form.Group>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={eventOnCloseButton}>
                        {t("close")}
                    </Button>
                    <Button
                        variant="primary"
                        disabled={!showCreateButton}
                        onClick={sendDataToDB}
                    >
                        {"บันทึก"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalNewGroup;
