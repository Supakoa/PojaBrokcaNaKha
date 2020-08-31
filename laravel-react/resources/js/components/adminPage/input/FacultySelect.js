import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import Axios from "axios";
import { useTranslation } from "react-i18next";

export default function FacultySelect({
    defaultData,
    onSelectOption,
    isSelect,
    setIdFac
}) {
    const { t } = useTranslation();
    const [faculty, setFaculty] = useState([]);
    const [selected, setSelected] = React.useState(0);

    const apiPath = `http://localhost:8000/api/faculties`;

    const selectedFaculty = e => {
        setSelected(e.target.value);
        setIdFac(e.target.value);
        isSelect(false);
        onSelectOption(e);
    };

    const initFaculty = async () => {
        const getFaculty = await Axios.get(apiPath).then(res => {
            return res.data.success;
        });
        setFaculty(getFaculty);
    };

    React.useEffect(() => {
        if (faculty.length === 0) {
            initFaculty();
        }
    }, [selected]);

    return (
        <Form.Group as={Col} controlId="formGroupFacultySelect">
            <Form.Label>{t("faculty.index")}</Form.Label>

            <Form.Control
                as="select"
                name="facultySelect"
                onChange={selectedFaculty}
                value={
                    selected == 0
                        ? defaultData.faculty_id
                            ? defaultData.faculty_id
                            : selected
                        : selected
                }
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
