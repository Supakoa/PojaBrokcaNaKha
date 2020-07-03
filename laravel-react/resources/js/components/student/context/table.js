export const table = {
    columns: [
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
            field: "reports",
            sort: "asc",
            width: 150
        },
        {
            label: "สถานะการดำเนินการ",
            field: "statusSteps",
            sort: "asc",
            width: 150
        },
        {
            label: "หมายเหตุ",
            field: "comments",
            sort: "asc",
            width: 150
        }
    ],
    rows: [
        {
            id: 1,
            status: "nop",
            reports: "eieieieiei",
            statusSteps: "12312",
            comments: "get out"
        }
    ]
};
