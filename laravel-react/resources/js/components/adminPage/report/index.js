import React, { Component } from "react";
import { Card } from "react-bootstrap";
import TableReport from "./table";

export default class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stauts: true
        };
    }

    render() {
        return (
            <Card>
                <Card.Header className="text-center">
                    <Card.Title className="p-2">แบบฟอร์มทั้งหมด</Card.Title>
                </Card.Header>
                <Card.Body>
                    <TableReport />
                </Card.Body>
            </Card>
        );
    }
}
