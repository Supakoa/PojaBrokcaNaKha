import React, {Component} from 'react';
import VerticalTabs from "./component/Tabs";
import {Card} from "react-bootstrap";

export default class OutBox extends Component {
    render() {
        return (
            <Card>
                <Card.Header className="text-center">
                    <Card.Title className="p-2">
                        ข้อความออก
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <VerticalTabs/>
                </Card.Body>
            </Card>
        );
    }
}
