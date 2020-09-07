import React, { useState } from "react";
import dataTableUser from "./dataTableUsers";
import { MDBDataTable } from "mdbreact";
import { columns } from "./columns";
import { useTranslation } from "react-i18next";

export default function TableUser({ paging, initUsers }) {

    // external module
    const { t } = useTranslation();

    // local state
    const [data, setData] = useState({
        columns: columns,
        rows: []
    })

    // redux

    // local variable
    // const _data = dataTableUser();

    // function

    // useEffect

    // return component

    return (
        <>
            {/* init data */}
            {dataTableUser(setData, initUsers)}
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
                entries={5}
                displayEntries={paging}
                paging={paging}
                infoLabel={["แสดง", "-", "ของ", "รายการ"]}
                paginationLabel={["ก่อนหน้า", "ถัดไป"]}
                searchLabel="ค้นหา"
                barReverse={true}
                borderless
                striped
                small
                hover
                scrollX
                data={data}
            />
        </>
    )
}
