import React from "react";
import { Badge } from "react-bootstrap";

const ReportStatus = _status => {
    switch (_status) {
        case 0:
            return (
                <Badge pill variant="info">
                    กำลังดำเนินการ...
                </Badge>
            );
        case 1:
            return (
                <Badge pill variant="warning">
                    แก้ไข
                </Badge>
            );
        case 2:
            return (
                <Badge pill variant="danger">
                    ไม่ผ่าน
                </Badge>
            );
        case 3:
            return (
                <Badge pill variant="success">
                    สำเร็จ
                </Badge>
            );
        default:
            return null;
    }
};

export default ReportStatus;
