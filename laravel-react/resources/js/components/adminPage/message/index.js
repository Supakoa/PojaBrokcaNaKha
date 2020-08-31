import React, { Component } from "react";
import { Card } from "react-bootstrap";
import TemplateMessage from "./TemplateMessage";

export default class Messages extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card>
                <Card.Header className="text-center">
                    <Card.Title className="p-2">
                        {this.props.t("menu.message")}{" "}
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <TemplateMessage />
                </Card.Body>
            </Card>
        );
    }
}
