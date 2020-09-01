import React, { useState } from "react";
import { Card } from "react-bootstrap";
// import TableNews from "./table";
import TableGroups from "./table";
// import ModalGroup from '../modals/ModalGroup';
import ModalNewGroup from "./modal/ModalNewGroup";

export default function Group() {
    const [groups, setGroups] = useState([]);
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
                <ModalNewGroup isCreateProps={true}  groups = {groups} setGroups = {setGroups} />
                <TableGroups groups = {groups} setGroups = {setGroups} />
            </Card.Body>
        </Card>
    );
}
