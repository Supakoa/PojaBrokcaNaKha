export const columns = _t => {
    return [
        {
            label: "#",
            field: "id",
            sort: "desc",
            width: 20
        },
        {
            label: _t("pr.link"),
            field: "url",
            width: 270
        },
        {
            label: _t("pr.image"),
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
};
