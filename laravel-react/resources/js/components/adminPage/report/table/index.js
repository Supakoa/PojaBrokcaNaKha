import React from "react";
import { MDBDataTable } from "mdbreact";
import dataReport from "./dataReport";
import { useTranslation } from "react-i18next";

export default function TableReport({ paging }) {
    const _data = dataReport();
    const { t } = useTranslation();

    return (
        <MDBDataTable
            noBottomColumns={true}
            entriesOptions={[5, 10, 15]}
            entries={10}
            displayEntries={paging}
            paging={paging}
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
