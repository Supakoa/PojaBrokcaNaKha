import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import ModalNews from "./../modals/ModalNews";
import TableNews from "./table";
import { useDispatch } from "react-redux";
import { newsActions } from "../../../redux/actions";
import Axios from "axios";
import {_URL} from "../../middleware/URL";

const News = ({ t }) => {
    // state variable

    // redux
    const dispatch = useDispatch()

    // local variable

    // fucntion
    const initShowNews = async () => {
        await Axios.get(`${_URL}/api/news`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(
                    "_authLocal"
                )}`
            }
        }).then(res => {
            dispatch(newsActions("INIT_SHOW_NEWS", res.data))
        });
    }

    // useEffect
    useEffect(() => {
        initShowNews()
    }, [])

    // return component

    return (
        <Card>
            <Card.Header className="text-center">
                <Card.Title className="p-2">
                    {t("pr.index")}
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <ModalNews isCreateProps={true} />
                <TableNews paging={true} />
            </Card.Body>
        </Card>
    )
}
export default News
