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
            field: "url",
            width: 270
        },
        {
            label: arrays[1],
            field: "images",
            width: 200,
            sort: "disabled"
        },
        {
            
            field: "action",
            width: 100,
            sort: "disabled"
        }
    ];
} ;
