import React, { Component } from "react";
import { Card, Container, Spinner } from "react-bootstrap";
import ProfileForm from "./ProfileForm";
import { ProfileContext, FacultiesContext } from "../../context";
import axios from "axios";

function LoadingComponent() {
    return (
        <Container className="d-flex align-items-center justify-content-center">
            <Spinner animation="grow" variant="info" />
        </Container>
    );
}

function FormProfileComponent(props) {
    const { valueProfile, valueFaculties } = props;
    return (
        // <ProfileContext.Provider value={valueProfile}>
        <Container>
            <FacultiesContext.Provider value={valueFaculties}>
                <ProfileForm />
            </FacultiesContext.Provider>
        </Container>
        // </ProfileContext.Provider>
    );
}

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            faculties: [],
            loading: true,
            error: []
        };

        // this.fetchUserProfile = this.fetchUserProfile.bind(this);
        this.fatchFaculties = this.fetchFaculties.bind(this);
    }

    // async fetchUserProfile() {
    //     await axios
    //         .post(`http://localhost:8000/api/user`, localStorage._authLocal, {
    //             headers: {
    //                 Authorization: `Bearer ${localStorage._authLocal}`,
    //                 "Content-Type": "application/json",
    //                 "Retry-After": 3600
    //             }
    //         })
    //         .then(res => {
    //             const item = res.data.success;
    //             // console.log(item);
    //             this.setState({
    //                 ...this.state,
    //                 user: item
    //             });
    //             // return item;
    //         });
    // }
    async fetchFaculties() {
        await axios.get(`http://127.0.0.1:8000/api/faculties`, {}).then(res => {
            const { success } = res.data;
            this.setState({
                ...this.state,
                faculties: success
            });
        });
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                ...this.state,
                loading: false
            });
        }, 1000);
        // this.fetchUserProfile();
        this.fetchFaculties();
    }

    componentWillMount() {
        clearTimeout();
    }

    render() {
        return (
            <Card>
                <Card.Title className="bg-info text-light text-center">
                    <Card.Header>ประวัติส่วนตัว</Card.Header>
                </Card.Title>
                <Card.Body>
                    {this.state.loading ? (
                        <LoadingComponent />
                    ) : (
                        <FormProfileComponent
                            // valueProfile={this.state.user}
                            valueFaculties={this.state.faculties}
                        />
                    )}
                </Card.Body>
            </Card>
        );
    }
}
