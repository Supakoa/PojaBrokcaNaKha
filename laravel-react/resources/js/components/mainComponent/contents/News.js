import React, { Component } from "react";
import { Card } from "react-bootstrap";
import ModalNews from "./modalCRUD/ModalNews";
import TableNews from "./newsComponent/Table";

export default class News extends Component {
    render() {
        return (
            <Card>
                <Card.Header className="text-center">
                    <Card.Title className="p-2">
                        ตั้งค่าข่าวประชาสัมพันธ์
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <ModalNews type={true} />
                    <TableNews />
                </Card.Body>
            </Card>
        );
    }
}
