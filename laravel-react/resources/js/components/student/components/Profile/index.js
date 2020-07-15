import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";
import ProfileForm from "./profileForm";
import { FacultiesContext } from "../../context";
import axios from "axios";
import { _urlFaculties } from "../../../middleware/apis";
import Loading from "../loading";

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
        await axios.get(_urlFaculties(), {}).then(res => {
            const { success } = res.data;
            this.setState({
                ...this.state,
                faculties: success,
                loading: false
            });
        });
    }

    componentDidMount() {
        this.fetchFaculties();
    }

    render() {
        return (
            <Card>
                <Card.Title className="bg-info text-light text-center">
                    <Card.Header>ประวัติส่วนตัว</Card.Header>
                </Card.Title>
                <Card.Body>
                    {this.state.loading ? (
                        <Container className="d-flex align-items-center justify-content-center">
                            <Loading />
                        </Container>
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
