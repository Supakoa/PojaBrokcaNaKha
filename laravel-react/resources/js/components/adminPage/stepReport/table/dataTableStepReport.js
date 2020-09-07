import React from "react";
import ColumsAction from "./ColumnsAction";
import { columns } from "./columns";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { showGroupAction, showFormsAction } from "../../../../redux/actions";
import Swal from "sweetalert2";
import {_URL} from "../../../middleware/URL";

export default function dataTableStepReport() {
    // props

    // local state
    const [rows, setRows] = React.useState([]);
    // const [showForms, setShowForms] = useState(null)

    // redux
    const redux_showForms = useSelector(state => state.showForm); // not to use now
    const dispatch = useDispatch();

    // local variable
    const pathGetForms = `${_URL}/api/forms`;
    // const Toast = Swal.mixin({
    //     toast: true,
    //     position: 'top-end',
    //     showConfirmButton: false,
    //     timer: 2000,
    //     onOpen: (toast) => {
    //       toast.addEventListener('mouseenter', Swal.stopTimer)
    //       toast.addEventListener('mouseleave', Swal.resumeTimer)
    //     }
    // })

    // function
    const fetchRowData = _rows => {
        const _row = _rows.map((res, idx) => {
            const _response = {
                id: res.id,
                name: res.th_name,
                all_state: res.all_state,
                // code: res.code,
                // action: <ColumsAction idx={idx} res={res} />
                action: ColumsAction(idx, res)
            };
            return _response;
        });
        return _row;
    };

    const initShowStepReports = async () => {
        const showForms = await Axios.get(pathGetForms, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("_authLocal")}`
            }
        }).then(res => {
            return res.data;
        });

        dispatch(showFormsAction("INIT_SHOW_FORM", showForms));

        setRows(fetchRowData(showForms));
    };

    const initShowGroupsRedux = () => {
        Axios.get(`${_URL}/api/groups`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("_authLocal")}`
            }
        }).then(res => {
            dispatch(showGroupAction("INIT_SHOW_GROUP", res.data));
        });
    };

    // useEffect
    React.useEffect(() => {
        const abort = new AbortController();

        initShowStepReports({ signal: abort.signal });
        initShowGroupsRedux();

        return () => {
            abort.abort();
        };
    }, []);

    //return component

    return { columns, rows };
}
