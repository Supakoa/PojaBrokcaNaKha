import React from "react";

const FirstDot = ({ value, now, status }) => {
    if (now <= value && status === "cancelled") {
        return (
            <i
                style={{ fontSize: "50px" }}
                className="far fa-times-circle text-danger"
            ></i>
        );
    } else {
        return (
            <i
                style={{ fontSize: "50px" }}
                className={`far fa-check-circle ${
                    now === value ? `text-secondary` : `text-success`
                }`}
            ></i>
        );
    }
};

const colorSteps = status => {
    switch (status) {
        case "approved":
            return "bg-success";
        case "edited":
            return "bg-warning";
        case "cancelled":
            return "bg-danger";
        case "rejected":
            return "bg-danger";
        default:
            "bg-secondary";
    }
};

const DotBorder = ({ value, now, status }) => {
    return (
        <>
            <div
                style={{ height: "15px" }}
                className={`w-100 shadow rounded ${
                    now > value
                        ? `bg-success`
                        : status !== "pending"
                        ? colorSteps(status)
                        : `bg-secondary`
                }`}
            />
            {(now === value && status === "cancelled") ||
            (now === value && status === "rejected") ? (
                <i
                    style={{ fontSize: "50px" }}
                    className="far fa-times-circle text-danger"
                ></i>
            ) : (
                <div
                    style={{ height: "50px", minWidth: "50px" }}
                    className={`shadow rounded-circle text-center py-2 ${
                        now - 1 > value
                            ? `bg-success`
                            : status !== "pending"
                            ? colorSteps(status)
                            : `bg-secondary`
                    }`}
                >
                    <span style={{ fontSize: "20px" }} className="text-white">
                        {value + 1}
                    </span>
                </div>
            )}
        </>
    );
};

const StepProgress = ({ steps, stateNow, status }) => {
    let childrenDot = [];
    for (let index = 0; index < steps; index++) {
        if (index == 0) {
            childrenDot.push(
                <FirstDot
                    key={index}
                    value={index + 1}
                    now={stateNow}
                    status={status}
                />
            );
        } else {
            childrenDot.push(
                <DotBorder
                    key={index}
                    value={index}
                    now={stateNow}
                    status={status}
                />
            );
        }
    }

    return (
        <div className="w-100 d-flex align-items-center justify-content-around">
            {childrenDot}
        </div>
    );
};

export default StepProgress;
