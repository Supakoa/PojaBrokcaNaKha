import React, { useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export const InputNumber = props => {
    // props
    const { setColors, groupSteps, setGroupSteps } = props;

    // local state
    const [_state, setState] = React.useState(0);
    const [inputNumber, setInputNumber] = React.useState(false);

    const handleClick = () => {
        if (_state !== 0) {
            setColors(_state);

            let tmp_groupStep = new Array()
            for (let i = 0; i < _state; i++) {
                if (groupSteps[i]) {
                    tmp_groupStep.push(groupSteps[i])
                } else {
                    tmp_groupStep.push([])
                }
            }
            console.log('tmp_groupStep', tmp_groupStep)
            setGroupSteps(tmp_groupStep)

            setInputNumber(false);
            setState(0)
        }
    };

    // redux

    // local variable

    // function
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

    // useEffect

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
