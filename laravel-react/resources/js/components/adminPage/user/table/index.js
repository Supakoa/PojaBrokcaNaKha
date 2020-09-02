import React from "react";
import { dataTableUser } from "./dataTableUsers";
import { MDBDataTable } from "mdbreact";

export default function TableUser({ paging }) {
    //Data of Table [columns, rows]
    const _data = dataTableUser();

    return (
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
            data={_data}
        />
    );
}
