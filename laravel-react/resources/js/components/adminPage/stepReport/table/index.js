import React from "react";
import { MDBDataTable } from "mdbreact";
import dataTableStepReport from "./dataTableStepReport";
import { useTranslation } from "react-i18next";

export default function StepTable() {
    const _data = dataTableStepReport();
    const { t } = useTranslation();
    return (
        <MDBDataTable
            noBottomColumns={true}
            entriesOptions={[5, 10, 15]}
            entries={10}
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
