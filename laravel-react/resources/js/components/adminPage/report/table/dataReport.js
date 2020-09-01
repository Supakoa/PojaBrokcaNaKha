import React from "react";
import ReportStatus from "./ReportStatus";
import ModalReport from "../../modals/ModalReport";
import {columns} from "./columns";
import {useTranslation} from 'react-i18next';
import Axios from "axios";
import ConvertDate from "../../../middleware/method/convertDate";
import mapDocuments from "./mapDocumentsData";

export default function dataReport() {
    const [rows, setRows] = React.useState([]);
    const {t,i18n} = useTranslation();





    const fetchRowData = async () => {
        let response = [];
        response = await Axios.get(`http://localhost:8000/api/documents`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(
                    "_authLocal"
                )}`
            }
        }).then(res => {
            return res.data
        }).catch(e => {
            return []
        });
        setRows(mapDocuments(response,t,i18n));
        // console.log(_rows);

    };

    React.useEffect(() => {
        const abort = new AbortController();
        fetchRowData();
        return () => {
            abort.abort();
        };
    }, []);

    return {
        "columns": columns([t('document.form'), t('sender'), t('document.creat'), t('document.update'), t('document.status')]),
        rows
    };
}
