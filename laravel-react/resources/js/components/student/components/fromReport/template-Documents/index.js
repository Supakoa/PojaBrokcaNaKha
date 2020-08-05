import React from "react";
import { Form, Container, Button } from "react-bootstrap";
import SelectOfDocApi from "./formTemplates/SelectOfDocApi";
import SelectorOfDoc from "./formTemplates/SelectorOfDoc";
import FileOfDoc from "./formTemplates/FileOfDoc";
import TextOfDoc from "./formTemplates/TextOfDoc";
import DateOfDoc from "./formTemplates/DateOfDoc";
import { _urlUploads } from "../../../../middleware/apis";
import uploadsImage from "../../../../middleware/axios/uploads";
import Swal from "sweetalert2";
import { postDocumentUser } from "../../../../middleware/axios/postDocumentUser";

const TemplateDocuments = props => {
    const { patternInput } = props;
    const [_document, setDocument] = React.useState({});
    const [_valid, setValid] = React.useState(0);
    const _token = localStorage._authLocal;

    const handleChangeForm = async e => {
        const { value, type, name, files } = e.target;
        if (type === "select-one") {
            if (value !== "0") {
                setDocument({ ..._document, [name]: value });
                setValid(_valid + 1);
            }
        } else if (type === "file") {
            const file = files[0];
            const _pathImg = await uploadsImage(file);
            if (_pathImg) {
                setDocument({
                    ..._document,
                    [name]: _pathImg
                });
                setValid(_valid + 1);
            }
        } else {
            setDocument({ ..._document, [name]: value });
            setValid(_valid + 1);
        }
    };

    const handleSending = () => {
        if (_valid === patternInput.length) {
            const _resDoc = postDocumentUser(_token, _document);
            if (_resDoc) {
                Swal.fire("complete. !", "ส่งเรียบร้อย", "success");
            } else {
                Swal.fire(
                    "your forms is fail",
                    "การส่งผิดพลาด กรุณาตรวจสอบอีกครั้ง",
                    "error"
                );
            }
        } else {
            Swal.fire("your forms is fail", "กรุณาตรวจสอบข้อมูล", "error");
        }
    };

    return (
        <Form className="py-3">
            <Form.Row>
                {patternInput.map((item, idx) => {
                    switch (item.tag_type) {
                        case "select1":
                            return (
                                <SelectorOfDoc
                                    inputData={item}
                                    key={idx.toString()}
                                    handle={handleChangeForm}
                                />
                            );
                        case "select2":
                            return (
                                <SelectorOfDoc
                                    inputData={item}
                                    key={idx.toString()}
                                    handle={handleChangeForm}
                                />
                            );
                        case "select3":
                            return (
                                <SelectOfDocApi
                                    inputData={item}
                                    key={idx.toString()}
                                    handle={handleChangeForm}
                                />
                            );
                        case "file":
                            return (
                                <FileOfDoc
                                    inputData={item}
                                    key={idx.toString()}
                                    handle={handleChangeForm}
                                />
                            );
                        case "text":
                            return (
                                <TextOfDoc
                                    inputData={item}
                                    key={idx.toString()}
                                    handle={handleChangeForm}
                                />
                            );
                        case "date":
                            return (
                                <DateOfDoc
                                    inputData={item}
                                    key={idx.toString()}
                                    handle={handleChangeForm}
                                />
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
            <Button variant="info" onClick={handleSending}>
                sending
            </Button>
        </Form>
    );
};

export default TemplateDocuments;
