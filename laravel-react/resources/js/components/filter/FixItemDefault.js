import React from "react";
import { Dropdown, Button } from "react-bootstrap";
import { IconCheck } from "./iconCheck";

const FixItemDefault = ({ onSelect, setSort }) => {
    return (
        <>
            <Dropdown.Item
                as={Button}
                name="all"
                drop="right"
                className="d-flex align-items-center justify-content-between"
                onClick={setSort}
            >
                <strong name="all">All</strong>
                <IconCheck isSort={onSelect === "all"} />
            </Dropdown.Item>
            <Dropdown.Item
                as={Button}
                name="approve"
                drop="right"
                className="d-flex align-items-center justify-content-between"
                onClick={setSort}
            >
                <strong name="approve">Approve</strong>
                <IconCheck isSort={onSelect === "approve"} />
            </Dropdown.Item>
            <Dropdown.Item
                as={Button}
                name="pending"
                drop="right"
                className="d-flex align-items-center justify-content-between"
                onClick={setSort}
            >
                <strong name="pending">Pending</strong>
                <IconCheck isSort={onSelect === "pending"} />
            </Dropdown.Item>
            <Dropdown.Item
                as={Button}
                name="cancel"
                drop="right"
                className="d-flex align-items-center justify-content-between"
                onClick={setSort}
            >
                <strong name="cancel">cancel</strong>
                <IconCheck isSort={onSelect === "cancel"} />
            </Dropdown.Item>
            <Dropdown.Item
                as={Button}
                name="edit"
                drop="right"
                className="d-flex align-items-center justify-content-between"
                onClick={setSort}
            >
                <strong name="edit">Edit</strong>
                <IconCheck isSort={onSelect === "edit"} />
            </Dropdown.Item>
        </>
    );
};

export default FixItemDefault;
