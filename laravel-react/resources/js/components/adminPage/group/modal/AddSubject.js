import React, { useState, useEffect } from 'react'
import { Button, Modal, Container, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'

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
    const handleClose = () => setShowModalSubject(false);

    const handleShow = () => setShowModalSubject(true);

    const handleCloseSubjectEvent = () => {
        setShowModalSubject(false)
        setModalHidden(false)
    }

    const handleCloseApproverEvent = () => {
        setShowModalApprover(false)
        setModalHidden(false)
    }

    const checkShowEvent = () => {
        if (showModalSubject) {
            setModalHidden(true)
        }
    }

    const sentToSelectApprover = () => {
        console.log('sentToSelectApprover')
        setShowModalSubject(false)
        setShowModalApprover(true)
    }

    const sendDataToDB = () => {
        console.log('sendDataToDB')
        console.log('selectData', selectData)
    }

    // useEffect
    useEffect(() => {
        // initState()
    }, [])

    useEffect(() => {
        checkShowEvent()
    }, [showModalSubject])

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
        console.log('groupUsers', groupUsers)
        console.log('redux_showApprovers', redux_showApprovers)
        let tmp_filterData = new Array()
        tmp_filterData = [...redux_showApprovers.data]
        // groupUsers.forEach(i => {
        //     tmp_filterData = tmp_filterData.filter(j => {
        //         return j.id != i.userId
        //     })
        // });

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
                                <option key={0} value={0} >เลือก...</option>
                                <MapSubjectOption />
                            </Form.Control>
                        </Form.Group>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={eventOnCloseButton}>Close</Button>
                    <Button variant="primary" disabled={showAddButton} onClick={saveDataToDB} >Add</Button> */}
                    <Button variant="secondary" onClick={handleCloseSubjectEvent} >{"ปิด"}</Button>
                    <Button variant="primary" onClick={sentToSelectApprover} >{"เพิ่ม"}</Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={showModalApprover}
                onHide={handleClose}
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
                                <option key={0} value={0}>เลือก...</option>
                                <MapApproverOption />
                            </Form.Control>
                        </Form.Group>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseApproverEvent} >{"ปิด"}</Button>
                    <Button variant="primary" onClick={sendDataToDB} >{"เพิ่ม"}</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddSubject
