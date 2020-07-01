import React from "react";
import { Card } from "react-bootstrap";

export default function TimeZone() {
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
                <Card.Title>วัน / เวลา</Card.Title>
            </Card.Header>
            <Card.Body className="d-flex justify-content-around">
                <h2>{_date.date.toLocaleDateString()}</h2>
                <h2>{_date.date.toLocaleTimeString()}</h2>
            </Card.Body>
        </Card>
    );
}
