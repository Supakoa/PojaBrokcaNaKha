import React from "react";
import { Col, Form } from "react-bootstrap";

const ListFaculties = props => {
    const { methodHandle, userMajor, faculties } = props;
    // console.log(userMajor);

    return (
        <Col md={5} lg={5} className="py-2">
            <Form.Group>
                <Form.Label>คณะ</Form.Label>
                <Form.Control
                    onChange={methodHandle}
                    as="select"
                    name="faculty_id"
                    custom
                    className="border-right-0 border-left-0 border-top-0 "
                >
                    {userMajor !== undefined ? (
                        faculties.map((items, idx) => {
                            // console.log(items);
                            if (items.id !== userMajor.faculty.id) {
                                return (
                                    <option
                                        key={idx.toString()}
                                        defaultValue={idx}
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
            <Form.Text className="text-muted pl-2">
                ต้องทำการเลือก หรือ เปลี่ยนแปลงคณะถึงสามารถ เลือกสาขาได้.
            </Form.Text>
        </Col>
    );
};

export default ListFaculties;
