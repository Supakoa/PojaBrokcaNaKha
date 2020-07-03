import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";
import ProfileForm from "./ProfileForm";
import { ProfileContext } from "../../context";
import axios from "axios";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            error: []
        };

        this.fetchUserProfile = this.fetchUserProfile.bind(this);
    }

    async fetchUserProfile() {
        await axios
            .post(`http://localhost:8000/api/user`, localStorage._authLocal, {
                headers: {
                    Authorization: `Bearer ${localStorage._authLocal}`,
                    "Content-Type": "application/json",
                    "Retry-After": 3600
                }
            })
            .then(res => {
                const item = res.data.success;
                // console.log(item);
                this.setState({
                    ...this.state,
                    user: item
                });
                // return item;
            });
    }

    componentDidMount() {
        this.fetchUserProfile();
    }

    render() {
        return (
            <ProfileContext.Provider value={this.state.user}>
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
            </ProfileContext.Provider>
        );
    }
}
