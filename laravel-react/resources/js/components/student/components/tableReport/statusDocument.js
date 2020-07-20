import React from "react";
import { Badge } from "react-bootstrap";

const statusDoc = (_status, _idx) => {
    // console.log(_status);
    switch (_status) {
        case "pending":
            return (
                <Badge key={_idx} variant="info" pill>
                    {_status}
                </Badge>
            );
        case "cancel":
            return (
                <Badge key={_idx} variant="warning" pill>
                    {_status}
                </Badge>
            );
        case "reject":
            return (
                <Badge key={_idx} variant="danger" pill>
                    {_status}
                </Badge>
            );
        case "success":
            return (
                <Badge key={_idx} variant="success" pill>
                    {_status}
                </Badge>
            );

        default:
            return "-";
    }
};

export default statusDoc;
