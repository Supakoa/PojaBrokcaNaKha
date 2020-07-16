export const columns = [
    {
        label: "#",
        field: "id",
        sort: "asc",
        width: 50
    },
    {
        label: "สถานะ",
        field: "state",
        sort: "asc",
        width: 120
    },
    {
        label: "สถานะการดำเนินการ",
        field: "status",
        sort: "asc",
        width: 200
    },
    {
        label: "แบบคำร้อง",
        field: "form_id",
        sort: "asc",
        width: 250
    },
    {
        label: "วันที่สร้าง",
        field: "created_at",
        sort: "asc",
        width: 250
    },
    {
        label: "วันที่แก้ไข",
        field: "updated_at",
        sort: "asc",
        width: 250
    },
    {
        label: "วันที่ยกเลิก",
        field: "canceled_at",
        sort: "asc",
        width: 250
    },
    {
        label: "ผู้ยกเลิก",
        field: "user_cancel_id",
        sort: "asc",
        width: 200
    },
    {
        label: "หมายเหตุ",
        field: "note",
        sort: "asc",
        width: 200
    }
];
