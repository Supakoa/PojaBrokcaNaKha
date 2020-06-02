import React from "react";
import { Card, Alert } from "react-bootstrap";

export default function AlertMessage() {
    return (
        <Card>
            <Card.Header>
                <Card.Title>ข้อความ</Card.Title>
            </Card.Header>
            <Card.Body className="p-1">
                {[
                    "primary",
                    "secondary",
                    "success",
                    "danger",
                    "warning",
                    "info",
                    "light",
                    "dark"
                ].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                        This is a {variant} alert with{" "}
                        <Alert.Link href="#">an example link</Alert.Link>. Give
                        it a click if you like.
                    </Alert>
                ))}
            </Card.Body>
        </Card>
    );
}
