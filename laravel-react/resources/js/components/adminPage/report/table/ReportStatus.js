import React from "react";
import { Badge } from "react-bootstrap";

const ReportStatus = (_status,t) => {

    switch (_status) {

        case 0:
            return (
                <Badge pill variant="info">
                    {t('documentStatus.pending')}
                </Badge>
            );
        case 1:
            return (
                <Badge pill variant="warning">
                    {t('documentStatus.cencel')}
                </Badge>
            );
        case 2:
            return (
                <Badge pill variant="danger">
                    {t('documentStatus.reject')}
                </Badge>
            );
        case 3:
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
