import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Container, Col, Row, Card, Table, Badge } from "react-bootstrap";
import {useTranslation} from 'react-i18next';
import MaterialTable from "material-table";
import AddUser from "../group/modal/AddUser";
import Axios from "axios";
import { updateShowUsers } from "../../../redux/actions";
import { useSelector } from "react-redux";
import { first } from "lodash";
import ModalNewGroup from "../group/modal/ModalNewGroup";

const ModalEditGroup = (props) => {
    // props
    const { isCreateProps, response } = props

    // local state
    const [show, setShow] = React.useState(false);
    const [modalHidden, setModalHidden] = useState(false)
    const {t} = useTranslation('', {useSuspense: false});
    const [table, setTable] = React.useState({
        columns: [
            { title: 'วิชา', field: 'subject' },
            {
                title: 'ID',
                field: 'userId',
                render: item => <Badge className="p-2" pill variant="primary">{item.userId}</Badge>,
            },
            { title: 'คำนำหน้า', field: 'titleName' },
            { title: 'ชื่อ', field: 'firstName' },
            { title: 'นามสกุล', field: 'lastName' },
        ],
        data: [],
    });
    const [showGroupUsers, setShowGroupUsers] = useState(null)

    // redux
    const redux_showSubjects = useSelector(state => state.showSubjects)

    //local variable

    // function
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const initState = () => {
        updateTableColumn()
        getGroupUser()
    }

    const updateTableColumn = () => {
        if (response.type == "normal") {
            setTable({
                ...table,
                columns: [
                    {
                        title: 'ID',
                        field: 'userId',
                        render: item => <Badge className="p-2" pill variant="primary">{item.userId}</Badge>,
                    },
                    { title: 'คำนำหน้า', field: 'titleName' },
                    { title: 'ชื่อ', field: 'firstName' },
                    { title: 'นามสกุล', field: 'lastName' },
                ]
            })
        }
    }

    const getGroupUser = () => {
        Axios.get(`http://localhost:8000/api/groups/${response.id}/users`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(
                    "_authLocal"
                )}`
            }
        }).then(res => {
            setShowGroupUsers(res.data.success)
        })
    }

    const updateShowUsersTable = () => {
        if (showGroupUsers) {
            let tmp_showGroupUsers = new Array()
            tmp_showGroupUsers = [...showGroupUsers]

            tmp_showGroupUsers = tmp_showGroupUsers.map(item => {
                let tmp_selectSubject = new Array()
                tmp_selectSubject = [...redux_showSubjects.data]
                tmp_selectSubject = tmp_selectSubject.filter(filterItem => {
                    return filterItem.id == item.pivot.subject_id
                })
                tmp_selectSubject = first(tmp_selectSubject)

                if (typeof tmp_selectSubject == "undefined") {
                    return {
                        titleName: item.title,
                        firstName: item.first_name,
                        lastName: item.last_name,
                        userId: item.id,
                    }
                } else {
                    return {
                        titleName: item.title,
                        firstName: item.first_name,
                        lastName: item.last_name,
                        userId: item.id,
                        subject: tmp_selectSubject.th_name
                    }
                }
            })

            setTable({
                ...table,
                data: [...tmp_showGroupUsers]
            })
        }
    }

    const deleteGroupUser = (item) => {
        console.log('deleteGroupUser')
        console.log('item.data', item.data)
        let tmp_deleteVal = [...item.data]
        tmp_deleteVal = tmp_deleteVal.find(i => {
            return i.tableData.editing == "delete"
        })
        console.log('tmp_deleteVal', tmp_deleteVal)

    }

    // useEffect
    useEffect(() => {
        const abort = new AbortController();
        initState()

        // willmount
        return () => {
            abort.abort();
        };
    }, [])

    useEffect(() => {
        updateShowUsersTable()
    }, [showGroupUsers])

    // function return component

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
                                <Card className="ml-0 mt-3 mr-3">
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
                                                            deleteGroupUser(prevState)
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
                                    <AddUser setTable={setTable} table={table} groupUsers={table.data} group={response} setModalHidden={setModalHidden} />
                                    <ModalNewGroup setModalHidden={setModalHidden} res={response} isCreateProps={false} />
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
