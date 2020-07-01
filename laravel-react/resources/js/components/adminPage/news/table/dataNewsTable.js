import React from "react";
import { Image } from "react-bootstrap";
import ModalNews from "../../modals/ModalNews";
import ModalDelete from "../../modals/ModalDelete";
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
            label: "action",
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
                images: (
                    <Image
                        src={res.images}
                        width="200px"
                        height="70px"
                        rounded
                    />
                ),
                url: res.url,
                action: ColumnActions(idx, res)
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

const ColumnActions = (indexKey, res) => {
    return (
        <div>
            <ModalNews key={indexKey} type={false} response={res} />
            {" || "}
            <ModalDelete key={indexKey + 1} id={res.id} />
        </div>
    );
};

export default dataNewsTable;
