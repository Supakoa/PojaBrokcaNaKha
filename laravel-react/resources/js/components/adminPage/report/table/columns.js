export const columns = arrays => {
    return [
        {
            label: "#",
            field: "id",
            sort: "desc",
            width: 20
        },
        {
            label: arrays[4],
            field: "status",
            sort: "disabled",
            width: 100
        },
        {
            label: arrays[5],
            field: "code",
            width: 120
        },
        {
            label: arrays[0],
            field: "typeForm",
            width: 350
        },
        {
            label: arrays[1],
            field: "sender",
            width: 200
        },
        {
            label: arrays[2],
            field: "sendTime",
            width: 250
        },
        {
            label: arrays[3],
            field: "editTime",
            width: 250
        },
        {
            field: "action",
            sort: "disabled",
            width: 200
        }
    ];
};
