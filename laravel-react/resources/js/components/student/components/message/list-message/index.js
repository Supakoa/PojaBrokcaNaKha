import React from "react";
import { Alert, Col } from "react-bootstrap";

const ListMessages = ({ data, isSender, name }) => {
    const _large = isSender ? { span: 8, offset: 4 } : 8;
    const _mid = isSender ? { span: 9, offset: 3 } : 9;
    const _small = isSender ? { span: 10, offset: 3 } : 10;
    return (
        <Col className="p-0" sm={_small} md={_mid} lg={_large}>
            <Alert
                variant={!isSender ? "ligth" : "info"}
                className={`py-1 px-1 d-table w-100 ${isSender ? `text-right` : `text-left`}` }
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
                <p
                    className="px-2 text-break mb-0"
                    style={{ fontSize: "16px" }}
                >
                    {data.message}{" "}
                </p>
            </Alert>
        </Col>
    );
};

export default ListMessages;
