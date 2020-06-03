import React, { Component } from "react";
import { Card } from "react-bootstrap";
import TemplateMessage from "./messageComponent/TemplateMessage";

export default class InBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {
                    roleId: 3,
                    name: "supakit",
                    messages:
                        "Children prop should only contain a single child, and is enforced as such"
                }
            ]
        };
    }
    render() {
        return (
            <Card>
                <Card.Header className="text-center">
                    <Card.Title className="p-2">ข้อความเข้า</Card.Title>
                </Card.Header>
                <Card.Body>
                    <TemplateMessage data={this.state.messages} />
                </Card.Body>
            </Card>
        );
    }
}
