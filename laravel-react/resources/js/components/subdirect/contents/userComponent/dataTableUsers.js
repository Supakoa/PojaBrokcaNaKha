import React from "react";
import ModalUser from "../modalCRUD/Usercrud";
export const dataTableUser = () => {
    const columns = [
        {
            label: <ModalUser type={true} />,
            field: "action",
            sort: "disabled",
            width: 150
        },
        {
            label: "#",
            field: "id",
            sort: "desc",
            width: 50
        },
        {
            label: "ชื่อ - นามสกุล",
            field: "name",
            width: 200
        },
        {
            label: "ประเภท",
            field: "role",
            width: 120
        },
        {
            label: "อีเมล",
            field: "email",
            width: 150
        },
        {
            label: "เบอร์โทรศัพท์",
            field: "phone",
            width: 150
        },
        {
            label: "คณะ",
            field: "faculty",
            width: 150
        },
        {
            label: "สาขา",
            field: "major",
            width: 100
        }
    ];

    const [rows, setRows] = React.useState([]);

    return { columns, rows };
};
