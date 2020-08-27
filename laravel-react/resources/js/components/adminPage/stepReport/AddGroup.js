import React, { useState, useEffect } from 'react'
import { Button, Modal, Container, Form } from 'react-bootstrap'
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Axios from 'axios';
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2';

export const AddGroup = (props) => {

    // props
    const { response, setModalShow, step, groupSteps, setGroupSteps } = props

    // local state
    const [showModal, setShowModal] = useState(false)
    const [selectData, setSelectData] = useState(0)
    const [dataThisStep, setDataThisStep] = useState(null)

    // redux
    const redux_showGroups = useSelector(state => state.showGroup)
    const redux_chipGroup = useSelector(state => state.chipGroup)

    // fuction
    const handleClose = () => {
        setShowModal(false);
        setSelectData(0)
        // setModalShow(true)
    }

    const handleShow = () => {
        setShowModal(true);
        // setModalShow(false)
    }

    const initState = () => {
        // setshowGroups([...redux_showGroups.data])
    }

    const saveDataToDB = () => {
        let sendData = new FormData()
        sendData.append('form_id', response.id)
        sendData.append('group_id', selectData)
        sendData.append('state', (step + 1))

        Axios.post(`http://localhost:8000/api/forms/${response.id}/groups`, sendData, {
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
                timer: 2000,
                // timerProgressBar: true,
                onOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            let tmp_groupStep = groupSteps
            tmp_groupStep[step] = res.data
            setGroupSteps(tmp_groupStep)

            if (res.status == 200) {
                Toast.fire({
                    icon: 'success',
                    title: 'เพิ่มกลุ่มในเส้นทางเอกสารสำเร็จ'
                })
            } else {
                Toast.fire({
                    icon: 'warning',
                    title: 'เกิดข้อผิดพลาดในการเพิ่มกลุ่ม'
                })
            }

            setSelectData(0)
            setShowModal(false)
        })
    }

    const handlerShowAddGroup = () => {
        if(showModal) {
            setModalShow(false)
        }
    }

    // useeffect
    useEffect(() => {
        console.log('naja')
        initState()
    }, [])

    useEffect(() => {
        // handlerShowAddGroup()
    }, [showModal])

    // return component
    const RenderGroupOptions = () => {
        let filterGroupOption = redux_showGroups.data

        groupSteps[step].map(i=> {
            filterGroupOption = filterGroupOption.filter(j => {
                return i.id != j.id
            })
        })

        return filterGroupOption.map((item, idx) => {
            return <option key={idx + 1} value={item.id} >{`${item.id}: ${item.th_name}`}</option>
        })
    }

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
                    <Container>
                        <Form>
                            <Form.Group controlId="exampleForm.SelectCustom">
                                <Form.Label>เลือกกลุ่มผู้ตรวจ</Form.Label>
                                <Form.Control as="select" value={selectData} onChange={e => setSelectData(e.target.value)} custom>
                                    <option key={0} value="0" disabled={true}>เลือก</option>
                                    <RenderGroupOptions />
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>{"ปิด"}</Button>
                    <Button variant="primary" disabled={selectData == 0} onClick={saveDataToDB}>{"บันทึก"}</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

