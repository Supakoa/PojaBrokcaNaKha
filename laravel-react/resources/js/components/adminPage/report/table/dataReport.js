import React from "react";
import { columns } from "./columns";
import { useTranslation } from "react-i18next";
import Axios from "axios";
import mapDocuments from "./mapDocumentsData";
import { _URL } from "../../../middleware/URL";

export default function dataReport() {
    const [rows, setRows] = React.useState([]);
    const { t, i18n } = useTranslation();

    const fetchRowData = async () => {
        let response = [];
        response = await Axios.get(`${_URL}/api/documents`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("_authLocal")}`
            }
        })
            .then(res => {
                return res.data;
            })
            .catch(e => {
                return [];
            });
        setRows(mapDocuments(response, t, i18n, setRows));
        // console.log(rows);
    };

    React.useEffect(() => {
        const abort = new AbortController();
        fetchRowData();
        return () => {
            abort.abort();
        };
    }, []);

    return {
        columns: columns([
            t("document.form"),
            t("sender"),
            t("document.creat"),
            t("document.update"),
            t("document.status"),
            t("document.code")
        ]),
        rows
    };
}
