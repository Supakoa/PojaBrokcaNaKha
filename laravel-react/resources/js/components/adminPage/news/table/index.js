import React from "react";
import dataNewsTable from "./dataNewsTable";
import { MDBDataTable } from "mdbreact";
import { useTranslation } from "react-i18next";

export default function TableNews() {
    const _data = dataNewsTable();
    const { t } = useTranslation("", { useSuspense: false });

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
            searchLabel={t("search")}
        />
    );
}
