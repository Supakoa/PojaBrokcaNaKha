import React from "react";
import { Form, Col } from "react-bootstrap";

const SelectorOfDoc = props => {
    const { inputData, handle, lang } = props;
    const [_other, setOther] = React.useState(false);
    const [_otherLabel, setOtherLabel] = React.useState("");

    const onChangeLastIndext = e => {
        const { value } = e.target;
        if (
            inputData.tag_type === "select2" &&
            inputData.th_options.length - 1 === Number(value)
        ) {
            setOtherLabel(e.target.children[inputData.th_options.length].label);
        } else {
            handle(e);
        }
        setOther(
            inputData.tag_type === "select2" &&
                inputData.th_options.length - 1 === Number(value)
        );
    };

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
                    props.required[inputData.tag_type + inputData.type] ===
                    false
                        ? props.required[inputData.tag_type + inputData.type]
                        : props.isSubmit
                }
                isValid={
                    props.required[inputData.tag_type + inputData.type] ===
                    inputData.tag_type + inputData.type
                }
                as="select"
                name={inputData.type}
                size="sm"
                onChange={onChangeLastIndext}
                custom
            >
                <option>
                    {lang === "th" ? inputData.th_name : inputData.eng_name}
                </option>

                {lang === "th"
                    ? inputData.th_options.map((item, idx) => {
                          return (
                              <option
                                  key={idx.toString()}
                                  defaultValue={idx.toString()}
                                  value={idx.toString()}
                              >
                                  {item}
                              </option>
                          );
                      })
                    : inputData.eng_options.map((item, idx) => {
                          return (
                              <option
                                  key={idx.toString()}
                                  defaultValue={idx.toString()}
                                  value={idx.toString()}
                              >
                                  {item}
                              </option>
                          );
                      })}
            </Form.Control>

            <Form.Label hidden={!_other} className="pt-2">
                {_otherLabel}
            </Form.Label>
            <Form.Control
                isInvalid={props.required}
                hidden={!_other}
                size="sm"
                onChange={handle}
                name={inputData.type}
                placeholder="กรุณาใส่ข้อความที่ต้องการ"
            />
        </Form.Group>
    );
};

export default SelectorOfDoc;
