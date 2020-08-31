import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
import Axios from "axios";
import { useTranslation } from "react-i18next";

export default function MajorSelect({
    defaultData,
    onSelectOption,
    isSelectFac,
    facultyId
}) {
    const { t } = useTranslation();
    const [major, setMajor] = useState([]);
    const [selected, setSelected] = useState(0);

    const selcetedMajor = e => {
        setSelected(e.target.value);
        onSelectOption(e);
    };

    const initMajor = async id => {
        if (!!id) {
            await Axios.get(`http://localhost:8000/api/majors/${id}`).then(
                res => {
                    console.log(res);
                    setMajor(res.data.faculty_id);
                }
            );
        }
    };

    React.useEffect(() => {
        if (major.length === 0) {
            initMajor(facultyId);
        }
    }, [facultyId, major]);

    return (
        <Form.Group as={Col} controlId="formGroupMajorSelect">
            <Form.Label>{t("major.index")}</Form.Label>

            <Form.Control
                as="select"
                name="major"
                onChange={selcetedMajor}
                disabled={isSelectFac}
                value={
                    selected == 0
                        ? defaultData.id
                            ? defaultData.id
                            : selected
                        : selected
                }
            >
                <option value={0}>{t("major.selectMajor")}</option>
                {major.length > 0 ? (
                    major.map((item, idx) => {
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
