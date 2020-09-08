import React, { Component, useEffect } from "react";
import { Card } from "react-bootstrap";
import StepTable from "./table";
import Axios from "axios";
import {_URL} from "../../middleware/URL";
import { useDispatch } from "react-redux";
import { showFormsAction, showGroupAction } from "../../../redux/actions";

export default function StepReport() {

    // external module

    // lcoal state

    // redux
    const dispatch = useDispatch()

    // local variable
    const pathGetForms = `${_URL}/api/forms`;

    // function
    const initShowStepReports = async () => {
        const showForms = await Axios.get(pathGetForms, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("_authLocal")}`
            }
        }).then(res => {
            dispatch(showFormsAction("INIT_SHOW_FORM", res.data));
        });
    };

    const initShowGroupsRedux = () => {
        Axios.get(`${_URL}/api/groups`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("_authLocal")}`
            }
        }).then(res => {
            dispatch(showGroupAction("INIT_SHOW_GROUP", res.data));
        });
    };

    // useEffect
    useEffect(() => {
        initShowStepReports();
        initShowGroupsRedux();
    }, []);

    // return component

    return (
        <Card>
            <Card.Header className="text-center">
                <Card.Title className="p-2">ขั้นตอนเอกสาร</Card.Title>
            </Card.Header>
            <Card.Body>
                <StepTable />
            </Card.Body>
        </Card>
    );
}
