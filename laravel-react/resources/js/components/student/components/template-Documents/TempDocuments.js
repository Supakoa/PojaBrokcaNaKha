import React from "react";
import { Form, Container } from "react-bootstrap";
import SelectOfDocApi from "./formTemplates/SelectOfDocApi";
import SelectorOfDoc from "./formTemplates/SelectorOfDoc";
import FileOfDoc from "./formTemplates/FileOfDoc";
import TextOfDoc from "./formTemplates/TextOfDoc";
import DateOfDoc from "./formTemplates/DateOfDoc";

const TemplateDocuments = props => {
    const { patternInput } = props;
    // console.log(patternInput);
    return (
        <Form.Row className="py-3">
            {patternInput.inputs.map((item, idx) => {
                switch (item.tag_type) {
                    case "select1":
                        return (
                            <SelectorOfDoc
                                inputData={item}
                                key={idx.toString()}
                            />
                        );
                    case "select2":
                        return (
                            <SelectorOfDoc
                                inputData={item}
                                key={idx.toString()}
                            />
                        );
                    case "select3":
                        return (
                            <SelectOfDocApi
                                inputData={item}
                                key={idx.toString()}
                            />
                        );
                    case "file":
                        return (
                            <FileOfDoc inputData={item} key={idx.toString()} />
                        );
                    case "text":
                        return (
                            <TextOfDoc inputData={item} key={idx.toString()} />
                        );
                    case "date":
                        return (
                            <DateOfDoc inputData={item} key={idx.toString()} />
                        );
                    default:
                        return (
                            <Container
                                key={idx.toString()}
                                className="d-flex align-items-center justify-content-center"
                            >
                                <h6>ไม่มีข้อมูล</h6>{" "}
                            </Container>
                        );
                }
            })}
        </Form.Row>
    );
};

export default TemplateDocuments;
