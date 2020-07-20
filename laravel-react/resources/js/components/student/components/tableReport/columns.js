export const columns = [
    {
        label: "#",
        field: "id",
        sort: "asc",
        width: 50
    },
    {
        label: "สถานะ",
        field: "status",
        sort: "asc",
        width: 120
    },
    {
        label: "แบบคำร้อง",
        field: "form_id",
        sort: "asc",
        width: 320
    },
    {
        label: "วันที่สร้าง",
        field: "created_at",
        sort: "asc",
        width: 200
    },
    {
        label: "วันที่แก้ไข",
        field: "updated_at",
        sort: "asc",
        width: 200
    },
    {
        label: "หมายเหตุ",
        field: "note",
        sort: "asc",
        width: 200
    },
    {
        label: "action",
        field: "action",
        sort: "disabled",
        width: 250
    }
];
