import React from "react";
import { MDBDataTable } from "mdbreact";
import dataReport from "./dataReport";

export default function TableReport() {
    const _data = dataReport();

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
