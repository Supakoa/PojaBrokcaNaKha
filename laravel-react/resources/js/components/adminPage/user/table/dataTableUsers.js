import React from "react";
import ModalUser from "../../modals/ModalUser";
import ModalDelete from "../../modals/ModalDelete";
import axios from "axios";

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
            width: 250
        },
        {
            label: "ประเภท",
            field: "role",
            width: 250
        },
        {
            label: "อีเมล",
            field: "email",
            width: 250
        },
        {
            label: "เบอร์โทรศัพท์",
            field: "phone",
            width: 250
        },
        {
            label: "คณะ",
            field: "faculty",
            width: 250
        },
        {
            label: "สาขา",
            field: "major",
            width: 250
        },
        {
            label: "action",
            field: "action",
            sort: "disabled",
            width: 250
        }
    ];

    // init state
    const [rows, setRows] = React.useState([]);
    // const [users, setUsers] = React.useState(testData);

    const ColumnAction = (idx, res) => {
        return (
            <>
                <ModalUser key={idx} id={res.id} isCreatedProp={false} />
                {" || "}
                <ModalDelete key={idx + 1} id={res.id} api={"user"} />
            </>
        );
    };

    const fetchRowData = _data => {

        const _row = _data.map((res, idx) => {
            return {
                action: ColumnAction(idx, res),
                id: res.id,
                name: res.title + " " + res.first_name + " " + res.last_name,
                role: userRole(res.role),
                email: res.email,
                phone: res.telephone,
                faculty: "",
                major: res.major_id
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
                setRows(_items)
                // setUsers(res.data);
                // console.log(`items: `, typeof _items)
                // return _items;
            });
        // return _getusers;
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
        // const abort = new AbortController();

        getUsers();
        // console.log(`rows :` + _rows)
        // console.log([_rows])
        // setRows([_rows]);
        // willmount
        // return () => {
        //     abort.abort();
        // };
        // update
    }, []);
    // console.log(users);

    return { columns, rows };
};
