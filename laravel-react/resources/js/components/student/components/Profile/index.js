import React from "react";
import { Card, Container } from "react-bootstrap";
import ProfileForm from "./profileForm";
import { FacultiesContext } from "../../context";
import axios from "axios";
import { _urlFaculties } from "../../../middleware/apis";
import Loading from "../loading";
import { useTranslation } from "react-i18next";

export default function Profile() {
    const [_faculties, setFaculties] = React.useState([]);
    const [_loading, setLoading] = React.useState(true);
    const abort = new AbortController();
    const { t } = useTranslation();

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
                <Card.Header>{t("students.navbar-top.profile")}</Card.Header>
            </Card.Title>
            <Card.Body>
                {_loading ? (
                    <Container className="d-flex align-items-center justify-content-center">
                        <Loading />
                    </Container>
                ) : (
                    <Container>
                        <FacultiesContext.Provider value={_faculties}>
                            <ProfileForm />
                        </FacultiesContext.Provider>
                    </Container>
                )}
            </Card.Body>
        </Card>
    );
}
