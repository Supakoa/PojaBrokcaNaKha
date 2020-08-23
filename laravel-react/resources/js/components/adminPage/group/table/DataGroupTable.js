import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import Axios from "axios";
import { column } from "./column";
import ColumnAction from "./ColumnAction";
// import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { showApproversAction, showSubjectsAction } from "../../../../redux/actions";

const DataGroupTable = () => {

    const [rows, setRows] = React.useState([]);
    const [gourps, setGourps] = useState(null)

    // redux
    const redux_approvers = useSelector(state => state.showApprovers)
    const dispatch = useDispatch()

    const fetchRowData = _data => {
        setRows(
            _data.map((res, idx) => {
                const responData = {
                    id: idx,
                    th_name: res.th_name,
                    eng_name: res.eng_name,
                    type: res.type,
                    list: "asdf",
                    action: ColumnAction(idx, res)
                };
                return responData;
            })
        );
    };

    const getGroup = async () => {
        await Axios.get(`http://localhost:8000/api/groups`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(
                    "_authLocal"
                )}`
            }
        }).then(async res => {
            setGourps(res.data)
        })
    };

    const getApproversToRedux = async () => {
        await Axios.get(`http://localhost:8000/api/users`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(
                    "_authLocal"
                )}`
            }
        }).then(res => {
            let tmp_approvers = new Array()
            tmp_approvers = [...res.data.success]
            tmp_approvers = tmp_approvers.filter(item => {
                return item.role_id == 2
            })
            dispatch(showApproversAction("INIT_APPROVERS", tmp_approvers))
        })
    }

    const getSubjectsToRedux = async () => {
        await Axios.get(`http://localhost:8000/api/subjects`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(
                    "_authLocal"
                )}`
            }
        }).then(res => {
            let tmp_subjects = new Array()
            tmp_subjects = [...res.data]
            dispatch(showApproversAction("INIT_SHOW_SUBJEECTS", tmp_subjects))
        })
    }

    const initShowNews = () => {
        if (gourps) {
            fetchRowData(gourps);
        }
    }

    // useEffect
    React.useEffect(() => {
        const abortController = new AbortController();
        getGroup({ signal: abortController.signal });
        getApproversToRedux()
        getSubjectsToRedux()

        return () => {
            abortController.abort();
        };
    }, []);

    useEffect(() => {
        initShowNews()
    }, [gourps])

    return { columns: column(), rows };
};

export default DataGroupTable;
