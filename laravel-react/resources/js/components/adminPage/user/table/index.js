import React from "react";
import { dataTableUser } from "./dataTableUsers";
import { MDBDataTable } from "mdbreact";

export default function TableUser() {
    //Data of Table [columns, rows]
    const _data = dataTableUser();

    return (
        <MDBDataTable
            striped
            borderless
            scrollX
            hover
            info={false}
            paging={false}
            data={_data}
            searchLabel="ค้นหา"
        />
    );
}
