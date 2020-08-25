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
                    {wordShow(status, t)}
                </Badge>
            );
        case "cancel":
            return (
                <Badge variant="danger" pill>
                    {wordShow(status, t)}
                </Badge>
            );
        case "edit":
            return (
                <Badge variant="warning" className="text-white" pill>
                    {wordShow(status, t)}
                </Badge>
            );
        case "reject":
            return (
                <Badge variant="danger" pill>
                    {wordShow(status, t)}
                </Badge>
            );
        case "approve":
            return (
                <Badge variant="success" pill>
                    {wordShow(status, t)}
                </Badge>
            );

        default:
            return "-";
    }
};

export default StatusBadgeDoc;
