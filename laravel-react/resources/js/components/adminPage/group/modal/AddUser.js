import React, { useState, useEffect } from "react";
import { Button, Modal, Container, Form } from "react-bootstrap";
import Axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { first } from "lodash";
import Swal from "sweetalert2";

const AddUser = (props) => {

    // props
    const { setModalHidden, group, groupUsers, setTable, table } = props

    // local state variable
    const [showModal, setShowModal] = useState(false)
    const [formAddUser, setformAddUser] = useState({
        user: 0,
        subject: 0
    })
    const [showAddButton, setShowAddButton] = useState(true)

    // redux
    const redux_approvers = useSelector(state => state.showApprovers)
    const redux_subjects = useSelector(state => state.showSubjects)

    // function
    const handleClose = () => setShowModal(false);

    const handleShow = () => setShowModal(true);

    const handleInputDataEvent = () => {
        return !((group.type == "normal") ? formAddUser.user != 0 : formAddUser.user != 0 && formAddUser.subject != 0)
    }

    const checkShowEvent = () => {
        if (showModal) {
            setModalHidden(true)
        }
    }

    const eventOnCloseButton = () => {
        setformAddUser({
            user: 0,
            subject: 0
        })
        handleClose()
        setModalHidden(false)
    }

    const eventOnSaveButton = () => {
        setformAddUser({
            user: 0,
            subject: 0
        })
        handleClose()
        setModalHidden(false)
    }

    const saveDataToDB = () => {
        let sendData = new FormData()
        sendData.append('user_id', formAddUser.user)
        sendData.append('subject_id', formAddUser.subject)
        sendData.append('group_id', group.id)
        sendData.append('type', group.type)

        Axios.post(`http://localhost:8000/api/groups/${group.id}/users`, sendData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(
                    "_authLocal"
                )}`
            }
        }).then(res => {
            let tmp_newUsers = new Array()
            tmp_newUsers = [...res.data]
            tmp_newUsers = tmp_newUsers.map(item => {
                let tmp_selectSubject = new Array()
                tmp_selectSubject = [...redux_subjects.data]
                tmp_selectSubject = tmp_selectSubject.filter(filterItem => {
                    return filterItem.id == item.pivot.subject_id
                })
                tmp_selectSubject = first(tmp_selectSubject)

                if (typeof tmp_selectSubject == "undefined") {
                    return {
                        titleName: item.title,
                        firstName: item.first_name,
                        lastName: item.last_name,
                        userId: item.id,
                    }
                } else {
                    return {
                        titleName: item.title,
                        firstName: item.first_name,
                        lastName: item.last_name,
                        userId: item.id,
                        subject: tmp_selectSubject.th_name
                    }
                }
            })

            setTable({
                ...table,
                data: [...tmp_newUsers]
            })

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

            if (res.status == 200) {
                Toast.fire({
                    icon: 'success',
                    title: 'เพิ่มผู้ตรวจสำเร็จ'
                }).then((res) =>{if (res.value) window.location.reload(false)})
            } else {
                Toast.fire({
                    icon: 'warning',
                    title: 'เกิดข้อผิดพลาดในการเพิ่มผู้ตรวจ'
                })
            }

            eventOnSaveButton()
        })
    }

    // useEffect
    useEffect(() => {

        return () => {
            setformAddUser({
                user: 0,
                subject: 0
            })
        }
    }, [])

    useEffect(() => {
        setShowAddButton(handleInputDataEvent())
    }, [formAddUser])

    useEffect(() => {
        checkShowEvent()
    }, [showModal])

    // component
    const MapApproverOption = () => {
        let tmp_filterData = new Array()
        tmp_filterData = [...redux_approvers.data]
        groupUsers.forEach(i => {
            tmp_filterData = tmp_filterData.filter(j => {
                return j.id != i.userId
            })
        });

        return tmp_filterData.map((item, idx) => {
            return (
                <option key={(idx + 1)} value={item.id} >
                    {`${item.id} : ${item.title} ${item.first_name} ${item.last_name}`}
                </option>
            )
        })
    }

    const MapSubjectOption = () => {
        return redux_subjects.data.map((item, idx) => {
            return (
                <option key={(idx + 1)} value={item.id} >
                    {`${item.code} : ${item.th_name}`}
                </option>
            )
        })
    }

    return (<>
        <Button
            onClick={handleShow}
        >{"เพิ่มผู้ตรวจ"}</Button>

        <Modal
            show={showModal}
            onHide={handleClose}
            backdrop="static"
            centered
        >
            <Modal.Header>เพิ่มผู้ตรวจ</Modal.Header>
            <Modal.Body>
                <Container>
                <Form.Group>
                    <Form.Label>เลือกผู้ตรวจ</Form.Label>
                    <Form.Control as="select" value={formAddUser.user} onChange={e => setformAddUser({...formAddUser, user: e.target.value})} >
                        <option key={0} value={0}>เลือก...</option>
                        <MapApproverOption />
                    </Form.Control>
                </Form.Group>
                <Form.Group hidden={group.type == "normal"}>
                    <Form.Label>เลือกวิชาที่ตรวจ</Form.Label>
                    <Form.Control as="select" value={formAddUser.subject} onChange={e => setformAddUser({...formAddUser, subject: e.target.value})} >
                        <option key={0} value={0} >เลือก...</option>
                        <MapSubjectOption />
                    </Form.Control>
                </Form.Group>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={eventOnCloseButton}>Close</Button>
                <Button variant="primary" disabled={showAddButton} onClick={saveDataToDB} >Add</Button>
            </Modal.Footer>
        </Modal>
    </>)
}

export default AddUser
