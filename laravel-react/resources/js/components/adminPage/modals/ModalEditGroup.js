import React, { useState, useEffect, useRef } from "react";
import {
    Button,
    Modal,
    Form,
    Container,
    Col,
    Row,
    Card,
    Table,
    Badge,
    ListGroup
} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import MaterialTable from "material-table";
import AddUser from "../group/modal/AddUser";
import Axios from "axios";
import { updateShowUsers } from "../../../redux/actions";
import { useSelector } from "react-redux";
import { first } from "lodash";
import ModalNewGroup from "../group/modal/ModalNewGroup";
import Swal from "sweetalert2";
import AddSubject from "../group/modal/AddSubject";
import { Chip } from "@material-ui/core";

const ModalEditGroup = ({ isCreateProps, response }) => {
    // local state
    const [show, setShow] = React.useState(false);
    const [modalHidden, setModalHidden] = useState(false);
    const { t } = useTranslation("", { useSuspense: false });
    const [table, setTable] = React.useState({
        columns: [
            { title: "วิชา", field: "subject" },
            {
                title: "ID",
                field: "userId",
                render: item => (
                    <Badge className="p-2" pill variant="primary">
                        {item.userId}
                    </Badge>
                )
            },
            { title: "คำนำหน้า", field: "titleName" },
            { title: "ชื่อ", field: "firstName" },
            { title: "นามสกุล", field: "lastName" }
        ],
        data: []
    });
    const [showGroupUsers, setShowGroupUsers] = useState(null);
    const [groupDetail, setgroupDetail] = useState({
        th_name: "",
        eng_name: "",
        type: ""
    });
    const [resultSubjects, setResultSubjects] = useState(null);

    // redux
    const redux_showSubjects = useSelector(state => state.showSubjects);

    //local variable
    const refAddSubject = useRef();
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        // timerProgressBar: true,
        onOpen: toast => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        }
    });

    // function
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const initState = response => {
        updateTableColumn();
        getGroupUser(response);
        setupGroupDetail();
    };

    const setupGroupDetail = () => {
        setgroupDetail({
            th_name: response.th_name,
            eng_name: response.eng_name,
            type: response.type
        });
    };

    const updateTableColumn = () => {
        if (groupDetail.type == "normal") {
            setTable({
                ...table,
                columns: [
                    {
                        title: "ID",
                        field: "userId",
                        render: item => (
                            <Badge className="p-2" pill variant="primary">
                                {item.userId}
                            </Badge>
                        )
                    },
                    { title: "คำนำหน้า", field: "titleName" },
                    { title: "ชื่อ", field: "firstName" },
                    { title: "นามสกุล", field: "lastName" }
                ]
            });
        } else {
            setTable({
                ...table,
                columns: [
                    { title: "วิชา", field: "subjectName" },
                    {
                        title: "ID",
                        field: "userId",
                        render: item => (
                            <Badge className="p-2" pill variant="primary">
                                {item.userId}
                            </Badge>
                        )
                    },
                    { title: "คำนำหน้า", field: "titleName" },
                    { title: "ชื่อ", field: "firstName" },
                    { title: "นามสกุล", field: "lastName" }
                ]
            });
        }
    };

    const getGroupUser = response => {
        // console.log("response", response);
        setTimeout(() => {
            setResultSubjects(response.subjects_id);
            setShowGroupUsers(response.users);
        }, Math.max((response.users.length + 1) * 20, 500));
        // Axios.get(`http://localhost:8000/api/groups/${response.id}/users`, {
        //     headers: {
        //         Authorization: `Bearer ${localStorage.getItem("_authLocal")}`,
        //     }
        // }).then(res => {
        //     setResultSubjects(res.data.subjects_id)
        //     setShowGroupUsers(res.data.success)
        // })
    };

    const updateShowUsersTable = () => {
        if (showGroupUsers) {
            let tmp_showGroupUsers = [...showGroupUsers];

            tmp_showGroupUsers = showGroupUsers.map(item => {
                let tmp_selectSubject = [...redux_showSubjects.data];
                tmp_selectSubject = tmp_selectSubject.find(filterItem => {
                    return filterItem.id == item.pivot.subject_id;
                });

                if (typeof tmp_selectSubject == "undefined") {
                    return {
                        titleName: item.title,
                        firstName: item.first_name,
                        lastName: item.last_name,
                        userId: item.id,
                        subject: null,
                        subjectName: null
                    };
                } else {
                    return {
                        titleName: item.title,
                        firstName: item.first_name,
                        lastName: item.last_name,
                        userId: item.id,
                        subject: tmp_selectSubject.id,
                        subjectName: tmp_selectSubject.th_name
                    };
                }
            });

            setTable({
                ...table,
                data: [...tmp_showGroupUsers]
            });
        }
    };

    const deleteGroupUser = async item => {
        // searcch delete data
        let tmp_deleteVal = [...item.data];
        tmp_deleteVal = tmp_deleteVal.find(i => {
            return i.tableData.editing == "delete";
        });

        if (groupDetail.type == "normal") {
            await Axios.delete(`http://localhost:8000/api/groups/${response.id}/users`, {
                data: {
                    user_id: tmp_deleteVal.userId,
                    subject_id: 0,
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("_authLocal")}`,
                }
            }).then(res => {
                if (res.status == 200) {
                    Toast.fire({
                        icon: "success",
                        title: "ลบผู้ตรวจสำเร็จ"
                    });
                } else {
                    Toast.fire({
                        icon: "warning",
                        title: "เกิดข้อผิดพลาดในการลบผู้ตรวจ"
                    });
                }
            });
        } else {
            // search delete subject od this data
            let tmp_subjectId = redux_showSubjects.data.find(i => {
                return i.id == tmp_deleteVal.subject;
            });

            tmp_subjectId = tmp_subjectId.id;

            await Axios.delete(
                `http://localhost:8000/api/groups/${response.id}/users`,
                {
                    data: {
                        user_id: tmp_deleteVal.userId,
                        subject_id: tmp_subjectId
                    },
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "_authLocal"
                        )}`
                    }
                }
            )
                .then(res => {
                    let tmp_resultSubject = resultSubjects.find(i => {
                        return tmp_deleteVal.subject == i;
                    });
                    let tmp_resultGroupUsers = table.data.filter(j => {
                        return j.userId != tmp_deleteVal.userId;
                    });
                    tmp_resultGroupUsers = tmp_resultGroupUsers.filter(k => {
                        return k.subject == tmp_subjectId;
                    });
                    if (
                        !tmp_resultSubject &&
                        tmp_resultGroupUsers.length == 0
                    ) {
                        tmp_resultSubject = [
                            ...resultSubjects,
                            tmp_deleteVal.subject
                        ];
                        setResultSubjects(tmp_resultSubject);
                    }

                    if (res.status == 200) {
                        Toast.fire({
                            icon: "success",
                            title: "ลบผู้ตรวจสำเร็จ"
                        });
                    } else {
                        Toast.fire({
                            icon: "warning",
                            title: "เกิดข้อผิดพลาดในการลบผู้ตรวจ"
                        });
                    }

                    return true;
                })
                .catch(error => {
                    return false;
                });
        }
    };

    const sendToSelectUserComponent = item => {
        refAddSubject.current.sendSubjectData(item);
    };

    // useEffect
    useEffect(() => {
        const abort = new AbortController();
        initState(response, { signal: abort.signal });

        // willmount
        return () => {
            abort.abort();
        };
    }, [response]);

    useEffect(() => {
        updateShowUsersTable();
    }, [showGroupUsers]);

    useEffect(() => {
        updateTableColumn();
    }, [groupDetail]);

    // function return component
    const returnByGroupType = () => {
        if (response.type == "normal") {
            return (
                <AddUser
                    setTable={setTable}
                    table={table}
                    groupUsers={table.data}
                    group={response}
                    setModalHidden={setModalHidden}
                />
            );
        } else {
            return (
                <AddSubject
                    resultSubjects={resultSubjects}
                    setResultSubjects={setResultSubjects}
                    ref={refAddSubject}
                    setTable={setTable}
                    table={table}
                    groupUsers={table.data}
                    group={response}
                    setModalHidden={setModalHidden}
                />
            );
        }
    };

    const ResultNotUseSubject = () => {
        let tmp_resultSubject = redux_showSubjects.data;

        if (resultSubjects && response.type == "subject") {
            tmp_resultSubject = resultSubjects.map(i => {
                return redux_showSubjects.data.find(j => {
                    return i == j.id;
                });
            });
        }

        const mapToComponent = () => {
            return tmp_resultSubject.map((item, idx) => {
                return (
                    <Chip
                        onClick={() => sendToSelectUserComponent(item)}
                        className="pt-1 mr-2 mt-2"
                        clickable
                        key={idx}
                        label={item.th_name}
                    />
                );
            });
        };

        if (response.type != "normal") {
            return (
                <Card className="mt-3 pt-1 pb-2">
                    <Container className="mb-1">
                        วิชาที่ยังไม่ได้เลือก: {tmp_resultSubject.length} วิชา
                    </Container>
                    <hr className="mt-0 mb-0" />
                    <Container className="ml-2 mr-2 p-0">
                        {mapToComponent()}
                    </Container>
                </Card>
            );
        } else {
            return <></>;
        }
    };

    return (
        <>
            <Button variant="warning" size="sm" onClick={handleShow}>
                {"จัดการกลุ่ม"}
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
                            <Col className="p-0">
                                <Card className="ml-0 mt-3 mr-3">
                                    {/* table */}
                                    <MaterialTable
                                        title={"👥"}
                                        columns={table.columns}
                                        data={table.data}
                                        localization={{
                                            body: {
                                                editRow: {
                                                    deleteText: "ยืนยันการลบ"
                                                }
                                            }
                                        }}
                                        icons={{
                                            Add: props => {
                                                if (
                                                    props.action.icon === "save"
                                                ) {
                                                    return (
                                                        <Button
                                                            onClick={event =>
                                                                props.action.onClick(
                                                                    event,
                                                                    props.data
                                                                )
                                                            }
                                                            color="primary"
                                                            variant="contained"
                                                            style={{
                                                                textTransform:
                                                                    "none"
                                                            }}
                                                            size="small"
                                                        >
                                                            My Button
                                                        </Button>
                                                    );
                                                }
                                            }
                                        }}
                                        editable={{
                                            onRowDelete: oldData =>
                                                new Promise(resolve => {
                                                    setTimeout(() => {
                                                        resolve();
                                                        setTable(prevState => {
                                                            let isSuccess = deleteGroupUser(
                                                                prevState
                                                            );
                                                            if (isSuccess) {
                                                                const data = [
                                                                    ...prevState.data
                                                                ];
                                                                data.splice(
                                                                    data.indexOf(
                                                                        oldData
                                                                    ),
                                                                    1
                                                                );
                                                                return {
                                                                    ...prevState,
                                                                    data
                                                                };
                                                            }
                                                        });
                                                    }, 600);
                                                })
                                        }}
                                    />
                                </Card>
                            </Col>
                            <Col className="pl-0 pr-0">
                                <Card className="mt-3 pt-3">
                                    <Form.Group>
                                        <Container>
                                            <Form.Label>
                                                ชื่อกลุ่มภาษาไทย
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={groupDetail.th_name}
                                                disabled
                                            />
                                        </Container>
                                    </Form.Group>
                                    <Form.Group controlId="formEngGroupName">
                                        <Container>
                                            <Form.Label>
                                                ชื่อกลุ่มภาษาอังกฤษ
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={groupDetail.eng_name}
                                                disabled
                                            />
                                        </Container>
                                    </Form.Group>
                                    <hr className="mt-0 mb-0" />
                                    <Form.Group className="mt-2">
                                        <Container>
                                            <Form.Label>ประเภทกลุ่ม</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={groupDetail.type}
                                                disabled
                                            />
                                        </Container>
                                    </Form.Group>
                                </Card>
                                <Card
                                    className="mt-3"
                                    style={{ border: "none" }}
                                >
                                    {returnByGroupType()}
                                    <ModalNewGroup
                                        groupDetail={groupDetail}
                                        setgroupDetail={setgroupDetail}
                                        setModalHidden={setModalHidden}
                                        res={response}
                                        isCreateProps={false}
                                    />
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="pl-0 pr-0">
                                <ResultNotUseSubject />
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        {t("close")}
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
