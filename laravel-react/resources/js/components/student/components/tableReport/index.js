import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";
import { useParams } from "react-router-dom";
import { fetchUserDoc } from "../../../middleware/axios/fetchUserDoc";
import { _setRowsTable } from "../../../middleware/method/setRowsTable";
import { useSelector, useDispatch } from "react-redux";
import { userDocument } from "../../../../redux/actions";
import { columns } from "./columns";

export default function ReportTable() {
    const _userDoc = useSelector(state => state.userDocument);
    const _docTemp = useSelector(state => state.documentsTemplate);
    const _user = useSelector(state => state.userState);
    let rows = [];
    const _dispatch = useDispatch();
    const _token = localStorage._authLocal;
    const  id  = _user.id;
    // console.log(_userDoc);

    const _props = {
        dispatch: _dispatch,
        actionDoc: userDocument,
        id: Number(id),
        token: _token,
        docTemp: _docTemp,
        userDoc: _userDoc,
        row: rows
    };

    React.useEffect(() => {
        const abort = new AbortController();
        if (_userDoc.length === 0 && id  && !_userDoc.isFetchUserDoc)
        {
            _userDoc.isFetchUserDoc = true;
            fetchUserDoc(_props, { signal: abort.signal });
        }
        _setRowsTable(_props, { signal: abort.signal });
        return () => {
            abort.abort();
        };
    }, [_props]);

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
