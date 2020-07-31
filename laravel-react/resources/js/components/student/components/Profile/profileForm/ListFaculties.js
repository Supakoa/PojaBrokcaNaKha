import React from "react";
import { Col, Form, Spinner } from "react-bootstrap";

const ListFaculties = props => {
    const { methodHandle, userMajor, faculties, nowFacultyId } = props;
    console.log(nowFacultyId);
    console.log(userMajor);
    React.useEffect(() => {}, [nowFacultyId]);

    return (
        <Col md={5} lg={5} className="py-2">
            {userMajor ? (
                <Form.Group>
                    <Form.Label>คณะ</Form.Label>
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
                            <option defaultValue={0}>เลือกคณะ</option>
                        )}
                    </Form.Control>
                </Form.Group>
            ) : (
                <Spinner animation="border" />
            )}

            <Form.Text className="text-muted pl-2">
                ต้องทำการเลือก หรือ เปลี่ยนแปลงคณะถึงสามารถ เลือกสาขาได้.
            </Form.Text>
        </Col>
    );
};

export default ListFaculties;
