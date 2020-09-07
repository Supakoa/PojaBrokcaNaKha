import React, { useState, useEffect } from "react";
import dataNewsTable from "./dataNewsTable";
import { MDBDataTable } from "mdbreact";
import { useTranslation } from "react-i18next";
import { columns } from "./columns";

export default function TableNews({ paging }) {

    // library require
    const { t } = useTranslation();

    // local state
    // const [rows, setRows] = useState([])
    const [data, setData] = useState({
        columns: columns(t),
        rows: []
    })

    //redux

    // local variable

    // function
    const initState = () => {
        // dataNewsTable()
    }

    // useEffect
    // useEffect(() => {
    //     initState()
    // }, [data])

    // return component

    return (
        <>
            {/* init data */}
            {dataNewsTable(setData)}
            <MDBDataTable
                noBottomColumns={true}
                entriesLabel="จำนวนที่แสดง"
                entriesOptions={[5, 10, 15]}
                entries={5}
                displayEntries={paging}
                paging={paging}
                infoLabel={["แสดง", "-", "ของ", "รายการ"]}
                paginationLabel={["ก่อนหน้า", "ถัดไป"]}
                barReverse={true}
                borderless
                striped
                small
                hover
                scrollX
                data={data}
                searchLabel={t("search")}
            />
        </>
    )
}
