import React from "react";
import { Button } from "react-bootstrap";
import { data } from "./testData";
import ReportStatus from "./ReportStatus";
import { columns } from "./columns";

export default function dataReport() {
    const [rows, setRows] = React.useState([]);

    const fetchRowData = _data => {
        const _rows = _data.map(res => {
            // console.log(res);

            const response = {
                id: res.id,
                typeForm: res.typeForm,
                sender: res.sender,
                sendTime: res.start,
                editTime: res.end,
                status: ReportStatus(res.status),
                action: (
                    <Button
                        key={res.id}
                        variant="warning"
                        size="sm"
                        onClick={console.log("eiei")}
                    >
                        ตรวจสอบ
                    </Button>
                )
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
    }, []);

    return { columns, rows };
}
