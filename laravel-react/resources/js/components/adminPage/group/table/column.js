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
            width: 240,
            sort: "desc"
        },
        {
            label: "ชื่ออังกฤษ",
            field: "eng_name",
            width: 240,
            sort: "desc"
        },
        {
            label: "ประเภท",
            field: "type",
            width: 100,
            sort: "disabled"
        },
        {
            field: "action",
            width: 260,
            sort: "disabled"
        }
    ];
};
