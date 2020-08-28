import React from "react";
import DataGroupTable from "./DataGroupTable";
import { MDBDataTable } from "mdbreact";
// import {useTranslation} from 'react-i18next';

export default function TableGroups() {
    const _data = DataGroupTable();
    // const {t} = useTranslation('', {useSuspense: false});

    return (
        <MDBDataTable
            noBottomColumns={true}
            entriesLabel="จำนวนที่แสดง"
            entriesOptions={[5, 10, 15]}
            entries={5}
            infoLabel={["แสดง", "-", "ของ", "รายการ"]}
            paginationLabel={["ก่อนหน้า", "ถัดไป"]}
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
