import React from "react";
import { MDBDataTable } from "mdbreact";
import { _setRowsTable } from "../../../middleware/method/setRowsTable";
import { useSelector } from "react-redux";
import { columns } from "./columns";
import statusDoc from "./statusDocument";
import UserModalDoc from "./modal";
import { useTranslation } from "react-i18next";
import FilterSort from "../../../filter";
import Swal from "sweetalert2";

export default function ReportTable() {
    const _userDoc = useSelector(state => state.userDocument);
    const _docTemp = useSelector(state => state.documentsTemplate);
    const { i18n } = useTranslation();
    const [rows, setRows] = React.useState([]);
    const [_filValid, setFilValid] = React.useState(false);
    const [_sortBy, setSortBy] = React.useState("all");
    const _optionSort = ["all", "approve", "pending", "cancel", "edit", "fuck"];
    const _props = {
        docTemp: _docTemp,
        userDoc: _userDoc,
        lang: i18n.language,
        defSort: _sortBy
    };

    const setFilterTable = e => {
        const _selected = e.target.name;
        if (_selected) {
            setSortBy(_selected);
            setRows([]);
        }
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
                let arr = [];
                _rows.forEach(item => {
                    if (item.status === _sortBy) {
                        arr = [...arr, item];
                    }
                });
                if (_sortBy !== "all" && arr.length === 0) {
                    Swal.fire(
                        `${_sortBy} error !!`,
                        `ไม่พบ ${_sortBy} ของคุณ`,
                        "warning"
                    ).then(() => {
                        setFilValid(!_filValid);
                        setSortBy("all");
                    });
                }
                setRows(
                    _sortBy === "all" ? _rows : arr.length !== 0 ? arr : _rows
                );
            }
        }
    };

    React.useEffect(() => {
        const abort = new AbortController();
        if (
            _userDoc.length !== 0 &&
            rows.length < _userDoc.length &&
            _docTemp.length !== 0
        ) {
            fill2Rows(_props, { signal: abort.signal });
        }

        return () => {
            abort.abort();
        };
    }, [rows, _userDoc, _docTemp, _sortBy]);

    return (
        <>
            <div className="w-100 d-flex justify-content-start">
                <FilterSort
                    sortBy={_sortBy}
                    setSort={setFilterTable}
                    arrayData={_optionSort}
                    filterValid={_filValid}
                    setFilterVaild={setFilValid}
                />
            </div>
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
        </>
    );
}
