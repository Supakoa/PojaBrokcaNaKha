import React from "react";
import { Alert } from "react-bootstrap";

const ListMessages = ({ data, isSender, name }) => {
    return (
        <Alert
            variant={!isSender ? "ligth" : "info"}
            className={`py-1 px-1 w-75 row d-table ${
                isSender ? `float-right` : `floate-left`
            }`}
        >
            <p className="mb-0 px-2">
                <strong>
                    <i hidden={!isSender} className="fas fa-reply"></i>
                    <i
                        hidden={(isSender && !name) || (isSender && !!name)}
                        className={
                            !isSender && !name
                                ? "fas fa-user-shield"
                                : "fas fa-paper-plane"
                        }
                    ></i>{" "}
                    {isSender
                        ? !!name
                            ? "Admin"
                            : "Me"
                        : !isSender && !!name
                        ? name
                        : "Admin"}{" "}
                </strong>
            </p>
            <hr className="my-1 " />
            <p className="px-4 lead mb-0" style={{ fontSize: "16px" }}>
                {data.message}{" "}
            </p>
        </Alert>
    );
};

export default ListMessages;
