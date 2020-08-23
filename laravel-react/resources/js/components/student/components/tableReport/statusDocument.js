import React from "react";
import { Badge } from "react-bootstrap";

const StatusBadgeDoc = ({ status }) => {
    switch (status) {
        case "pending":
            return (
                <Badge variant="info" pill>
                    {status}
                </Badge>
            );
        case "cancel":
            return (
                <Badge variant="warning" pill>
                    {status}
                </Badge>
            );
        case "reject":
            return (
                <Badge variant="danger" pill>
                    {status}
                </Badge>
            );
        case "approve":
            return (
                <Badge variant="success" pill>
                    {status}
                </Badge>
            );

        default:
            return "-";
    }
};

export default StatusBadgeDoc;
