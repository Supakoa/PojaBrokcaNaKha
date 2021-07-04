import React from "react";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function TimeZone() {
    const { t } = useTranslation();
    const [_date, setDate] = React.useState({
        date: new Date()
    });

    React.useEffect(() => {
        // const abortController = new AbortController();
        const date = setInterval(() => setDate({ date: new Date() }), 1 * 1000);
        return () => {
            clearInterval(date);
            // abortController.abort();
        };
    }, []);

    return (
        <Card>
            <Card.Header>
                <Card.Title>{t("day&time")}</Card.Title>
            </Card.Header>
            <Card.Body className="d-flex justify-content-around">
                <h4>{_date.date.toLocaleDateString()}</h4>
                <h4>{_date.date.toLocaleTimeString()}</h4>
                <h4>
                    <i className="far fa-clock"></i>
                </h4>
            </Card.Body>
        </Card>
    );
}
