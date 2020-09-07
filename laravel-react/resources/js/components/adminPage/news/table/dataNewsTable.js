import React, { useEffect } from "react";
import { Image } from "react-bootstrap";

import ColumnActions from "./ColumsAction";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { _URL } from "../../../middleware/URL";

const dataNewsTable = setData => {
    // props

    // redux
    const redux_showNews = useSelector(state => state.showNews);

    // local variable
    const localImagePath = `/storage/`;

    // function
    const fetchRowData = _data => {
        const resData = _data.map((res, idx) => {
            return {
                id: idx + 1,
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
        });

        setData(preState => {
            return {
                ...preState,
                rows: resData
            };
        });
    };

    const initShowNews = () => {
        if (redux_showNews.data) {
            fetchRowData(redux_showNews.data);
        }
    };

    useEffect(() => {
        initShowNews();
    }, [redux_showNews]);

    return;
};

export default dataNewsTable;
