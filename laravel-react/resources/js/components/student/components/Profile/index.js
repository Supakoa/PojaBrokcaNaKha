import React from "react";
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

export default function Profile() {
    const [_faculties, setFaculties] = React.useState([]);
    const [_loading, setLoading] = React.useState(true);
    const abort = new AbortController();
    // const [_error, setError] = React.useState([]);

    const fetchFaculties = async () => {
        await axios.get(_urlFaculties(), {}).then(res => {
            const { success } = res.data;
            setFaculties(success);
            setLoading(false);
        });
    };

    React.useEffect(() => {
        if (_faculties.length === 0) {
            fetchFaculties({ signal: abort.signal });
        }
    }, [_faculties]);

    React.useEffect(() => {
        return () => {
            abort.abort();
        };
    }, []);

    return (
        <Card>
            <Card.Title className="bg-info text-light text-center">
                <Card.Header>ประวัติส่วนตัว</Card.Header>
            </Card.Title>
            <Card.Body>
                {_loading ? (
                    <Container className="d-flex align-items-center justify-content-center">
                        <Loading />
                    </Container>
                ) : (
                    <FormProfileComponent valueFaculties={_faculties} />
                )}
            </Card.Body>
        </Card>
    );
}
