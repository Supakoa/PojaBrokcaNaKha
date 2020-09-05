import React, { useEffect } from "react";
import ColumnAction from "./ColumnAction";
import axios from "axios";
import { userRole } from "./userRole";
import { columns } from "./columns";
import { useSelector, useDispatch } from "react-redux";
import { initShowUsers } from "../../../../redux/actions";
import {_URL} from "../../../middleware/URL";

export const dataTableUser = () => {
    // init state
    const [rows, setRows] = React.useState([]);

    // redux
    const redux_showUsers = useSelector(state => state.showUsers);
    const dispatch = useDispatch();

    const fetchRowData = _data => {
        const _row = _data.map((res, idx) => {
            return {
                action: <ColumnAction key={idx} idx={idx} res={res} />,
                id: idx + 1,
                name: res.title + " " + res.first_name + " " + res.last_name,
                role: userRole(res.role_id),
                email: res.email,
                phone: res.telephone,
                faculty: res.major_id !== null ? res.major.faculty.name : "-",
                major: res.major_id !== null ? res.major.name : "-"
            };
        });

        return _row;
    };

    const getUsers = async () => {
        await axios
            .get(`${_URL}/api/users`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "_authLocal"
                    )}`
                }
            })
            .then(res => {
                const { success } = res.data;
                dispatch(initShowUsers(success));
            });
    };

    const initUsers = () => {
        if (!!redux_showUsers.data) {
            const _items = fetchRowData(redux_showUsers.data);
            setRows(_items);
        }
    };

    React.useEffect(() => {
        // mount
        const abort = new AbortController();
        getUsers({ signal: abort.signal });

        // willmount
        return () => {
            abort.abort();
        };
        // update
    }, []);

    useEffect(() => {
        initUsers();
    }, [redux_showUsers]);

    return { columns, rows };
};
