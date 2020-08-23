import React from "react";
import { MDBDataTable } from "mdbreact";
import { columns } from "./columns";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import statusDoc from "../../../student/components/tableReport/statusDocument";
import _convertDate from "../../../middleware/method/convertDate";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TableApprover = ({
    urlApprover,
    sortTable,
    setValidSort,
    validSort,
    setSortBy,
    setRows,
    rows
}) => {
    const _userDocs = useSelector(s => s.userDocument);
    const _docTemps = useSelector(s => s.documentsTemplate);
    const { i18n } = useTranslation();

    const setRowsOnTable = userDocs => {
        const _add2Rows = userDocs.map((uDoc, idx) => {
            console.log(uDoc);
            const _name = _docTemps.find(tDoc => {
                return tDoc.id === uDoc.form_id;
            });
            if (_name !== undefined) {
                return {
                    row_id: (idx + 1).toString(),
                    status_badge: statusDoc(uDoc.status, idx),
                    status: uDoc.status,
                    form_name:
                        i18n.language === "th" ? _name.th_name : _name.eng_name,
                    from_user: "อิอิอิ",
                    created_at_converted: _convertDate(uDoc.created_at),
                    action: (
                        <Link
                            className="btn btn-sm btn-info"
                            to={`${urlApprover}/show/${uDoc.id}`}
                        >
                            show <i className="fas fa-edit"></i>
                        </Link>
                    )
                };
            }
        });
        if (rows.length === 0) {
            let arr = [];
            _add2Rows.forEach(item => {
                if (item.status === sortTable) {
                    arr = [...arr, item];
                }
            });
            if (sortTable !== "all" && arr.length === 0) {
                Swal.fire(
                    `${sortTable} error !!`,
                    `ไม่พบ ${sortTable} ของคุณ`,
                    "warning"
                ).then(() => {
                    setValidSort(!validSort);
                    setSortBy("all");
                });
            }
            setRows(
                sortTable === "all"
                    ? _add2Rows
                    : arr.length !== 0
                    ? arr
                    : _add2Rows
            );
        }
    };

    React.useEffect(() => {
        const abort = new AbortController();
        if (rows.length < _userDocs.length && _docTemps.length !== 0)
            setRowsOnTable(_userDocs, { signal: abort.signal });

        return () => abort.abort();
    }, [rows, _userDocs, _docTemps]);

    return (
        <MDBDataTable
            small
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
};

export default TableApprover;
