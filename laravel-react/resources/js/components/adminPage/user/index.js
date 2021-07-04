import React, { Component, useEffect } from "react";
import { Card, Button, Form, Spinner } from "react-bootstrap";
import TableUser from "./table";
import ModalUser from "../modals/ModalUser";
import Axios from "axios";
import {
    newsActions,
    initShowUsers,
    showFacultyAction
} from "../../../redux/actions";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
// import fileDownload from "js-file-download";
import { _URL } from "../../middleware/URL";
// import fileDownload from "js-file-download";

export default function User({ t }) {
    // import module
    const { i18n } = useTranslation();
    const [isSend, setIsSend] = React.useState(false);

    // props

    // local state
    const [nameFile, setNameFile] = React.useState("");

    // redux
    const dispatch = useDispatch();

    // local variable

    // function
    const templateUser = () => {
        Axios.get(`${_URL}/api/users/import`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("_authLocal")}`
            }
        }).then(async res => {
            console.log(res.data);

            fileDownload(res.data, "templateUser.xlsx");
        });
    };

    const exportUsers = () => {
        Axios.get(`${_URL}/api/users/export`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("_authLocal")}`
            }
        }).then(async res => {
            console.log(res.data);
            fileDownload(res.data, "exportUsers.xlsx");
        });
    };

    const importUsers = e => {
        let formData = new FormData();
        formData.append("file", e.target.files[0]);
        setNameFile(e.target.files[0].name);
        setIsSend(true);
        Axios.post(`${_URL}/api/users/import`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage._authLocal}`,
                "Content-Type": "application/json",
                "Retry-After": 3600
            }
        })
            .then(res => {
                if (res.status == 200) {
                    Swal.fire("success", "import Success", "success").then(() =>
                        setIssend(false)
                    );
                } else {
                    Swal.fire("Error", "import Error", "error").then(() =>
                        setIssend(false)
                    );
                }
            })
            .catch(() => setIssend(false));
        if(isSend) setIssend(false);
    };

    const initUsers = () => {
        Axios.get(`${_URL}/api/users`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("_authLocal")}`
            }
        }).then(res => {
            const { success } = res.data;
            dispatch(initShowUsers(success));
        });
    };

    const initShowFaculties = () => {
        Axios.get(`${_URL}/api/faculties`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("_authLocal")}`
            }
        }).then(res => {
            dispatch(showFacultyAction("INIT_SHOW_FACULTY", res.data.success));
        });
    };

    // useEffect
    useEffect(() => {
        initUsers();
        initShowFaculties();
    }, []);

    // return component

    // FIXME: not to use
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    //     this.exportUsers = this.exportUsers.bind(this);
    //     this.importUsers = this.importUsers.bind(this);
    //     this.templateUser = this.templateUser.bind(this);
    // }

    return (
        <Card>
            <Card.Header className="text-center">
                <Card.Title className="p-2">{t("menu.users")}</Card.Title>
            </Card.Header>
            <Card.Body className="w-100">
                <div className="d-flex align-items-center justify-content-between">
                    <Form.Group>
                        <Form.Label>
                            <i className="fas fa-file-import"></i>{" "}
                            {i18n.language === "th"
                                ? "นำเข้าไฟล์"
                                : "import file"}{" "}
                            - {nameFile}
                        </Form.Label>
                        <Form.File
                            // className="position-relative" TODO: not to use
                            name="file"
                            onChange={importUsers}
                            id="validationFormik107"
                        />
                        <Form.Text>
                            {isSend ? (
                                <span>
                                    <Spinner animation="border" size="sm" />{" "}
                                    {i18n.language === "th"
                                        ? "กำลังโหลดไฟล์..."
                                        : "File Loading..."}
                                </span>
                            ) : (
                                ""
                            )}
                        </Form.Text>
                    </Form.Group>

                    <div className="w-100 d-flex align-items-center justify-content-end py-2">
                        <ModalUser isCreatedProp={true} />

                        <a
                            className="btn btn-sm btn-secondary text-light mx-2"
                            size="sm"
                            variant="info"
                            href={"../api/users/export"}
                            onClick={exportUsers}
                        >
                            <i className="fas fa-file-export"></i>{" "}
                            {i18n.language === "th" ? "นำออก" : "Export"}
                        </a>

                        <a
                            className="btn btn-sm btn-secondary text-light mx-2"
                            href={"../api/users/import"}
                            size="sm"
                            variant="secondary"
                            onClick={templateUser}
                        >
                            <i className="far fa-file"></i>{" "}
                            {i18n.language === "th" ? "รูปแบบ" : "Template"}
                        </a>
                    </div>
                </div>

                <TableUser initUsers={initUsers} paging={true} />
            </Card.Body>
        </Card>
    );
}
