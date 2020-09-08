import React, { useState } from "react";
import dataGroupTable from "./DataGroupTable";
import { MDBDataTable } from "mdbreact";
import { useTranslation } from "react-i18next";
import { column } from "./column";

export default function TableGroups({ groups, setGroups }) {
    // const _data = DataGroupTable();
    const { t } = useTranslation();

    const [data, setData] = useState({
        columns: column(t),
        rows: []
    });

    return (
        <>
            {dataGroupTable(setData)}
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
                data={data}
            />
        </>
    );
}
