import React, { Component } from "react";
import { Card } from "react-bootstrap";
// import TableNews from "./table";
import TableGroups from "./table";
// import ModalGroup from '../modals/ModalGroup';
import ModalNewGroup from "./modal/ModalNewGroup";

export default class Group extends Component {

    render() {
        return (
            <Card>
                <Card.Header className="text-center">
                    <Card.Title className="p-2">
                         {/* {this.props.t('pr.index')} */}
                         ตั้งค่ากลุ่ม
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    {/* <ModalGroup isCreateProps={ true } /> */}
                    <ModalNewGroup />
                    <TableGroups />
                </Card.Body>
            </Card>
        );
    }
}
