import React from "react";
import { Dropdown, Button } from "react-bootstrap";
import { IconCheck } from "./iconCheck";
import { useTranslation } from "react-i18next";

const FixItemDefault = ({ onSelect, setSort }) => {
    const { t } = useTranslation();
    return (
        <>
            <Dropdown.Item
                as={Button}
                name="all"
                drop="right"
                className="d-flex align-items-center justify-content-between"
                onClick={setSort}
            >
                <strong name="all">{t("filter.all")}</strong>
                <IconCheck isSort={onSelect === "all"} />
            </Dropdown.Item>
            <Dropdown.Item
                as={Button}
                name="approved"
                drop="right"
                className="d-flex align-items-center justify-content-between"
                onClick={setSort}
            >
                <strong name="approve">{t("filter.approved")}</strong>
                <IconCheck isSort={onSelect === "approved"} />
            </Dropdown.Item>
            <Dropdown.Item
                as={Button}
                name="pending"
                drop="right"
                className="d-flex align-items-center justify-content-between"
                onClick={setSort}
            >
                <strong name="pending">{t("filter.pending")}</strong>
                <IconCheck isSort={onSelect === "pending"} />
            </Dropdown.Item>
            <Dropdown.Item
                as={Button}
                name="cancelled"
                drop="right"
                className="d-flex align-items-center justify-content-between"
                onClick={setSort}
            >
                <strong name="cancel">{t("filter.cancel")}</strong>
                <IconCheck isSort={onSelect === "cancelled"} />
            </Dropdown.Item>
            <Dropdown.Item
                as={Button}
                name="rejected"
                drop="right"
                className="d-flex align-items-center justify-content-between"
                onClick={setSort}
            >
                <strong name="cancel">{t("filter.reject")}</strong>
                <IconCheck isSort={onSelect === "rejected"} />
            </Dropdown.Item>
            <Dropdown.Item
                as={Button}
                name="edited"
                drop="right"
                className="d-flex align-items-center justify-content-between"
                onClick={setSort}
            >
                <strong name="edit">{t("filter.edit")}</strong>
                <IconCheck isSort={onSelect === "edited"} />
            </Dropdown.Item>
        </>
    );
};

export default FixItemDefault;
