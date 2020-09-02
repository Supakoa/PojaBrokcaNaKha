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
                    <Card.Title className="p-2">
                        {this.props.t("menu.documents")}
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <TableReport paging={true} />
                </Card.Body>
            </Card>
        );
    }
}
