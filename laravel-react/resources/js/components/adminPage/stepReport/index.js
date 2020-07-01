import React, { Component } from "react";
import { Card } from "react-bootstrap";
import StepTable from "./table";

export default class StepReport extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Card>
                <Card.Header className="text-center">
                    <Card.Title className="p-2">ขั้นตอนเอกสาร</Card.Title>
                </Card.Header>
                <Card.Body>
                    <StepTable />
                </Card.Body>
            </Card>
        );
    }
}
