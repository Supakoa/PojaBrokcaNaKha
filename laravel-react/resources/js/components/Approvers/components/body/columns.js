export const columns = [
    {
        label: "#",
        field: "row_id",
        sort: "asc",
        width: 50
    },
    {
        label: "สถานะ",
        field: "status_badge",
        sort: "asc",
        width: 120
    },
    {
        label: "แบบคำร้อง",
        field: "form_name",
        sort: "asc",
        width: 320
    },
    {
        label: "วันที่สร้าง",
        field: "created_at_converted",
        sort: "asc",
        width: 200
    },
    {
        label: "วันที่แก้ไข",
        field: "updated_at_converted",
        sort: "asc",
        width: 200
    },
    {
        label: "action",
        field: "action",
        sort: "disabled",
        width: 100
    }
];
