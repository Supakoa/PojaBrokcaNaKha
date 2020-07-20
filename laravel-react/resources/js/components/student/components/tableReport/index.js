import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";
import { fetchUserDoc } from "../../../middleware/axios/fetchUserDoc";
import { _setRowsTable } from "../../../middleware/method/setRowsTable";
import { useSelector, useDispatch } from "react-redux";
import { userDocument } from "../../../../redux/actions";
import { columns } from "./columns";
import statusDoc from "./statusDocument";
import { Button, Modal } from "react-bootstrap";

export default function ReportTable() {
    const _userDoc = useSelector(state => state.userDocument);
    const _docTemp = useSelector(state => state.documentsTemplate);
    const _user = useSelector(state => state.userState);
    const [show, setShow] = React.useState(false);
    const [rows, setRows] = React.useState([]);
    const _dispatch = useDispatch();
    const _token = localStorage._authLocal;
    const id = _user.id;
    // console.log(_userDoc);

    const _props = {
        dispatch: _dispatch,
        actionDoc: userDocument,
        id: Number(id),
        token: _token,
        docTemp: _docTemp,
        userDoc: _userDoc,
        statusBadge: statusDoc
    };

    const fill2Rows = async () => {
        const tempRows = await _setRowsTable(_props);
        if (tempRows !== undefined) {
            const _rows = tempRows.map((item, idx) => {
                item.action = (
                    <div key={idx}>
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={() => setShow(true)}
                        >
                            action
                        </Button>

                        <Modal
                            show={show}
                            onHide={() => setShow(false)}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>{item.form_id}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body></Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary">Understood</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                );
                return item;
            });
            console.log(_rows);
            setRows(_rows);
        }
    };

    React.useEffect(() => {
        const abort = new AbortController();
        if (_userDoc.length === 0 && id && !_userDoc.isFetchUserDoc) {
            _userDoc.isFetchUserDoc = true;
            fetchUserDoc(_props, { signal: abort.signal });
        }
        if (rows.length === 0) fill2Rows();
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
