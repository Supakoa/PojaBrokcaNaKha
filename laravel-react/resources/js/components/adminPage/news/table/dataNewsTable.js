import React from "react";
import { Image } from "react-bootstrap";
import ModalNews from "../../modals/ModalNews";
import ModalDelete from "../../modals/ModalDelete";
import { testdata } from "./testdata";
import Axios from "axios";

const ColumnActions = (indexKey, res) => {
    return (
        <div>
            <ModalNews key={indexKey} type={false} response={res} />
            {" || "}
            <ModalDelete key={indexKey + 1} id={res.id} />
        </div>
    );
};

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
    const [news, setNews] = React.useState(testdata)

    const fetchRowData = _data => {
        return _data.map((res, idx) => {
            // type: File, URL
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
    };

    const getNews = async () => {
        const newsData = await Axios.get("http://localhost:8000/api/news").then(res => {
            setNews(res.data.data)
            console.log(res.data.data)
        })

        await setRows(fetchRowData(newsData, {
            signal: abortController.signal
        }))
    }

    React.useEffect(() => {
        const abortController = new AbortController();
        getNews()
        // const _row = fetchRowData(news, { signal: abortController.signal });
        // setRows(_row);
        // console.log(_row);

        return () => {
            abortController.abort();
        };
    }, []);

    return { columns, rows };
};

export default dataNewsTable;
