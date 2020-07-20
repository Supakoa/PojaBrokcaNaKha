import React from "react";
import { data } from "./testData";
import ReportStatus from "./ReportStatus";
import ModalReport from "../../modals/ModalReport";
import { columns } from "./columns";
import {useTranslation} from 'react-i18next';

export default function dataReport() {
    const [rows, setRows] = React.useState([]);
    const {t} = useTranslation('', {useSuspense: false});

    const fetchRowData = _data => {
        const _rows = _data.map(res => {
            // console.log(res);

            const response = {
                id: res.id,
                typeForm: res.typeForm,
                sender: res.sender,
                sendTime: res.start,
                editTime: res.end,
                status: ReportStatus(res.status,t),
                action: <ModalReport key={res.id} />
            };
            return response;
        });
        // console.log(_rows);

        return _rows;
    };

    React.useEffect(() => {
        const abort = new AbortController();
        const _row = fetchRowData(data, { signal: abort.signal });
        setRows(_row);
        return () => {
            abort.abort();
        };
    }, [t]);

    return {"columns" : columns([t('document.form'),t('sender'),t('document.creat'),t('document.update'),t('document.status')]) , rows };
}
