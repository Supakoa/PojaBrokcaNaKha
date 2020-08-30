import React from "react";
import { Alert } from "react-bootstrap";

const ListMeassges = ({ data, onRight, name }) => {
    return (
        <Alert
            variant={onRight ? "info" : "ligth"}
            className={`py-1 px-1 w-75 row d-table ${
                onRight ? `float-right` : `floate-left`
            }`}
        >
            <p className="mb-0 px-2">
                <strong>
                    {onRight ? (
                        <>
                            <i className="fas fa-reply"></i>{" "}
                            <span>{!!name ? "Admin" : "me"}</span>
                        </>
                    ) : (
                        <>
                            {" "}
                            <i className="fas fa-inbox"></i>{" "}
                            <span>{!!name ? name : "Admin"}</span>{" "}
                        </>
                    )}
                </strong>
            </p>
            <hr className="my-1 " />
            <p className="px-4">{data.message} </p>
        </Alert>
    );
};

export default ListMeassges;
