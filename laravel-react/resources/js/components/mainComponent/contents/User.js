import React, { Component } from "react";
import { Card } from "react-bootstrap";
import TableUser from "./userComponent/Table";
import ModalUser from "./modalCRUD/ModalUser";

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Card>
                <Card.Header className="text-center">
                    <Card.Title className="p-2">สมาชิก</Card.Title>
                </Card.Header>
                <Card.Body className="w-100">
                    <div className="text-right justify-content-end">
                        <ModalUser type={true} />
                    </div>

                    <TableUser />
                </Card.Body>
            </Card>
        );
    }
}
