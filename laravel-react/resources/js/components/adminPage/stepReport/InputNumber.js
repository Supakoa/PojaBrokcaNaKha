import React, { useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Axios from "axios";
import Swal from "sweetalert2";
import {_URL} from "../../middleware/URL";
import { useSelector, useDispatch } from "react-redux";
import { showFormsAction } from "../../../redux/actions";

export const InputNumber = props => {
    // props
    const { setColors, groupSteps, setGroupSteps, response } = props; // TODO: see groupSteps and setGroupSteps

    // local state
    const [_state, setState] = React.useState(0);
    const [inputNumber, setInputNumber] = React.useState(false);

    // redux
    const redux_showForm = useSelector(state => state.showForm)
    const dispatch = useDispatch()

    // local variable
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

    // redux

    // local variable

    // function
    const handleClick = () => {
        let tmp_groupStep = new Array()
        for (let i = 0; i < _state; i++) {
            if (redux_showForm.data[(response.id - 1)].groups[i]) {
                tmp_groupStep.push(redux_showForm.data[(response.id - 1)].groups[i])
            } else {
                tmp_groupStep.push([])
            }
        }

        setGroupSteps(tmp_groupStep)

        const qs = require('qs')
        let sendData = qs.stringify({
            all_state: _state
        })

        Axios.patch(`${_URL}/api/forms/${response.id}`, sendData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(
                    "_authLocal"
                )}`
            }
        }).then(res => {
            if (res.status == 200) {
                let tmp_showForm = redux_showForm.data
                tmp_showForm[(response.id - 1)].all_state = _state

                dispatch(showFormsAction('INIT_SHOW_FORM', tmp_showForm))

                Toast.fire({
                    icon: 'success',
                    title: 'แก้ไขข้อมูลจำนวนขั้นตอนการตรวจสำเร็จ'
                })
            } else {
                Toast.fire({
                    icon: 'warning',
                    title: 'เกิดข้อผิดพลาดในการแก้ไขข้อมูลลำดับชั้น'
                })
            }
        })

        setColors(_state);
        setInputNumber(false);
        // setState(0)
    };

    const handleChange = e => {
        const { value } = e.target;

        if (value > 0) {
            if (value > 5) {
                setState(5);
            } else {
                setState(value);
            }
        }
    };

    const handleClose = () => {
        setInputNumber(false)
        setState(0)
    }

    const initStepNumber = () => {
        setState(groupSteps.length)
    }

    // useEffect
    useEffect(() => {
        initStepNumber()
    }, [redux_showForm])

    // return component

    return (
        <>
            <Button
                variant="success"
                onClick={() => setInputNumber(true)}
            >{"เลือกจำนวนขั้นตอนการตรวจ"}</Button>

            <Modal
                size="sm"
                show={inputNumber}
                onHide={handleClose}
                backdrop="static"
                centered
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>ใส่จำนวนขั้นตอน</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="inputNumberStep">
                        <Form.Label>จำนวน</Form.Label>
                        <Form.Control
                            min={1}
                            max={5}
                            type="number"
                            placeholder="ใส่จำนวนตัวเลข"
                            name="numberStep"
                            onChange={handleChange}
                            defaultValue={_state}
                        />
                        <Form.Text className="text-muted">{"ใส่จำนวนขั้นตอนตั้งแต่ 1-5"}</Form.Text>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        ยกเลิก
                    </Button>
                    <Button variant="primary" disabled={_state <= 0} onClick={handleClick}>
                        ตกลง
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
