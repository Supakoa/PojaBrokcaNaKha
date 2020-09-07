import React, { useState } from "react";
import dataTableUser from "./dataTableUsers";
import { MDBDataTable } from "mdbreact";
import { columns } from "./columns";

export default function TableUser({ paging }) {

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
            {dataTableUser(setData)}
            <MDBDataTable
                noBottomColumns={true}
                entriesLabel="จำนวนที่แสดง"
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
