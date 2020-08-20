import React from "react";
import { MDBDataTable } from "mdbreact";
import { _setRowsTable } from "../../../middleware/method/setRowsTable";
import { useSelector } from "react-redux";
import { columns } from "./columns";
import statusDoc from "./statusDocument";
import UserModalDoc from "./modal";
import { useTranslation } from "react-i18next";

export default function ReportTable() {
    const _userDoc = useSelector(state => state.userDocument);
    const _docTemp = useSelector(state => state.documentsTemplate);
    const { i18n } = useTranslation();
    const abort = new AbortController();
    const [rows, setRows] = React.useState([]);

    const _props = {
        docTemp: _docTemp,
        userDoc: _userDoc,
        lang: i18n.language
    };

    const fill2Rows = async _props => {

        const tempRows = await _setRowsTable(_props);
        if (tempRows !== undefined) {
            const _rows = tempRows.map((item, idx) => {
                item.status_badge = statusDoc(item.status, idx);
                item.row_id = (idx + 1).toString();
                item.action = (
                    <UserModalDoc
                        key={idx.toString()}
                        document={item}
                        lang={i18n.language}
                    />
                );
                return item;
            });
            if (rows.length === 0) {
                setRows(_rows);
            }
        }
    };

    React.useEffect(() => {
        if (rows.length < _userDoc.length && _docTemp.length !== 0)
            fill2Rows(_props, { signal: abort.signal });
    }, [rows, _userDoc, _docTemp]);

    React.useEffect(() => {
        return () => {
            abort.abort();
        };
    }, []);

    return (
        <MDBDataTable
            noBottomColumns={true}
            entriesLabel="ข้อมูลที่แสดง"
            scrollX
            entriesOptions={[5, 10, 15]}
            entries={5}
            infoLabel={["กำลังแสดง", "-", "ของ", "รายการ"]}
            paginationLabel={["ก่อนหน้า", "ถัดไป"]}
            searchLabel="ค้นหา"
            barReverse={true}
            borderless
            striped
            hover
            data={{ columns, rows }}
        />
    );
}
