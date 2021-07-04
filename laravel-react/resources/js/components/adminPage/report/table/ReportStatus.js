import React from "react";
import { Badge } from "react-bootstrap";

const ReportStatus = (_status,t) => {

    switch (_status) {

        case "pending":
            return (
                <Badge pill variant="info">
                    {t('documentStatus.pending')}
                </Badge>
            );
        case "cancelled":
            return (
                <Badge pill variant="warning">
                    {t('documentStatus.cancelled')}
                </Badge>
            );
        case "edited":
            return (
                <Badge pill variant="warning">
                    {t('documentStatus.edited')}
                </Badge>
            );
        case "rejected":
            return (
                <Badge pill variant="danger">
                    {t('documentStatus.reject')}
                </Badge>
            );
        case "approved":
            return (
                <Badge pill variant="success">
                    {t('documentStatus.success')}
                </Badge>
            );
        default:
            return null;
    }
};

export default ReportStatus;
