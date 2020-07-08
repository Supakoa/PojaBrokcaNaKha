export const columns = [
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
