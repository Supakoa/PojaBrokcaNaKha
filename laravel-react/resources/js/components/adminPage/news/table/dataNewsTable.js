import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import Axios from "axios";
import { columns } from "./columns";
import ColumnActions from "./ColumsAction";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { newsActions } from "../../../../redux/actions";
import {_URL} from "../../../middleware/URL";

const dataNewsTable = () => {

    const localImagePath = `/storage/`

    const [rows, setRows] = React.useState([]);
    const { t } = useTranslation("", { useSuspense: false });

    // redux
    const redux_showNews = useSelector(state => state.showNews)
    const dispatch = useDispatch()

    const fetchRowData = _data => {
        setRows(
            _data.map((res, idx) => {
                // type: File, URL
                const responData = {
                    id: idx+1,
                    images: (
                        <Image
                            src={localImagePath + res.image}
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
        await Axios.get(`${_URL}/api/news`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(
                    "_authLocal"
                )}`
            }
        }).then(async res => {
            await dispatch(newsActions("INIT_SHOW_NEWS", res.data))
        });
    };

    const initShowNews = () => {
        if (typeof redux_showNews.data != 'undefined') {
            const _items = fetchRowData(redux_showNews.data);
        }
    }

    useEffect(() => {
        initShowNews()
    }, [redux_showNews])

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
