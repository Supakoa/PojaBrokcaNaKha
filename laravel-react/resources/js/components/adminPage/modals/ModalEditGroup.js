import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Container, Col, Row, Card, Table, Badge } from "react-bootstrap";
import {useTranslation} from 'react-i18next';
import MaterialTable from "material-table";
import AddUser from "../group/modal/AddUser";

const ModalEditGroup = (props) => {
    const { isCreateProps, response } = props

    const [show, setShow] = React.useState(false);
    const [modalHidden, setModalHidden] = useState(false)
    const {t} = useTranslation('', {useSuspense: false});
    const [table, setTable] = React.useState({
        columns: [
            {
                title: 'ID',
                field: 'birthCity',
                render: item => <Badge className="p-2" pill variant="primary">{item.birthCity}</Badge>,
            },
            { title: 'คำนำหน้า', field: 'name' },
            { title: 'ชื่อ', field: 'surname' },
            { title: 'นามสกุล', field: 'birthYear' },
            { title: 'วิชา', field: 'subject' },
        ],
        data: [
          { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
          {
            name: 'Zerya Betül',
            surname: 'Baran',
            birthYear: 2017,
            birthCity: 34,
          },
        ],
    });

    // redux

    //local variable


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // function

    useEffect(() => {
        const abort = new AbortController();

        // willmount
        return () => {
            abort.abort();
        };
    }, [])

    return (
        <>
            <Button variant="warning" size="sm" onClick={handleShow}>
                { "จัดการกลุ่ม" }
            </Button>

            <Modal
                show={show}
                onHide={() => handleClose}
                hidden={modalHidden}
                aria-labelledby="modal-user"
                size="lg"
                backdrop="static"
                animation
                scrollable
                centered
            >
                <Modal.Header>
                    <Modal.Title>จัดการข้อมูลกลุ่ม</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col className="p-0" >
                                <Card className="m-3">
                                    {/* table */}
                                    <MaterialTable
                                        title={"👥"}
                                        columns={table.columns}
                                        data={table.data}
                                        localization={{
                                            body: {
                                                editRow: {
                                                    deleteText: 'ยืนยันการลบ'
                                                }
                                            }
                                        }}
                                        icons={{
                                            Add: props => {
                                                if(props.action.icon === 'save'){
                                                    return(
                                                        <Button
                                                        onClick={(event) => props.action.onClick(event, props.data)}
                                                        color="primary"
                                                        variant="contained"
                                                        style={{textTransform: 'none'}}
                                                        size="small"
                                                        >
                                                        My Button
                                                        </Button>
                                                    )
                                                }
                                            }
                                        }}
                                        editable={{
                                            onRowDelete: (oldData) =>
                                                new Promise((resolve) => {
                                                    setTimeout(() => {
                                                        resolve();
                                                        setTable((prevState) => {
                                                            const data = [...prevState.data];
                                                            data.splice(data.indexOf(oldData), 1);
                                                            return { ...prevState, data };
                                                        });
                                                    }, 600);
                                            }),
                                        }}
                                    />
                                </Card>
                            </Col>
                            <Col className="pl-0 pr-0">
                                <Card className="mt-3 pt-3" >
                                    <Form.Group>
                                        <Container>
                                            <Form.Label>ชื่อกลุ่มภาษาไทย</Form.Label>
                                            <Form.Control type="text" value={response.th_name} disabled />
                                        </Container>
                                    </Form.Group>
                                    <Form.Group controlId="formEngGroupName">
                                        <Container>
                                            <Form.Label>ชื่อกลุ่มภาษาอังกฤษ</Form.Label>
                                            <Form.Control type="text" value={response.eng_name} disabled />
                                        </Container>
                                    </Form.Group>
                                    <hr className="mt-0 mb-0" />
                                    <Form.Group className="mt-2" >
                                        <Container>
                                            <Form.Label>ประเภทกลุ่ม</Form.Label>
                                            <Form.Control type="text" value={response.type} disabled />
                                        </Container>
                                    </Form.Group>
                                </Card>
                                <Card className="mt-3" style={{border: "none"}} >
                                    <AddUser group={response} setModalHidden={setModalHidden} />
                                    <Button className="mt-3" >{"แก้ไขข้อมูลกลุ่ม"}</Button>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        {t('close')}
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        {"บันทึก"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalEditGroup;
