import React from "react";
import { MDBDataTable } from "mdbreact";
import { _setRowsTable } from "../../../middleware/method/setRowsTable";
import { useSelector } from "react-redux";
import { columns } from "./columns";
import StatusBadgeDoc from "./statusDocument";
import UserModalDoc from "./modal";
import { useTranslation } from "react-i18next";
import FilterSort from "../../../filter";
import Swal from "sweetalert2";
import wordShow from "../../../filter/showMyWord";

export default function ReportTable() {
    const _userDoc = useSelector(state => state.userDocument);
    const _docTemp = useSelector(state => state.documentsTemplate);
    const { i18n, t } = useTranslation();
    const [rows, setRows] = React.useState([]);
    const [_filValid, setFilValid] = React.useState(false);
    const [_sortBy, setSortBy] = React.useState("pending");
    const _th = i18n.language === "th";
    const _optionSort = [
        "all",
        "pending",
        "approved",
        "rejected",
        "cancelled",
        "edited"
    ];

    const _props = {
        docTemp: _docTemp,
        userDoc: _userDoc,
        defSort: _sortBy
    };

    const setFilterTable = e => {
        const _selected = e.target.name;
        setSortBy(_selected ? _selected : _sortBy);
        setRows(_selected ? [] : rows);
    };

    const fill2Rows = async _props => {
        const tempRows = await _setRowsTable(_props);

        if (tempRows) {
            const _rows = tempRows.map((item, idx) => {
                item.status_badge = (
                    <StatusBadgeDoc key={idx.toString()} status={item.status} />
                );
                item.row_id = (idx + 1).toString();
                item.action = (
                    <UserModalDoc
                        key={idx.toString()}
                        document={item}
                        setRows={setRows}
                    />
                );
                return item;
            });
            if (rows.length === 0) {
                const arr = _rows.filter(item => {
                    return item.status === _sortBy;
                });
                if (_sortBy !== "all" && arr.length === 0) {
                    Swal.fire(
                        `${wordShow(_sortBy, t)} !!`,
                        `${_th ? `ไม่พบ` : `not found your`} ${wordShow(
                            _sortBy,
                            t
                        )} ${_th ? `ของคุณ` : ``}`,
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
            rows.length !== _userDoc.length &&
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
                    noti={rows.length}
                />
            </div>
            <MDBDataTable
                noBottomColumns={true}
                entriesLabel={t("students.table.header.pagination")}
                scrollX
                entriesOptions={[5, 10, 15]}
                entries={5}
                infoLabel={[
                    t("students.table.footer.show"),
                    "-",
                    t("students.table.footer.of"),
                    t("students.table.footer.list")
                ]}
                paginationLabel={[
                    t("students.table.footer.prev"),
                    t("students.table.footer.next")
                ]}
                searchLabel={t("students.table.header.search")}
                barReverse={true}
                borderless
                striped
                small
                hover
                data={{ columns: columns(t), rows: rows }}
            />
        </>
    );
}
