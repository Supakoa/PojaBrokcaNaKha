import React from "react";
import { MDBDataTable } from "mdbreact";
import { columns } from "./columns";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import statusDoc from "../../../student/components/tableReport/statusDocument";
import _convertDate from "../../../middleware/method/convertDate";
import { Link } from "react-router-dom";

const TableApprover = ({ urlApprover }) => {
    const _userDocs = useSelector(s => s.userDocument);
    const _docTemps = useSelector(s => s.documentsTemplate);
    const { i18n } = useTranslation();

    const [rows, setRows] = React.useState([]);

    const setRowsOnTable = userDocs => {
        const _add2Rows = userDocs.map((uDoc, idx) => {
            const _name = _docTemps.find(tDoc => {
                return tDoc.id === uDoc.form_id;
            });
            if (_name !== undefined) {
                return {
                    row_id: (idx + 1).toString(),
                    status_badge: statusDoc(uDoc.status, idx),
                    form_name:
                        i18n.language === "th" ? _name.th_name : _name.eng_name,
                    from_user: "อิอิอิ",
                    created_at_converted: _convertDate(uDoc.created_at),
                    action: (
                        <Link to={`${urlApprover}/show/${uDoc.id}`}>show</Link>
                    )
                };
            }
        });

        setRows(_add2Rows);
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
