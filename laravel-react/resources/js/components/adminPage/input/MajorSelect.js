const { useEffect } = require("react");

import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
import {
    selectMajorId,
    selectFacultyId,
    updateFormEditUserBySingleData
} from "../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import { useTranslation } from "react-i18next";

export default function MajorSelect({ defaultData, onSelectOption }) {
    const { t } = useTranslation();
    const [major, setMajor] = useState(null);
    const [focusReduxSelectFaculty, setfocusReduxSelectFaculty] = useState(
        true
    );

    const redux_selectFaculty = useSelector(state => state.selectFaculty);
    const redux_selectMajor = useSelector(state => state.selectMajor);
    const redux_userForm = useSelector(state => state.formUser);
    const dispatch = useDispatch();

    // const initMajor = async () => {
    //     if (!!redux_userForm.majorId) {
    //         dispatch(selectMajorId(redux_userForm.majorId));

    //         if (redux_userForm.majorId === 0) {
    //             dispatch(selectFacultyId(0));
    //         } else {
    //             await Axios.get(
    //                 `http://localhost:8000/api/majors/${redux_userForm.majorId}`
    //             ).then(res => {
    //                 dispatch(selectFacultyId(res.data.faculty_id));
    //             });
    //         }
    //     }
    // };

    // const updateMajor = async () => {
    //     if (redux_selectFaculty.id === 0 || !!redux_selectFaculty.id) {
    //         setMajor(null);
    //     } else {
    //         const getMajor = await Axios.get(
    //             `http://localhost:8000/api/faculties/${redux_selectFaculty.id}/majors`
    //         ).then(res => {
    //             return res.data;
    //         });

    //         setMajor(getMajor);
    //     }
    // };


    return (
        <Form.Group as={Col} controlId="formGroupMajorSelect">
            <Form.Label>{t("major.index")}</Form.Label>

            <Form.Control
                as="select"
                name="major"
                onChange={onSelectOption}
                disabled={focusReduxSelectFaculty}
                value={defaultData.id ? defaultData.id : 0}
            >
                <option value={0}>{t("major.selectMajor")}</option>
                <option>-</option>
            </Form.Control>
        </Form.Group>
    );
}
