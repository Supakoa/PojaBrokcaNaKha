import React, { useState, useEffect } from 'react'
import { Button, Modal, Container, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import Axios from 'axios'
import { first } from 'lodash'

const AddSubject = (props) => {

    // props
    const { setModalHidden, group, groupUsers, setTable, table } = props

    // local state
    const [showModalSubject, setShowModalSubject] = useState(false)
    const [showModalApprover, setShowModalApprover] = useState(false)
    const [selectData, setSelectData] = useState({
        subject: 0,
        approver: 0
    })

    // redux
    const redux_showSubjects = useSelector(state => state.showSubjects)
    const redux_showApprovers = useSelector(state => state.showApprovers)

    // local variable

    // fuction
    const handleClose = () => {
        setShowModalSubject(false);
        setSelectData({
            ...selectData,
            subject: 0
        })
    }

    const handleShow = () => {
        setShowModalSubject(true);
        setSelectData({
            subject: 0,
            approver: 0
        })
    }

    const handleCloseSubjectEvent = () => {
        setShowModalSubject(false)
        setModalHidden(false)
        setSelectData({
            ...selectData,
            subject: 0
        })
    }

    const handleCloseApproverEvent = () => {
        setShowModalApprover(false)
        setSelectData({
            ...selectData,
            approver: 0
        })
    }

    const checkShowEvent = () => {
        if (showModalSubject) {
            setModalHidden(true)
        }
    }

    const checkShowCloseApproveEvent = () => {
        if (!showModalApprover) {
            setModalHidden(false)
        }
    }

    const sentToSelectApprover = () => {
        setShowModalSubject(false)
        setShowModalApprover(true)
    }

    const sendDataToDB = async () => {
        console.log('sendDataToDB')
        let sendData = new FormData()
        sendData.append('user_id', selectData.approver)
        sendData.append('subject_id', selectData.subject)
        sendData.append('group_id', group.id)
        sendData.append('type', group.type)

        await Axios.post(`http://localhost:8000/api/groups/${group.id}/users`, sendData, {
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
                tmp_selectSubject = [...redux_showSubjects.data]
                tmp_selectSubject = tmp_selectSubject.find(filterItem => {
                    return filterItem.id == item.pivot.subject_id
                })
                // tmp_selectSubject = first(tmp_selectSubject)

                return {
                    titleName: item.title,
                    firstName: item.first_name,
                    lastName: item.last_name,
                    userId: item.id,
                    subject: tmp_selectSubject.th_name
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
                })
            } else {
                Toast.fire({
                    icon: 'warning',
                    title: 'เกิดข้อผิดพลาดในการเพิ่มผู้ตรวจ'
                })
            }
        }).catch(error => {
            if (error.response) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2000,
                    onOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })

                if (error.response.status == 406) {
                    Toast.fire({
                        icon: 'warning',
                        text: "กรุณาเลือกผู้ตรวจท่านอื่น",
                        title: 'มีผู้ตรวจในรายวิชานี้แล้ว'
                    })
                }
            }
        })

        handleCloseApproverEvent()
    }

    // useEffect
    useEffect(() => {
        checkShowEvent()
    }, [showModalSubject])

    useEffect(() => {
        checkShowCloseApproveEvent()
    }, [showModalApprover])

    // return component
    const MapSubjectOption = () => {
        return redux_showSubjects.data.map((item, idx) => {
            return (
                <option key={(idx + 1)} value={item.id} >
                    {`${item.code} : ${item.th_name}`}
                </option>
            )
        })
    }

    const MapApproverOption = () => {
        let tmp_filterData = new Array()
        tmp_filterData = [...redux_showApprovers.data]

        if (groupUsers.length > 0) {
            let tmp_selectSubjectName = redux_showSubjects.data.find(i => {
                return i.id == selectData.subject
            })

            let tmp_filterSelectApprover = new Array()
            tmp_filterSelectApprover = [...groupUsers]
            tmp_filterSelectApprover = tmp_filterSelectApprover.filter(j => {
                return j.subject == tmp_selectSubjectName.th_name
            })

            tmp_filterSelectApprover.forEach(k => {
                tmp_filterData = tmp_filterData.filter(l => {
                    return l.id != k.userId
                })
            })
        }

        return tmp_filterData.map((item, idx) => {
            return (
                <option key={(idx + 1)} value={item.id} >
                    {`${item.id} : ${item.title} ${item.first_name} ${item.last_name}`}
                </option>
            )
        })
    }

    return (
        <>
            <Button
                onClick={handleShow}
            >{"เพิ่มผู้ตรวจ"}</Button>

            <Modal
                show={showModalSubject}
                onHide={handleClose}
                backdrop="static"
                centered
            >
                <Modal.Header>เพิ่มผู้ตรวจ</Modal.Header>
                <Modal.Body>
                    <Container>
                        <Form.Group>
                            <Form.Label>เลือกวิชาที่ตรวจ</Form.Label>
                            <Form.Control as="select" value={selectData.subject} onChange={e => setSelectData({...selectData, subject: e.target.value})} >
                                <option key={0} value={0} disabled >เลือก...</option>
                                <MapSubjectOption />
                            </Form.Control>
                        </Form.Group>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={eventOnCloseButton}>Close</Button>
                    <Button variant="primary" disabled={showAddButton} onClick={saveDataToDB} >Add</Button> */}
                    <Button variant="secondary" onClick={handleCloseSubjectEvent} >{"ปิด"}</Button>
                    <Button variant="primary" disabled={selectData.subject == 0} onClick={sentToSelectApprover} >{"เพิ่ม"}</Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={showModalApprover}
                onHide={handleCloseApproverEvent}
                backdrop="static"
                centered
            >
                <Modal.Header>เพิ่มผู้ตรวจ</Modal.Header>
                <Modal.Body>
                    <Container>
                        <Form.Group>
                            <Form.Label>เลือกผู้ตรวจ</Form.Label>
                            <Form.Control as="select" value={selectData.approver} onChange={e => setSelectData({...selectData, approver: e.target.value})}>
                                {/* value={formAddUser.user} onChange={e => setformAddUser({...formAddUser, user: e.target.value})} */}
                                <option key={0} value={0} disabled >เลือก...</option>
                                <MapApproverOption />
                            </Form.Control>
                        </Form.Group>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseApproverEvent} >{"ปิด"}</Button>
                    <Button variant="primary" disabled={selectData.approver == 0} onClick={sendDataToDB} >{"เพิ่ม"}</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddSubject