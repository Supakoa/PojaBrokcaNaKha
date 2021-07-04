export const columns = t => {
    return [
        {
            label: "#",
            field: "row_id",
            sort: "asc",
            width: 50
        }, {
            label:t("document.code"),
            field: "code",
            width: 120
        },
        {
            label: t("approvers.table.columns.status"),
            field: "status_badge",
            sort: "asc",
            width: 120
        },
        {
            label: t("approvers.table.columns.form"),
            field: "form_name",
            sort: "asc",
            width: 320
        },
        {
            label: t("approvers.table.columns.name_sender"),
            field: "from_user",
            sort: "asc",
            width: 250
        },
        {
            label: t("approvers.table.columns.create"),
            field: "created_at_converted",
            sort: "asc",
            width: 200
        },
        {
            label: "",
            field: "action",
            sort: "disabled",
            width: 100
        }
    ];
};
