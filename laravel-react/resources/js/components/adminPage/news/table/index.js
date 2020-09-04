import React from "react";
import dataNewsTable from "./dataNewsTable";
import { MDBDataTable } from "mdbreact";
import { useTranslation } from "react-i18next";

export default function TableNews({ paging }) {
    const _data = dataNewsTable();
    const { t } = useTranslation();

    return (
        <MDBDataTable
            noBottomColumns={true}
            entriesOptions={[5, 10, 15]}
            entries={10}
            displayEntries={paging}
            paging={paging}
            barReverse={true}
            borderless
            striped
            small
            hover
            scrollX
            data={_data}
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
        />
    );
}
