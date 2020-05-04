import React, {Component} from 'react';
import {connect} from 'react-redux';
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

                </Card.Body>
            </Card>
        );
    }
}
