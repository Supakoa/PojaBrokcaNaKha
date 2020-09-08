import React, { useEffect, useState } from "react";
import { Image, Button, Badge } from "react-bootstrap";
import Axios from "axios";
import { column } from "./column";
import ColumnAction from "./ColumnAction";
// import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
    showApproversAction,
    showSubjectsAction,
    showGroupAction
} from "../../../../redux/actions";
import {_URL} from "../../../middleware/URL";

const dataGroupTable = (setData) => {
    const [rows, setRows] = React.useState([]);
    const [groups, setGroups] = useState(null);

    // redux
    const redux_showGroup = useSelector(state => state.showGroup)
    const dispatch = useDispatch();

    const fetchRowData = _data => {
        const item = _data.map((res, idx) => {
            return {
                id: idx + 1,
                th_name: res.th_name,
                eng_name: res.eng_name,
                type: res.type,
                action: <ColumnAction key={idx} refresh={getGroup} indexKey={idx} res={res} />
            };
        });

        setData(preState => {
            return {
                ...preState,
                rows: item
            }
        })
        setRows(item);
    };

    const getGroup = () => {
        Axios.get(`${_URL}/api/groups`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("_authLocal")}`
            }
        }).then(res => {
            dispatch(showGroupAction("INIT_SHOW_GROUP", res.data))
            setGroups(res.data);
        });
    };

    // const getApproversToRedux = async () => {
    //     await Axios.get(`${_URL}/api/users`, {
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem("_authLocal")}`
    //         }
    //     }).then(res => {
    //         let tmp_approvers = new Array();
    //         tmp_approvers = [...res.data.success];
    //         tmp_approvers = tmp_approvers.filter(item => {
    //             return item.role_id == 2;
    //         });
    //         dispatch(showApproversAction("INIT_APPROVERS", tmp_approvers));
    //     });
    // };

    // const getSubjectsToRedux = async () => {
    //     await Axios.get(`${_URL}/api/subjects`, {
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem("_authLocal")}`
    //         }
    //     }).then(res => {
    //         let tmp_subjects = new Array();
    //         tmp_subjects = [...res.data];
    //         dispatch(showApproversAction("INIT_SHOW_SUBJEECTS", tmp_subjects));
    //     });
    // };

    // TODO: old
    // const initShowNews = () => {
    //     if (groups) {
    //         fetchRowData(groups);
    //     }
    // };

    // TODO: new
    const initShowNews = (redux_showGroup) => {
        if (redux_showGroup.data) {
            fetchRowData(redux_showGroup.data);
        }
    };

    // useEffect
    React.useEffect(() => {
        const abortController = new AbortController();
        getGroup({ signal: abortController.signal });
        // getApproversToRedux();
        // getSubjectsToRedux();

        return () => {
            abortController.abort();
        };
    }, []);

    // TODO: old
    // useEffect(() => {
    //     initShowNews();
    // }, [groups]);

    // TODO: new
    useEffect(() => {
        initShowNews(redux_showGroup)
    }, [redux_showGroup])

    // return { columns: column(), rows };
    return
};

export default dataGroupTable;
