import React from "react";
import { Card } from "react-bootstrap";
import {useTranslation} from 'react-i18next';

export default function TimeZone() {
    const {t, i18n, ready} = useTranslation('', {useSuspense: false});
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
                <h2>{_date.date.toLocaleDateString()}</h2>
                <h2>{_date.date.toLocaleTimeString()}</h2>
            </Card.Body>
        </Card>
    );
}
