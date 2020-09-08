import React from "react";
import { Col, Form, Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const ListFaculties = ({
    methodHandle,
    userMajor,
    faculties,
    nowFacultyId
}) => {
    const { t } = useTranslation();
    React.useEffect(() => {}, [nowFacultyId]);

    return (
        <Col md={5} lg={5} className="py-2">
            {userMajor ? (
                <Form.Group>
                    <Form.Label>{t("students.forms.faculty.title")}</Form.Label>
                    <Form.Control
                        onChange={methodHandle}
                        as="select"
                        name="faculty_id"
                        value={
                            nowFacultyId !== null
                                ? nowFacultyId
                                : userMajor.faculty_id
                        }
                        custom
                        className="border-right-0 border-left-0 border-top-0 "
                    >
                        {userMajor !== undefined ? (
                            faculties.map((items, idx) => {
                                if (items.id !== userMajor.faculty.id) {
                                    return (
                                        <option
                                            key={idx.toString()}
                                            defaultValue={idx + 1}
                                            value={items.id}
                                        >
                                            {items.name}
                                        </option>
                                    );
                                } else {
                                    return (
                                        <option
                                            defaultValue={0}
                                            key={idx.toString()}
                                            value={userMajor.faculty.id}
                                        >
                                            {userMajor.faculty.name}
                                        </option>
                                    );
                                }
                            })
                        ) : (
                            <option defaultValue={0}>
                                {t("students.forms.faculty.option")}
                            </option>
                        )}
                    </Form.Control>
                </Form.Group>
            ) : (
                <Spinner animation="border" />
            )}

            <Form.Text className="text-muted pl-2">
                {t("students.forms.faculty.text")}
            </Form.Text>
        </Col>
    );
};

export default ListFaculties;
