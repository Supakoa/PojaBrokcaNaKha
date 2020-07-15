import React from "react";
import { Spinner } from "react-bootstrap";
const Loading = () => {
    return (
        <div className="d-flex align-items-center justify-content-center mr-5">
            <Spinner animation="grow" variant="dark" size="sm" />
            <Spinner animation="grow" variant="dark" size="sm" />
            <Spinner animation="grow" variant="dark" size="sm" />
        </div>
    );
};

export default Loading;
