import React from "react";
import { Image } from "react-bootstrap";
import ModalNews from "../../modals/ModalNews";
import ModalDelete from "../../modals/ModalDelete";
import { testdata } from "./testdata";
import Axios from "axios";

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

    const [rows, setRows] = React.useState(testdata);

    const ColumnActions = (indexKey, res) => {
        return (
            <div>
                <ModalNews key={indexKey} type={false} response={res} />
                {" || "}
                <ModalDelete key={indexKey + 1} id={res.id} />
            </div>
        );
    };

    const fetchRowData = _data => {
        return _data.map((res, idx) => {
            // type: File, URL
            const responData = {
                id: res.id,
                images: (
                    <Image
                        src={res.image}
                        width="200px"
                        height="70px"
                        rounded
                    />
                ),
                url: res.ref,
                action: ColumnActions(idx, res)
            };

            return responData;
        });
    };

    const getNews = async setRows => {
        await Axios.get("http://localhost:8000/api/news").then(res => {
            setRows(fetchRowData(res.data.data));
        });
    };

    React.useEffect(() => {
        const abortController = new AbortController();
        getNews(setRows, { signal: abortController.signal });

        return () => {
            abortController.abort();
        };
    }, [setRows]);

    return { columns, rows };
};

export default dataNewsTable;
