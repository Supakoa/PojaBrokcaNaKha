import React from "react";
import { dataTest } from "./dataTest";
import ColumsAction from "./ColumnsAction";
import { columns } from "./columns";

export default function dataTableStepReport() {
    const [rows, setRows] = React.useState([]);

    const fetchRowData = _rows => {
        const _row = _rows.map((res, idx) => {
            const _response = {
                id: res.id,
                name: res.name,
                code: res.code,
                action: ColumsAction(idx, res)
            };
            return _response;
        });
        return _row;
    };

    React.useEffect(() => {
        const abort = new AbortController();
        const _row = fetchRowData(dataTest, { signal: abort.signal });
        setRows(_row);
        return () => {
            abort.abort();
        };
    }, []);
    return { columns, rows };
}
