import React, { Component } from "react";
import { Card, Button, Form } from "react-bootstrap";
import TableUser from "./table";
import ModalUser from "../modals/ModalUser";
import Axios from "axios";
import { newsActions } from "../../../redux/actions";
import Swal from "sweetalert2";
// import fileDownload from "js-file-download";
export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.exportUsers = this.exportUsers.bind(this);
        this.importUsers = this.importUsers.bind(this);
        this.templateUser = this.templateUser.bind(this);
    }
    templateUser() {
        //  Axios.get("http://localhost:8000/api/users/import", {
        //     headers: {
        //         Authorization: `Bearer ${localStorage.getItem(
        //             "_authLocal"
        //         )}`
        //     }
        // }).then(async res => {
        //      console.log(res.data)
        //
        //      fileDownload(res.data, 'templateUser.xlsx');
        // });
    }
    exportUsers() {
        //      Axios.get("http://localhost:8000/api/users/export", {
        //         headers: {
        //             Authorization: `Bearer ${localStorage.getItem(
        //                 "_authLocal"
        //             )}`
        //         }
        //     }).then(async res => {
        //          console.log(res.data)
        //          fileDownload(res.data, 'exportUsers.xlsx');
        //     });
    }

    async importUsers(e) {
        console.log(e.target.files[0]);
        let formData = new FormData();
        formData.append("file", e.target.files[0]);

        Axios.post("http://localhost:8000/api/users/import", formData, {
            headers: {
                Authorization: `Bearer ${localStorage._authLocal}`,
                "Content-Type": "application/json",
                "Retry-After": 3600
            }
        }).then(res => {
            if (res.status == 200) {
                Swal.fire("success", "import Success", "success");
            }
        });
    }

    render() {
        return (
            <Card>
                <Card.Header className="text-center">
                    <Card.Title className="p-2">
                        {this.props.t("menu.users")}
                    </Card.Title>
                </Card.Header>
                <Card.Body className="w-100">
                    <div className="w-100 d-table align-items-center justify-content-end py-2">
                        <Form.Group>
                            <Form.Label>import file</Form.Label>
                            <Form.File
                                className="position-relative"
                                name="file"
                                onChange={this.importUsers}
                                id="validationFormik107"
                            />
                        </Form.Group>

                        <a
                            className="btn btn- mx-2"
                            size="sm"
                            variant="info"
                            href={"../api/users/export"}
                            onClick={this.exportUsers}
                        >
                            <i className="fas fa-file-export"></i> Export
                        </a>
                        <a
                            className="mx-2"
                            href={"../api/users/import"}
                            size="sm"
                            variant="secondary"
                            onClick={this.templateUser}
                        >
                            <i className="far fa-file"></i> Template
                        </a>
                    </div>
                    <div className="text-right justify-content-end">
                        <ModalUser isCreatedProp={true} />
                    </div>
                    <TableUser paging={true} />
                </Card.Body>
            </Card>
        );
    }
}
