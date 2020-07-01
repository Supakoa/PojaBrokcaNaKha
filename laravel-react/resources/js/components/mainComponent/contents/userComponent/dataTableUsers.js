import React from "react";
import ModalUser from "../modalCRUD/ModalUser";
import { testData } from "./testData";
import ModalDelete from "../modalCRUD/ModalDelete";
import axios from "axios";

const ColumnAction = (idx, res) => {
    return (
        <>
            <ModalUser key={idx} id={res.id} type={false} />
            {" || "}
            <ModalDelete key={idx + 1} id={res.id} />
        </>
    );
};

export const dataTableUser = () => {
    const columns = [
        {
            label: "#",
            field: "id",
            sort: "desc",
            width: 50
        },
        {
            label: "ชื่อ - นามสกุล",
            field: "name",
            width: 270
        },
        {
            label: "ประเภท",
            field: "role",
            width: 120
        },
        {
            label: "อีเมล",
            field: "email",
            width: 150
        },
        {
            label: "เบอร์โทรศัพท์",
            field: "phone",
            width: 150
        },
        {
            label: "คณะ",
            field: "faculty",
            width: 150
        },
        {
            label: "สาขา",
            field: "major",
            width: 100
        },
        {
            label: "action",
            field: "action",
            sort: "disabled",
            width: 250
        }
    ];

    const [rows, setRows] = React.useState([]);
    const [users, setUsers] = React.useState(testData);

    const fetchRowData = _data => {
        console.log(_data);

        const _row = _data.map((res, idx) => {
            const response = {
                action: ColumnAction(idx, res),
                id: res.id,
                name: res.firstName + " " + res.lastName,
                role: userRole(res.role),
                email: res.email,
                phone: res.phone,
                faculty: "",
                major: ""
            };

            return response;
        });
        return _row;
    };

    const getUsers = async () => {
        const _getusers = await axios
            .get("http://127.0.0.1:8000/api/users", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "_authLocal"
                    )}`
                }
            })
            .then(res => {
                const { data } = res;
                const _items = fetchRowData(data);
                return _items;
                // setUsers(res.data);
            });
        return _getusers;
    };

    const userRole = _role => {
        switch (_role) {
            case 1:
                return "ผู้ดูแลระบบ";
            case 2:
                return "อาจารย์ ผู้ตรวจ";
            case 3:
                return "นักศึกษา";
            default:
                return "ไม่มีตำแหน่งกำหนด";
        }
    };

    React.useEffect(() => {
        // mount
        const abort = new AbortController();
        const _rows = getUsers();

        // setRows(_rows);
        // willmount
        return () => {
            abort.abort();
        };
        // update
    }, []);
    console.log(users);

    return { columns, rows };
};
