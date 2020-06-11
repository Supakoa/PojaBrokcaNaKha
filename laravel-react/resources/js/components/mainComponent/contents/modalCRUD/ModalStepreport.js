import React from "react";
import {
    Button,
    Container,
    Modal,
    Col,
    Row,
    Card,
    Form
} from "react-bootstrap";
import { StepColors } from "./components/stepReport/StepColors";
// import Swal from "sweetalert2";

export function StepAdd(props) {
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            aria-labelledby="modal-add-step"
            size="sm"
            backdrop="static"
            animation
            centered
        ></Modal>
    );
}

export function ModalStepReport(props) {
    // console.log(props);
    const { response } = props;
    const [modalShow, setModalShow] = React.useState(false);
    const [_stepColors, setStepColors] = React.useState([]);
    const modalStyle = { overflowY: "hidden" };

    return (
        <div>
            <Button
                variant="warning"
                name="btnEdit"
                size="sm"
                className="text-light"
                onClick={() => setModalShow(true)}
            >
                แก้ไข
            </Button>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                aria-labelledby="modal-edit-step"
                size="lg"
                backdrop="static"
                animation
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>ตั้งค่าเส้นทางเอกสาร</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>รหัสฟอร์มเอกสาร: </Col>
                            <Col>{response.code}</Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col>ชื่อฟอร์มเอกสาร: </Col>
                            <Col> {response.name}</Col>
                        </Row>
                    </Container>
                    <hr />
                    <Card className="p-2">
                        <Card.Header>
                            <Card.Title style={modalStyle}>
                                เส้นทางเอกสาร
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>{StepColors(_stepColors)}</Card.Body>
                    </Card>
                </Modal.Body>
                <Modal.Footer className="d-block">
                    <div className="text-center align-middle">
                        <InputNumber />
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

const InputNumber = props => {
    const [inputNumber, setInputNumber] = React.useState(false);
    const handleClick = () => {};
    const handleChange=(e)=>{
        const {value, name} = e.target
        console.log(value);

    }
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
                            type="number"
                            placeholder="ใส่จำนวนตัวเลข"
                            name="numberStep"
                            onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                            ควรใส่จำนวนเป็นตัวเลข.
                        </Form.Text>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
