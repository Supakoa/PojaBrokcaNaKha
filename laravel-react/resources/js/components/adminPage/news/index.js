import React, { Component } from "react";
import { Card } from "react-bootstrap";
import ModalNews from "./../modals/ModalNews";
import TableNews from "./table";

export default class News extends Component {
    render() {
        return (
            <Card>
                <Card.Header className="text-center">
                    <Card.Title className="p-2">
                         {this.props.t('pr.index')}
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <ModalNews isCreateProps={ true } />
                    <TableNews />
                </Card.Body>
            </Card>
        );
    }
}
