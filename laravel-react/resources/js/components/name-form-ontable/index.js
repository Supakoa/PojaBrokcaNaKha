import React from "react";
import { useTranslation } from "react-i18next";

const NameFormOnTable = ({ thName, engName }) => {
    const { i18n } = useTranslation();
    return <span>{i18n.language === "th" ? thName : engName}</span>;
};

export default NameFormOnTable;
