import React from "react";
import dataNewsTable from "./dataNewsTable";
import { MDBDataTable } from "mdbreact";

export default function TableNews() {
    const _data = dataNewsTable();

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
