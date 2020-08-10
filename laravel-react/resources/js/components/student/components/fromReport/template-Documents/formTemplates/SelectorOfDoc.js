import React from "react";
import { Form, Col } from "react-bootstrap";

const SelectorOfDoc = props => {
    const { inputData, handle, name } = props;
    const [_other, setOther] = React.useState(false);
    const [_otherLabel, setOtherLabel] = React.useState("");

    const onChangeLastIndext = e => {
        const { value } = e.target;
        if (
            inputData.tag_type === "select2" &&
            inputData.th_options.length === Number(value)
        ) {
            setOtherLabel(
                inputData.th_options.length === Number(value)
                    ? e.target.children[inputData.th_options.length].label
                    : ""
            );
        } else {
            handle(e);
        }
        setOther(
            inputData.tag_type === "select2" &&
                inputData.th_options.length === Number(value)
        );
    };

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
                name={name}
                size="sm"
                onChange={onChangeLastIndext}
                custom
            >
                <option value="0">{inputData.th_name}</option>

                {inputData.th_options !== undefined ? (
                    inputData.th_options.map((item, idx) => {
                        return (
                            <option
                                key={idx.toString()}
                                defaultValue={idx.toString()}
                                value={(idx + 1).toString()}
                            >
                                {item}
                            </option>
                        );
                    })
                ) : (
                    <option>ไม่มีข้อมูล</option>
                )}
            </Form.Control>
            {_other ? (
                <>
                    <Form.Label className="pt-2">{_otherLabel}</Form.Label>
                    <Form.Control
                        size="sm"
                        onChange={handle}
                        name={inputData.type}
                    />
                </>
            ) : null}
        </Form.Group>
    );
};

export default SelectorOfDoc;
