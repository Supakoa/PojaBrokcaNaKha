export const column = () => {
    return [
        {
            label: "#",
            field: "id",
            sort: "desc",
            width: 50
        },
        {
            label: "ชื่อไทย",
            field: "th_name",
            width: 140
        },
        {
            label: "ชื่ออังกฤษ",
            field: "eng_name",
            width: 140
        },
        {
            label: "ประเภท",
            field: "type",
            width: 60,
            sort: "disabled"
        },
        {
            label: "รายชื่อ",
            field: "list",
            width: 150,
            sort: "disabled"
        },
        {
            field: "action",
            width: 60,
            sort: "disabled"
        }
    ];
};
