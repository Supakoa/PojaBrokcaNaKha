import { Badge } from "react-bootstrap";
import React from "react";
import { data } from "./testData";

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
            width: 150
        },
        {
            label: "เวลาส่ง",
            field: "sendTime",
            width: 120
        },
        {
            label: "แก้ไขล่าสุด",
            field: "editTime",
            width: 120
        },
        {
            label: "สถานะ",
            field: "status",
            sort: "disabled",
            width: 150
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
                status: ReportStatus(res.status)
            };
            return response;
        });
        console.log(_rows);

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

const ReportStatus = _status => {
    switch (_status) {
        case 0:
            return (
                <Badge pill variant="info">
                    กำลังดำเนินการ...
                </Badge>
            );
        case 1:
            return (
                <Badge pill variant="warning">
                    แก้ไข
                </Badge>
            );
        case 2:
            return (
                <Badge pill variant="danger">
                    ไม่ผ่าน
                </Badge>
            );
        case 3:
            return (
                <Badge pill variant="success">
                    สำเร็จ
                </Badge>
            );
        default:
            return null;
    }
};
