import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";
import { useParams } from "react-router-dom";
import { fetchUserDoc } from "./fetchUserDoc";
import { useSelector, useDispatch } from "react-redux";
import { userDocument } from "../../../../redux/actions";
import { columns } from "./columns";

export default function ReportTable() {
    const _userDoc = useSelector(state => state.userDocument);
    const _dispatch = useDispatch();
    const _token = localStorage._authLocal;
    const { id } = useParams();

    React.useEffect(() => {}, []);
    // console.log(_userDoc);

    const _props = {
        dispatch: _dispatch,
        actionDoc: userDocument,
        id: Number(id),
        token: _token
    };

    React.useEffect(() => {
        const abort = new AbortController();
        if (_userDoc.length === 0) {
            fetchUserDoc(_props, { signal: abort.signal });
        }

        return () => {
            abort.abort();
        };
    }, [_props]);

    return (
        <MDBDataTable
            noBottomColumns={true}
            entriesLabel="ข้อมูลที่แสดง"
            entriesOptions={[5, 10, 15]}
            entries={5}
            infoLabel={["กำลังแสดง", "-", "ของ", "รายการ"]}
            paginationLabel={["ก่อนหน้า", "ถัดไป"]}
            searchLabel="ค้นหา"
            barReverse={true}
            borderless
            striped
            hover
            data={{ columns, _userDoc }}
        />
    );
}
