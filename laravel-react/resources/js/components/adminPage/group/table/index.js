import React from "react";
import DataGroupTable from "./DataGroupTable";
import { MDBDataTable } from "mdbreact";
// import {useTranslation} from 'react-i18next';

export default function TableGroups() {
    const _data = DataGroupTable();
    // const {t} = useTranslation('', {useSuspense: false});

    return (
        <MDBDataTable
            striped
            borderless
            scrollX
            hover
            info={false}
            paging={false}
            data={_data}
            searchLabel={"ค้นหา"}
        />
    );
}
