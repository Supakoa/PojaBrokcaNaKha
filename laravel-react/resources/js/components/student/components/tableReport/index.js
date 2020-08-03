import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";
import { fetchUserDoc } from "../../../middleware/axios/fetchUserDoc";
import { _setRowsTable } from "../../../middleware/method/setRowsTable";
import { useSelector, useDispatch } from "react-redux";
import { userDocument } from "../../../../redux/actions";
import { columns } from "./columns";
import statusDoc from "./statusDocument";
import UserModalDoc from "./modal";

export default function ReportTable() {
    const _userDoc = useSelector(state => state.userDocument);
    const _docTemp = useSelector(state => state.documentsTemplate);
    const _user = useSelector(state => state.userState);
    const abort = new AbortController();
    const [rows, setRows] = React.useState([]);
    const _dispatch = useDispatch();
    const _token = localStorage._authLocal;
    // console.log(_userDoc);

    const _props = {
        dispatch: _dispatch,
        actionDoc: userDocument,
        id: Number(_user.id),
        token: _token,
        docTemp: _docTemp,
        userDoc: _userDoc
    };

    const fill2Rows = async _props => {
        const tempRows = await _setRowsTable(_props);
        if (tempRows !== undefined) {
            const _rows = tempRows.map((item, idx) => {
                item.status_badge = statusDoc(item.status, idx);
                item.row_id = (idx + 1).toString();
                item.action = (
                    <UserModalDoc key={idx.toString()} document={item} />
                );
                return item;
            });
            if (rows.length === 0) {
                setRows(_rows);
            }
        }
    };

    React.useEffect(() => {
        if (_userDoc.length === 0 && _docTemp.length !== 0 && _token)
            fetchUserDoc(_props, { signal: abort.signal });
    }, [_props, _user]);

    React.useEffect(() => {
        if (rows.length === 0) fill2Rows(_props, { signal: abort.signal });
    }, [rows]);

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
