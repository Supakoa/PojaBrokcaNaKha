import React, { useState } from "react";
import dataNewsTable from "./dataNewsTable";
import { MDBDataTable } from "mdbreact";
import { useTranslation } from "react-i18next";
import { columns } from "./columns";

export default function TableNews({ paging, refresh }) {
    // library require
    const { t } = useTranslation();

    // local state
    const [data, setData] = useState({
        columns: columns(t),
        rows: []
    });

    // return component

    return (
        <>
            {/* init data */}
            {dataNewsTable(setData, refresh)}
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
                data={data}
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
        </>
    );
}
