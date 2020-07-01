import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import dataTableStepReport from "./dataTableStepReport";

export default function StepTable() {
    const _data = dataTableStepReport();
    return (
        <MDBDataTableV5
            fullPagination
            searchTop
            searchBottom={false}
            hover
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            data={_data}
        />
    );
}
