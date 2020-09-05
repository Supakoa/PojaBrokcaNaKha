import React, { Component } from "react";
import { Card, Button, Form } from "react-bootstrap";
import TableUser from "./table";
import ModalUser from "../modals/ModalUser";
import Axios from "axios";
import { newsActions } from "../../../redux/actions";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import {_URL} from "../../middleware/URL";
// import fileDownload from "js-file-download";
export default function User({ t }) {
    const { i18n } = useTranslation();
    const [nameFile, setNameFile] = React.useState("");

    const importUsers = async e => {
        let formData = new FormData();
        formData.append("file", e.target.files[0]);
        setNameFile(e.target.files[0].name);
        Axios.post(`${_URL}/api/users/import`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage._authLocal}`,
                "Content-Type": "application/json",
                "Retry-After": 3600
            }
        }).then(res => {
            if (res.status == 200) {
                Swal.fire("success", "import Success", "success");
            } else {
                Swal.fire("Error", "import Error", "error");
            }
        });
    };

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
                            name="file"
                            onChange={importUsers}
                            id="validationFormik107"
                        ></Form.File>
                    </Form.Group>

                    <div className="w-100 d-flex align-items-center justify-content-end py-2">
                        <ModalUser isCreatedProp={true} />

                        <a
                            className="btn btn-sm btn-secondary text-light mx-2"
                            size="sm"
                            variant="info"
                            href={"../api/users/export"}
                            // onClick={this.exportUsers}
                        >
                            <i className="fas fa-file-export"></i>{" "}
                            {i18n.language === "th" ? "นำออก" : "Export"}
                        </a>
                        <a
                            className="btn btn-sm btn-secondary text-light mx-2"
                            href={"../api/users/import"}
                            size="sm"
                            variant="secondary"
                            // onClick={this.templateUser}
                        >
                            <i className="far fa-file"></i>{" "}
                            {i18n.language === "th" ? "รูปแบบ" : "Template"}
                        </a>
                    </div>
                </div>

                <TableUser paging={true} />
            </Card.Body>
        </Card>
    );
}
