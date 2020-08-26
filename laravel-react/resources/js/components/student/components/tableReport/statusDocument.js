import React from "react";
import { Badge } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import wordShow from "../../../filter/showMyWord";

const StatusBadgeDoc = ({ status }) => {
    const { t } = useTranslation();
    switch (status) {
        case "pending":
            return (
                <Badge variant="info" pill>
                    <i className="fas fa-tasks"></i> {wordShow(status, t)}
                </Badge>
            );
        case "cancelled":
            return (
                <Badge variant="danger" pill>
                    <i className="fas fa-ban"></i> {wordShow(status, t)}
                </Badge>
            );
        case "edited":
            return (
                <Badge variant="warning" className="text-white" pill>
                    <i className="fas fa-edit"></i> {wordShow(status, t)}
                </Badge>
            );
        case "rejected":
            return (
                <Badge variant="danger" pill>
                    <i className="fas fa-backspace"></i> {wordShow(status, t)}
                </Badge>
            );
        case "approved":
            return (
                <Badge variant="success" pill>
                    <i className="fas fa-thumbs-up"></i> {wordShow(status, t)}
                </Badge>
            );

        default:
            return "-";
    }
};

export default StatusBadgeDoc;
