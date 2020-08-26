import React, { useState } from "react";
import { dataTest } from "./dataTest";
import ColumsAction from "./ColumnsAction";
import { columns } from "./columns";
import Axios from "axios";
import { useDispatch } from 'react-redux'
import { showGroupAction, showFormsAction } from "../../../../redux/actions";

export default function dataTableStepReport() {
    // props

    // local state
    const [rows, setRows] = React.useState([]);
    // const [showForms, setShowForms] = useState(null)

    // redux
    const dispatch = useDispatch()

    // local variable
    const pathGetForms = `http://localhost:8000/api/forms`

    // function
    const fetchRowData = _rows => {
        const _row = _rows.map((res, idx) => {
            const _response = {
                id: res.id,
                name: res.th_name,
                all_state: res.all_state,
                // code: res.code,
                action: ColumsAction(idx, res)
            };
            return _response;
        });
        return _row;
    };

    const initShowStepReports = async () => {
        const showForms = await Axios.get(pathGetForms, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(
                    "_authLocal"
                )}`
            }
        }).then(res => {
            dispatch(showFormsAction("INIT_SHOW_FORM", res.data))

            return res.data
        })

        setRows(fetchRowData(showForms));
    }

    const initShowGroupsRedux = () => {
        Axios.get(`http://localhost:8000/api/groups`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("_authLocal")}`
            }
        }).then(res => {
            dispatch(showGroupAction("INIT_SHOW_GROUP", res.data))
        })
    }

    // useEffect
    React.useEffect(() => {
        const abort = new AbortController();
        initShowStepReports({ signal: abort.signal })
        initShowGroupsRedux()

        return () => {
            abort.abort();
        };
    }, []);

    //return component

    return { columns, rows };
}
