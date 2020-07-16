import React from "react";
import { Card, Alert } from "react-bootstrap";
import {useTranslation} from 'react-i18next';

export default function AlertReport() {
    const {t, i18n, ready} = useTranslation('', {useSuspense: false});
    return (
        <Card>
            <Card.Header>
                <Card.Title>{t("document.index")}</Card.Title>
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
