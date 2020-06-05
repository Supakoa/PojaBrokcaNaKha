import React from "react";
import ModalNews from "../modalCRUD/ModalNews";
import ModalDelete from "../modalCRUD/ModalDelete";
import { testdata } from "./testdata";

const dataNewsTable = () => {
    const columns = [
        {
            label: "#",
            field: "id",
            sort: "desc",
            width: 20
        },
        {
            label: "ที่อยู่เว็บ",
            field: "url",
            width: 270
        },
        {
            label: "รูปข่าว",
            field: "images",
            width: 200,
            sort: "disabled"
        },
        {
            label: <ModalNews type={true} />,
            field: "action",
            width: 100,
            sort: "disabled"
        }
    ];
    const [rows, setRows] = React.useState([]);

    const fetchRowData = _data => {
        const _row = _data.map((res, idx) => {
            // console.log(res);
            const responData = {
                id: res.id,
                images: res.images,
                url: res.url,
                action: ColumnActions(idx, res.id)
            };
            return responData;
        });
        return _row;
    };

    React.useEffect(() => {
        const abortController = new AbortController();
        const _row = fetchRowData(testdata, { signal: abortController.signal });
        setRows(_row);
        // console.log(_row);

        return () => {
            abortController.abort();
        };
    }, []);
    return { columns, rows };
};

const ColumnActions = (indexKey, _id) => {
    return (
        <div>
            <ModalNews key={indexKey} type={false} id={_id} />
            {" || "}
            <ModalDelete key={indexKey + 1} id={_id} />
        </div>
    );
};

export default dataNewsTable;
