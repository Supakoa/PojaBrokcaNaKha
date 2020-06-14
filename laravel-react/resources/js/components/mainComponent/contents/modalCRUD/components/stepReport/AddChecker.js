import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

export const AddChecker = props => {
    const { setChip, oldChipName } = props;
    const [show, setShow] = React.useState(false);
    const _names = ["john", "steve", "devid", "luis"];
    const [_nameChip, setNameChip] = React.useState();
    React.useEffect(() => {});

    const handleSelect = e => {
        const { value } = e.target;
        // console.log(e.target.value);
        if (value !== "0") {
            setNameChip(value);
        }
    };

    const handleClick = () => {
        // console.log(_nameChip.length);

        if (_nameChip.length !== 0) {
            if (oldChipName !== []) {
                setChip([...oldChipName, _nameChip]);
            } else {
                setChip([_nameChip]);
            }
            setShow(false);
        }
    };
    return (
        <>
            <Button
                size="sm"
                variant="info"
                className="mt-2"
                onClick={() => setShow(true)}
            >
                <AddCircleOutlineIcon />
            </Button>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="modal-addChecker"
                size="sm"
                backdrop="static"
                animation
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>รายชื่อคนตรวจ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="dropdownAddChecker">
                        <Form.Label>ชื่อผู้ตรวจ</Form.Label>
                        <Form.Control as="select" onClick={handleSelect}>
                            <option value="0">เลือก</option>
                            {_names.map((name, idx) => {
                                return (
                                    <option key={idx.toString()}>{name}</option>
                                );
                            })}
                        </Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer className="d-block">
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant="info" onClick={handleClick}>
                        บันทึก
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
