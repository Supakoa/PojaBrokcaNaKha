export const columns = t => {
    return [
        {
            label: "#",
            field: "row_id",
            sort: "asc",
            width: 50
        },
        {
            label:t("document.code"),
            field: "code",
            width: 120
        },
        {
            label: t("students.table.columns.status"),
            field: "status_badge",
            sort: "asc",
            width: 120
        },
        {
            label: t("students.table.columns.form"),
            field: "form_name",
            sort: "desc",
            width: 320
        },
        {
            label: t("students.table.columns.create"),
            field: "created_at_converted",
            sort: "desc",
            width: 200
        },
        {
            label: t("students.table.columns.edit"),
            field: "updated_at_converted",
            sort: "desc",
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
