import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ButtonShowDoc = ({ url, id }) => {
    const { i18n } = useTranslation();
    return (
        <Link className="btn btn-sm btn-info" to={`${url}/show/${id}`}>
            {i18n.language === "th" ? "แสดง" : "show"}{" "}
            <i className="fas fa-edit"></i>
        </Link>
    );
};

export default ButtonShowDoc;
