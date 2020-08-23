import React from "react";
import { dataTest } from "./dataTest";
import ColumsAction from "./ColumnsAction";
import { columns } from "./columns";
import Axios from "axios";

export default function dataTableStepReport() {
    const [rows, setRows] = React.useState([]);

    const pathGetForms = `http://localhost:8000/api/forms`

    const fetchRowData = _rows => {
        const _row = _rows.map((res, idx) => {
            const _response = {
                id: res.id,
                name: res.th_name,
                all_state: res.all_state,
                // code: res.code,
                action: ColumsAction(idx, res)
            };
            return _response;
        });
        return _row;
    };

    const initShowStepReports = async () => {
        const showForms = await Axios.get(pathGetForms).then(res => {
            return res.data
        })

        setRows(fetchRowData(showForms));
    }

    React.useEffect(() => {
        const abort = new AbortController();
        initShowStepReports({ signal: abort.signal })


        return () => {
            abort.abort();
        };
    }, []);
    return { columns, rows };
}
