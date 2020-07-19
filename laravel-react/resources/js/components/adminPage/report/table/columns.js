export const columns = arrays => {
    return [
        {
            label: "#",
            field: "id",
            sort: "desc",
            width: 20
        },
        {
            label: arrays[0],
            field: "typeForm",
            width: 150
        },
        {
            label: arrays[1],
            field: "sender",
            width: 250
        },
        {
            label: arrays[2],
            field: "sendTime",
            width: 150
        },
        {
            label: arrays[3],
            field: "editTime",
            width: 150
        },
        {
            label: arrays[4],
            field: "status",
            sort: "disabled",
            width: 150
        },
        {
            
            field: "action",
            sort: "disabled",
            width: 200
        }
    ];
};

