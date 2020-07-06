import React, { Component } from "react";
import { Card, Container, Spinner } from "react-bootstrap";
import ProfileForm from "./ProfileForm";
import { FacultiesContext } from "../../context";
import axios from "axios";

function LoadingComponent() {
    return (
        <Container className="d-flex align-items-center justify-content-center">
            <Spinner animation="grow" variant="info" />
        </Container>
    );
}

function FormProfileComponent(props) {
    const { valueFaculties } = props;
    return (
        <Container>
            <FacultiesContext.Provider value={valueFaculties}>
                <ProfileForm />
            </FacultiesContext.Provider>
        </Container>
    );
}

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faculties: [],
            loading: true,
            error: []
        };
        this.fatchFaculties = this.fetchFaculties.bind(this);
    }

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
                            valueFaculties={this.state.faculties}
                        />
                    )}
                </Card.Body>
            </Card>
        );
    }
}
