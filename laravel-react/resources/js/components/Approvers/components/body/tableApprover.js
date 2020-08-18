import React from "react";
import { MDBDataTable } from "mdbreact";
import { columns } from "./columns";
import { useSelector, useDispatch } from "react-redux";
import {
    documentsTemplate,
    subjectsForDocument,
    userDocument
} from "../../../../redux/actions";
import post2Subjects from "../../../middleware/post2Redux/postToSubjects";
import post2Documents from "../../../middleware/post2Redux/postToDocuments";
import post2UserDocuments from "../../../middleware/post2Redux/postToUserDocuments";

const TableApprover = ({ urlApprover }) => {
    const _userDocs = useSelector(s => s.userDocument);
    const _docTemps = useSelector(s => s.documentsTemplate);
    const _userId = useSelector(s => s.userState.id);
    const abort = new AbortController();
    const _dispatch = useDispatch();
    const [rows, setRows] = React.useState([]);

    const _props = {
        token: localStorage._authLocal,
        id: _userId,
        dispatch: _dispatch,
        acDocTemp: documentsTemplate,
        acSubject: subjectsForDocument,
        acUserDocs: userDocument
    };

    const setRowsOnTable = userDocs => {
        console.log(userDocs);
    };

    React.useEffect(() => {
        if (_userId) {
            post2UserDocuments(_props, { signal: abort.signal });
        } else if (_docTemps.length === 0) {
            post2Documents(_props, { signal: abort.signal });
        } else if (_userDocs.length === 0) {
            post2Subjects(_props, { signal: abort.signal });
        } else if (_userDocs.length !== 0 && rows.length === 0) {
            setRowsOnTable(_userDocs, { signal: abort.signal });
        }
    }, [_docTemps, _userDocs, rows]);

    React.useEffect(() => {
        return () => abort.abort();
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
};

export default TableApprover;
