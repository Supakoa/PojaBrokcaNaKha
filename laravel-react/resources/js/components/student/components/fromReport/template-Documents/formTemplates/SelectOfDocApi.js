import React from "react";
import { Form, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const SelectOfDocApi = ({
    inputData,
    handle,
    lang,
    defaultData,
    required,
    isSubmit
}) => {
    const _subjects = useSelector(s => s.subjectsDocument);
    const [_defSub, setDefSub] = React.useState({});

    React.useEffect(() => {
        if (!!defaultData && _subjects.length > 0) {
            const _subject = _subjects.find(item => {
                return item.id === Number(defaultData);
            });
            if (_subject) setDefSub(_subject);
        }
    });

    return (
        <Form.Group
            md={inputData.size}
            lg={inputData.size}
            as={Col}
            controlId={inputData.tag_type + inputData.type}
        >
            <Form.Label>
                {lang === "th" ? inputData.th_title : inputData.eng_title}
            </Form.Label>
            <Form.Control
                isInvalid={
                    required[inputData.tag_type + inputData.type] === false
                        ? required[inputData.tag_type + inputData.type]
                        : isSubmit
                }
                as="select"
                name={inputData.type}
                size="sm"
                onChange={handle}
                custom
            >
                <option>
                    {!!defaultData && Object.keys(_defSub).length > 0
                        ? lang === "th"
                            ? _defSub.th_name
                            : _defSub.eng_name
                        : lang === "th"
                        ? inputData.th_name
                        : inputData.eng_name}
                </option>
                {_subjects.length > 0
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
