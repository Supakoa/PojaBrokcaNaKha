import React from "react";
import { Button, Container, Modal, Col, Row, Card } from "react-bootstrap";
import { InputNumber } from "./components/stepReport/InputNumber";
import { StepColors } from "./components/stepReport/StepColors";

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
    const { response } = props;
    const [modalShow, setModalShow] = React.useState(false);
    const [_stepColors, setStepColors] = React.useState(0);
    const modalStyle = { overflowY: "hidden" };

    React.useEffect(() => {
        const abort = new AbortController();

        return () => {
            abort.abort();
        };
    }, [_stepColors]);

    return (
        <>
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
                        <Card.Body>
                            <StepColors numberStep={_stepColors} />
                        </Card.Body>
                        <div className="text-center align-middle">
                            <InputNumber setColors={setStepColors} />
                        </div>
                    </Card>
                </Modal.Body>
                <Modal.Footer className="d-block"></Modal.Footer>
            </Modal>
        </>
    );
}
