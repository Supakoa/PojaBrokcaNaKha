import React from "react";
import { MDBDataTable } from "mdbreact";
import dataTableStepReport from "./dataTableStepReport";

export default function StepTable() {
    const _data = dataTableStepReport();
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
