import React from "react";
import { Image } from "react-bootstrap";
import Axios from "axios";
import { columns } from "./columns";
import ColumnActions from "./ColumsAction";
import { useTranslation } from "react-i18next";

const dataNewsTable = () => {
    const [rows, setRows] = React.useState([]);
    const { t } = useTranslation("", { useSuspense: false });

    const fetchRowData = _data => {
        setRows(
            _data.map((res, idx) => {
                // type: File, URL
                const responData = {
                    id: idx,
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
            })
        );
    };

    const getNews = async () => {
        await Axios.get("http://localhost:8000/api/news").then(res => {
            fetchRowData(res.data);
        });
    };

    React.useEffect(() => {
        const abortController = new AbortController();
        getNews({ signal: abortController.signal });

        return () => {
            abortController.abort();
        };
    }, []);

    return { columns: columns(t), rows };
};

export default dataNewsTable;
