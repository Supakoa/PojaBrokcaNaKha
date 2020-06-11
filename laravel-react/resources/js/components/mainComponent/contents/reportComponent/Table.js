import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import dataReport from "./dataReport";

export default function TableReport() {
    const _data = dataReport();

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
