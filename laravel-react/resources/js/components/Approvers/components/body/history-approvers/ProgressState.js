import React from "react";
import { ProgressBar } from "react-bootstrap";

const ProgressState = ({ max, now }) => {
    return (
        <div className="d-flex align-items-center justify-content-between py-2">
            <span>
                <i className="fas fa-tasks"></i>{" "}
            </span>
            <div className="w-100 px-2">
                <ProgressBar
                    animated
                    variant="success"
                    now={(now / max) * 100 - max}
                    label={`${"สถานะเอกสาร"} ${(
                        (now / max) * 100 -
                        max
                    ).toFixed(0)}%`}
                />
            </div>
        </div>
    );
};

export default ProgressState;
