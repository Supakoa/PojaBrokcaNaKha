import React, {Component} from 'react';
import {Card} from "react-bootstrap";
import VerticalTabs from "./component/Tabs";


export default class InBox extends Component {
    render() {
        return (
            <Card>
                <Card.Header className="text-center">
                    <Card.Title className="p-2">
                        ข้อความเข้า
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <VerticalTabs/>
                </Card.Body>
            </Card>
        );
    }
}

