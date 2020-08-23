import React, { useState, useEffect } from "react";
import { Button, Modal, Container, Form } from "react-bootstrap";
import Axios from "axios";
import { useSelector, useDispatch } from 'react-redux'

const AddUser = (props) => {

    // props
    const { setModalHidden, group } = props

    // local state variable
    const [showModal, setShowModal] = useState(false)
    const [formAddUser, setformAddUser] = useState({
        user: 0,
        subject: 0
    })
    const [showApprovers, setShowApprovers] = useState(null)

    // redux
    const redux_approvers = useSelector(state => state.showApprovers)
    const redux_subjects = useSelector(state => state.showSubjects)

    // function
    const handleClose = () => setShowModal(false);

    const handleShow = () => setShowModal(true);

    const checkShowEvent = () => {
        if (showModal) {
            setModalHidden(true)
        }
    }

    const eventOnCloseButton = () => {
        handleClose()
        setModalHidden(false)
    }

    const eventOnSaveButton = () => {
        handleClose()
        setModalHidden(false)
    }

    const initApprovers = () => {
        console.log('initData')
        console.log('redux_approvers', redux_approvers)
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
            console.log('res', res)
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
        initApprovers()
    }, [redux_approvers])

    useEffect(() => {
        checkShowEvent()
    }, [showModal])

    // component
    const MapApproverOption = () => {
        return redux_approvers.data.map((item, idx) => {
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
                <Form.Group>
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
                <Button variant="primary" onClick={saveDataToDB} >Add</Button>
            </Modal.Footer>
        </Modal>
    </>)
}

export default AddUser
