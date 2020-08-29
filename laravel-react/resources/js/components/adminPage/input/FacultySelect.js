import React, { useEffect, useState } from "react";
import { Col, Form } from "react-bootstrap";
import Axios from "axios";
import { selectFacultyId, selectMajorId } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function FacultySelect({ defaultData, onSelectOption }) {
    const { t } = useTranslation();
    const [faculty, setFaculty] = useState([]);

    // local state

    // redux
    const redux_selectFaculty = useSelector(state => state.selectFaculty);
    const redux_selectMajor = useSelector(state => state.selectMajor);
    const dispatch = useDispatch();

    const apiPath = `http://localhost:8000/api/faculties`;

    const initFaculty = async () => {
        const getFaculty = await Axios.get(apiPath).then(res => {
            return res.data.success;
        });
        setFaculty(getFaculty);
    };

    React.useEffect(() => {
        if (!!defaultData && faculty.length === 0) {
            initFaculty();
        }
    });

    console.log(faculty);

    return (
        <Form.Group as={Col} controlId="formGroupFacultySelect">
            <Form.Label>{t("faculty.index")}</Form.Label>

            <Form.Control
                as="select"
                name="facultySelect"
                onChange={onSelectOption}
                value={defaultData.faculty_id ? defaultData.faculty_id : 0}
            >
                <option key="0" value={0}>
                    {t("faculty.selectFaculty")}
                </option>
                {faculty.length > 0 ? (
                    faculty.map((item, idx) => {
                        return (
                            <option key={idx} value={item.id}>
                                {item.name}
                            </option>
                        );
                    })
                ) : (
                    <option>-</option>
                )}
            </Form.Control>
        </Form.Group>
    );
}
