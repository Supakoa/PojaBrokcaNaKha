import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
// import TableNews from "./table";
import TableGroups from "./table";
// import ModalGroup from '../modals/ModalGroup';
import ModalNewGroup from "./modal/ModalNewGroup";
import Axios from "axios";
import { showApproversAction } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import { _URL } from "../../middleware/URL";

export default function Group() {
    const [groups, setGroups] = useState([]);

    // redux
    const dispatch = useDispatch()

    const getApproversToRedux = async () => {
        await Axios.get(`${_URL}/api/users`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("_authLocal")}`
            }
        }).then(res => {
            let tmp_approvers = new Array();
            tmp_approvers = [...res.data.success];
            tmp_approvers = tmp_approvers.filter(item => {
                return item.role_id == 2;
            });
            dispatch(showApproversAction("INIT_APPROVERS", tmp_approvers));
        });
    };

    const getSubjectsToRedux = async () => {
        await Axios.get(`${_URL}/api/subjects`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("_authLocal")}`
            }
        }).then(res => {
            let tmp_subjects = new Array();
            tmp_subjects = [...res.data];
            dispatch(showApproversAction("INIT_SHOW_SUBJEECTS", tmp_subjects));
        });
    };

    useEffect(() => {
        getApproversToRedux()
        getSubjectsToRedux()
    }, [])

    return (
        <Card>
            <Card.Header className="text-center">
                <Card.Title className="p-2">
                    {/* {this.props.t('pr.index')} */}
                    ตั้งค่ากลุ่ม
                </Card.Title>
            </Card.Header>
            <Card.Body>
                {/* <ModalGroup isCreateProps={ true } /> */}
                <ModalNewGroup isCreateProps={true}  groups = {groups} setGroups = {setGroups} />
                <TableGroups groups = {groups} setGroups = {setGroups} />
            </Card.Body>
        </Card>
    );
}
