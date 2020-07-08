import React from "react";
import { dataTableUser } from "./dataTableUsers";
import { MDBDataTableV5 } from "mdbreact";

export default function TableUser() {
    //Data of Table [columns, rows]
    const _data = dataTableUser();

    return (
        <MDBDataTableV5
            fullPagination
            searchTop
            scrollX
            searchBottom={false}
            hover
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            data={_data} />
    );
}
