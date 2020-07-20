import React, { Component } from "react";
import { Card } from "react-bootstrap";
import TableUser from "./table";
import ModalUser from "../modals/ModalUser";

export default class User extends Component {
    

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Card>
                <Card.Header className="text-center">
                    <Card.Title className="p-2">{this.props.t('menu.users')}</Card.Title>
                </Card.Header>
                <Card.Body className="w-100">
                    <div className="text-right justify-content-end">
                        <ModalUser isCreatedProp={true} />
                    </div>
                    <TableUser />
                </Card.Body>
            </Card>
        );
    }
}
