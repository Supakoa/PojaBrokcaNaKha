import React from "react";
import ColumnAction from "./ColumnAction";
import axios from "axios";
import { userRole } from "./userRole";
import { columns } from "./columns";

export const dataTableUser = () => {
    // init state
    const [rows, setRows] = React.useState([]);
    // const [users, setUsers] = React.useState(testData);

    const fetchRowData = _data => {
        const _row = _data.map((res, idx) => {
            // console.log(res);
            return {
                action: ColumnAction(idx, res),
                id: res.id,
                name: res.title + " " + res.first_name + " " + res.last_name,
                role: userRole(res.role_id),
                email: res.email,
                phone: res.telephone,
                faculty: res.major_id !== null ? res.major.faculty.name : "-",
                major: res.major_id !== null ? res.major.name : "-"
            };
        });
        // console.log(`row :`, _row)
        return _row;
    };

    const getUsers = async () => {
        await axios
            .get("http://127.0.0.1:8000/api/users", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "_authLocal"
                    )}`
                }
            })
            .then(res => {
                const { success } = res.data;
                const _items = fetchRowData(success);
                setRows(_items);
                console.log(`items: `, success);
                // return _items;
            });
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
    // console.log(users);

    return { columns, rows };
};
