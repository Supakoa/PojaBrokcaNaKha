import React, { useState, useEffect } from 'react'
import { Button, Modal, Container, Form } from 'react-bootstrap'
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import Swal from 'sweetalert2';
import {_URL} from "../../middleware/URL";
import { showFormsAction } from '../../../redux/actions';

export const AddGroup = (props) => {

    // props
    const { response, setModalShow, step, groupSteps, setGroupSteps } = props

    // local state
    const [showModal, setShowModal] = useState(false)
    const [selectData, setSelectData] = useState(0)
    const [dataThisStep, setDataThisStep] = useState(null)

    // redux
    const redux_showGroups = useSelector(state => state.showGroup)
    const redux_showForm = useSelector(state => state.showForm)
    const redux_chipGroup = useSelector(state => state.chipGroup)
    const dispatch = useDispatch()

    // local variable
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
    const tmp_reduxShowForm = redux_showForm.data

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
    const saveDataToDB = async () => {

        let sendData = new FormData()
        sendData.append('form_id', response.id)
        sendData.append('group_id', selectData)
        sendData.append('state', (step + 1))

        await Axios.post(`${_URL}/api/forms/${response.id}/groups`, sendData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(
                    "_authLocal"
                )}`
            }
        }).then((res) => {
            console.log('res.data', res.data)
            let tmp_lastRes = res.data[res.data.length - 1]
            let indexForm = tmp_reduxShowForm.findIndex(item => {
                return item.id == response.id
            })
            let tmp_groupStep = tmp_reduxShowForm[indexForm].groups
            let tmp_lastIndex = (tmp_lastRes.pivot.state - 1)

            console.log('step', step)
            console.log('tmp_groupStep', tmp_groupStep)
            console.log('tmp_lastIndex', tmp_lastIndex)
            console.log('tmp_reduxShowForm', tmp_reduxShowForm)

            tmp_groupStep[tmp_lastIndex].push(tmp_lastRes)

            let tmp_showForm = tmp_reduxShowForm
            tmp_showForm[step].groups = [
                ...tmp_groupStep
            ]

            console.log('tmp_showForm naja', tmp_showForm)

            // setGroupSteps(tmp_groupStep)

            dispatch(showFormsAction("INIT_SHOW_FORM", tmp_showForm.data))


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
        }).catch(error => {
            if (error.response) {
                if (error.response.status == 406) {
                    Toast.fire({
                        icon: 'error',
                        title: 'ไม่สามารถเพิ่มกลุ่มในแต่ะชั้นที่ซ้ำกันได้'
                    })
                }
            }
        })

        setSelectData(0)
        setShowModal(false)
    }
    const handlerShowAddGroup = () => {
        if(showModal) {
            setModalShow(false)
        }
    }

    // useeffect
    useEffect(() => {
        // console.log('naja')
        // initState()
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
            return <option key={idx + 1} value={item.id} >{`[ ${item.id}: ${item.type} ] ${item.th_name}`}</option>
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

