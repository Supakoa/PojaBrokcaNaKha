import React, { Component } from "react";
import { Card, Button, Image, Overlay, Popover } from "react-bootstrap";
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
                    <TableNews />
                </Card.Body>
            </Card>
        );
    }
}
