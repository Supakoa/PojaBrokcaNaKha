import React, { useEffect, useState } from "react";
import { Button, Container, Modal, Col, Row, Card } from "react-bootstrap";
import { InputNumber } from "../stepReport/InputNumber";
import { StepColors } from "../stepReport/StepColors";
import { useSelector, useDispatch } from 'react-redux'
import { chipGroupAction } from "../../../redux/actions";
import Axios from "axios";

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
    // prop
    const { response, step } = props;

    // state
    const [modalShow, setModalShow] = React.useState(false);
    const [_stepColors, setStepColors] = React.useState(0);
    const [groupSteps, setGroupSteps] = useState([])

    // redux
    const redux_chipGroup = useSelector(state => state.chipGroup)
    // FIXME: not to use now
    const redux_showForms = useSelector(state => state.showForm)
    const dispatch = useDispatch()

    // local variable
    const modalStyle = { overflowY: "hidden" };

    // function
    const initState = () => {
        // console.log('response ModalStepReport:', response)
        // console.log('redux_showForms', redux_showForms)
    }

    const handleCloseButton = () => {
        setModalShow(false)
    }

    // FIXME: not to use
    // const sendDataToDB = () => {
    //     console.log('sendDataToDB')
    //     console.log('redux_chipGroup', redux_chipGroup)
    // }

    const initGroupStep = async () => {
        let tmp_chipGroupVal = new Array()
        redux_showForms.data.map(i => {
            tmp_chipGroupVal.push(i.groups)
        })

        setGroupSteps(tmp_chipGroupVal)
    }

    const initNumberStep = () => {
        if (response.all_state > 0 || response.all_state != null) {
            setStepColors(response.all_state)
        }
    }

    useEffect(() => {
        initState()
        initGroupStep()
        initNumberStep()
    }, [])

    // React.useEffect(() => {
    //     const abort = new AbortController();

    //     return () => {
    //         abort.abort();
    //     };
    // }, []);

    return (
        <>
            <Button
                variant="warning"
                name="btnEdit"
                className="text-light"
                onClick={() => setModalShow(true)}
            >{"ตั้งค่าขั้นตอนเอกสาร"}</Button>

            {/* hidden modal :: why it render? */}
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                aria-labelledby="modal-edit-step"
                size="lg"
                backdrop="static"
                animation
                centered
            >
                <Modal.Header>
                    <Modal.Title>ตั้งค่าเส้นทางเอกสาร</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>ลำดับขั้นทั้งหมด: </Col>
                            <Col>{_stepColors}</Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col>ชื่อฟอร์มเอกสาร: </Col>
                            <Col>{response.th_name}</Col>
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
                            <Container>
                                <StepColors step={step} setModalShow={setModalShow} setGroupSteps={setGroupSteps} groupSteps={groupSteps} response={response} numberStep={_stepColors} />
                            </Container>
                        </Card.Body>
                        <div className="text-center align-middle">
                            <InputNumber response={response} setGroupSteps={setGroupSteps} groupSteps={groupSteps} setColors={setStepColors} />
                        </div>
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={handleCloseButton}
                    >{"ปิด"}</Button>

                    {/* <Button
                        variant="primary"
                        onClick={e => sendDataToDB()}
                    >{"บันทึก"}</Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}
