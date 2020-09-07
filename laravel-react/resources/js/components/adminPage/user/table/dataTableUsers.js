import React, { useEffect } from "react";
import ColumnAction from "./ColumnAction";
import axios from "axios";
import { userRole } from "./userRole";
import { columns } from "./columns";
import { useSelector, useDispatch } from "react-redux";
import { initShowUsers } from "../../../../redux/actions";
import {_URL} from "../../../middleware/URL";

const dataTableUser = (setData, refresh) => {
    // init state
    // const [rows, setRows] = React.useState([]);

    // redux
    const redux_showUsers = useSelector(state => state.showUsers);
    // const dispatch = useDispatch();

    // local variable

    // function
    const fetchRowData = _data => {
        const resData = _data.map((res, idx) => {
            // console.log('res', res)
            return {
                action: <ColumnAction key={idx} idx={idx} res={res} refresh={refresh} />,
                id: idx + 1,
                name: res.title + " " + res.first_name + " " + res.last_name,
                role: userRole(res.role_id),
                email: res.email,
                phone: res.telephone,
                faculty: (res.major_id !== null) ? res.major.faculty.name : "-",
                major: (res.major_id !== null) ? res.major.name : "-"
            };
        })

        setData(preSstate => {
            return {
                ...preSstate,
                rows: resData
            }
        })
    };

    const initUsers = () => {
        if (redux_showUsers.data) {
            fetchRowData(redux_showUsers.data);
        }
    };

    // useState
    useEffect(() => {
        initUsers();
    }, [redux_showUsers]);

    // returrn component

    // const getUsers = async () => {
    //     await axios
    //         .get("http://127.0.0.1:8000/api/users", {
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem(
    //                     "_authLocal"
    //                 )}`
    //             }
    //         })
    //         .then(res => {
    //             const { success } = res.data;
    //             dispatch(initShowUsers(success));
    //         });
    // };

    // React.useEffect(() => {
    //     // mount
    //     const abort = new AbortController();
    //     getUsers({ signal: abort.signal });

    //     // willmount
    //     return () => {
    //         abort.abort();
    //     };
    //     // update
    // }, []);

    return ;
};

export default dataTableUser
