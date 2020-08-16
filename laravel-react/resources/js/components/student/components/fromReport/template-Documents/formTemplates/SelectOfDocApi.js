import React from "react";
import { Form, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const SelectOfDocApi = props => {
    const { inputData, handle, lang } = props;
    const _subjects = useSelector(s => s.subjectsDocument);
    return (
        <Form.Group
            md={inputData.size}
            lg={inputData.size}
            as={Col}
            controlId={inputData.tage_type}
        >
            <Form.Label>
                {lang === "th" ? inputData.th_title : inputData.eng_title}
            </Form.Label>
            <Form.Control
                as="select"
                name={inputData.type}
                size="sm"
                onChange={handle}
                custom
            >
                <option value="0">
                    {lang === "th" ? inputData.th_name : inputData.eng_name}
                </option>
                {_subjects.length !== 0
                    ? _subjects.map((item, idx) => {
                          return (
                              <option
                                  key={idx.toString()}
                                  defaultValue={item.id}
                                  value={item.id}
                              >
                                  {lang === "th" ? item.th_name : item.eng_name}
                              </option>
                          );
                      })
                    : null}
            </Form.Control>
        </Form.Group>
    );
};

export default SelectOfDocApi;
