import React from "react";
import dataNewsTable from "./dataNewsTable";
import { MDBDataTableV5 } from "mdbreact";

export default function TableNews() {
    const _data = dataNewsTable();

    return (
        <MDBDataTableV5
            className="text-center align-item-center align-middle"
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