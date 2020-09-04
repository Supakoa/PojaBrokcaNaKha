import React from "react";
import DataGroupTable from "./DataGroupTable";
import { MDBDataTable } from "mdbreact";
import { useTranslation } from "react-i18next";

export default function TableGroups({ groups, setGroups }) {
    const _data = DataGroupTable();
    const { t } = useTranslation();

    return (
        <MDBDataTable
            noBottomColumns={true}
            entriesLabel={t("students.table.header.pagination")}
            infoLabel={[
                t("students.table.footer.show"),
                "-",
                t("students.table.footer.of"),
                t("students.table.footer.list")
            ]}
            paginationLabel={[
                t("students.table.footer.prev"),
                t("students.table.footer.next")
            ]}
            searchLabel={t("students.table.header.search")}
            entriesOptions={[5, 10, 15]}
            entries={10}
            barReverse={true}
            borderless
            striped
            small
            hover
            scrollX
            data={_data}
        />
    );
}
