import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

export const InputNumber = props => {
    const { setColors } = props;

    const [_state, setState] = React.useState(0);
    const [inputNumber, setInputNumber] = React.useState(false);
    const handleClick = () => {
        if (_state !== 0) {
            setColors(_state);
            setInputNumber(false);
        }
    };

    const handleChange = e => {
        const { value } = e.target;
        if (value > 0) {
            setState(value);
        }
    };
    const handleClose = () => setInputNumber(false);
    return (
        <>
            <Button
                size="sm"
                variant="info"
                onClick={() => setInputNumber(true)}
            >
                เพิ่ม
            </Button>
            <Modal
                size="sm"
                show={inputNumber}
                onHide={handleClose}
                backdrop="static"
                centered
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>ใส่จำนวนขั้นตอน</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="inputNumberStep">
                        <Form.Label>จำนวน</Form.Label>
                        <Form.Control
                            min={0}
                            max={5}
                            type="number"
                            placeholder="ใส่จำนวนตัวเลข"
                            name="numberStep"
                            onChange={handleChange}
                        />
                        <Form.Text className="text-muted">0-5</Form.Text>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        ยกเลิก
                    </Button>
                    <Button variant="primary" onClick={handleClick}>
                        ตกลง
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
