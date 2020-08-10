import React from "react";
import { Form, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const SelectOfDocApi = props => {
    const { inputData, handle, name } = props;
    const _subjects = useSelector(s => s.subjectsDocument);
    return (
        <Form.Group
            md={inputData.size}
            lg={inputData.size}
            as={Col}
            controlId={inputData.tage_type}
        >
            <Form.Label>{inputData.th_title}</Form.Label>
            <Form.Control
                as="select"
                name={inputData.type}
                size="sm"
                onChange={handle}
                custom
            >
                <option value="0">{inputData.th_name}</option>
                {_subjects.length !== 0 ? (
                    _subjects.map((item, idx) => {
                        return (
                            <option
                                key={idx.toString()}
                                defaultValue={item.id}
                                value={(idx + 1).toString()}
                            >
                                {item.th_name}
                            </option>
                        );
                    })
                ) : (
                    <option>ไม่มีข้อมูล</option>
                )}
            </Form.Control>
        </Form.Group>
    );
};

export default SelectOfDocApi;
