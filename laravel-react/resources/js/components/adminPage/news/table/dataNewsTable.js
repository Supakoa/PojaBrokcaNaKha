import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import Axios from "axios";
import { columns } from "./columns";
import ColumnActions from "./ColumsAction";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { newsActions } from "../../../../redux/actions";
import {_URL} from "../../../middleware/URL";

const dataNewsTable = (setData) => {
    // props

    // local state
    // const [rows, setRows] = React.useState([]);
    const localImagePath = `/storage/`

    const [rows, setRows] = React.useState([]);
    const { t } = useTranslation();

    // redux
    const redux_showNews = useSelector(state => state.showNews)

    // local variable
    const localImagePath = `/storage/`

    // function
    const fetchRowData = _data => {
        const resData = _data.map((res, idx) => {
            return {
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
            }
        })

        setData(preState => {
            return {
                ...preState,
                rows: resData
            }
        })
    }

    const initShowNews = () => {
        if (redux_showNews.data) {
            fetchRowData(redux_showNews.data);
        }
    }

    useEffect(() => {
        initShowNews()
    }, [redux_showNews])

    // React.useEffect(() => {
    //     const abortController = new AbortController();
    //     getNews({ signal: abortController.signal });

    //     return () => {
    //         abortController.abort();
    //     };
    // }, []);

    return ;
};

export default dataNewsTable;
