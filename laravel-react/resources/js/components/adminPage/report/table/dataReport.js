import React from "react";
import { data } from "./testData";
import ReportStatus from "./ReportStatus";

export default function dataReport() {
    const columns = [
        {
            label: "#",
            field: "id",
            sort: "desc",
            width: 20
        },
        {
            label: "ประเภทคำร้อง",
            field: "typeForm",
            width: 150
        },
        {
            label: "ชื่อผู้ส่ง",
            field: "sender",
            width: 250
        },
        {
            label: "เวลาส่ง",
            field: "sendTime",
            width: 150
        },
        {
            label: "แก้ไขล่าสุด",
            field: "editTime",
            width: 150
        },
        {
            label: "สถานะ",
            field: "status",
            sort: "disabled",
            width: 150
        },
        {
            label: "Action",
            field: "action",
            sort: "disabled",
            width: 200
        }
    ];

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
                action: ""
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
