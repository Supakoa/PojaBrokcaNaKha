import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";
import ProfileForm from "./ProfileForm";

export default class Profile extends Component {
    render() {
        return (
            <Card>
                <Card.Title className="bg-info text-light text-center">
                    <Card.Header>ประวัติส่วนตัว</Card.Header>
                </Card.Title>
                <Card.Body>
                    <Container>
                        <ProfileForm />
                    </Container>
                </Card.Body>
            </Card>
        );
    }
}
