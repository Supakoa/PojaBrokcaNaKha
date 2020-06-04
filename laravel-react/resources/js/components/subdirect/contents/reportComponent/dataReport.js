export function dataReport() {
    const columns = [
        {
            label: "#",
            field: "id",
            width: 20
        },
        {
            label: "เรื่อง",
            field: "name",
            sort: "desc",
            width: 150
        },
        {
            label: "เวลาสร้าง",
            field: "sendTime",
            width: 120
        },
        {
            label: "เวลาแก้ไข",
            field: "editTime",
            sort: "disabled",
            width: 120
        },
        {
            label: "สถานะ",
            field: "status",
            sort: "disabled",
            width: 150
        }
    ];

    return { columns };
}
