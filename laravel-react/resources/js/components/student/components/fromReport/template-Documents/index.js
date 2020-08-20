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
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userDocument } from "../../../../../redux/actions";
import { fetchUserDoc } from "../../../../middleware/axios/fetchUserDoc";

const TemplateDocuments = props => {
    const { patternInput, id, lang } = props;
    const _dispatch = useDispatch();
    const _history = useHistory();
    const _userId = useSelector(s => s.userState.id);
    const [_document, setDocument] = React.useState({});
    const [_valid, setValid] = React.useState({});
    const handleChangeForm = async e => {
        const { value, type, name, files } = e.target;

        if (type === "select-one") {
            if (value !== "0") {
                setDocument({ ..._document, [name]: value });
                setValid({
                    ..._valid,
                    [name]: true
                });
            }
        } else if (type === "file") {
            const file = files[0];

            const _pathImg = await uploadsImage(file);
            if (_pathImg) {
                setDocument({
                    ..._document,
                    [name]: _pathImg
                });
                setValid({
                    ..._valid,
                    [name]: true
                });
            }
        } else {
            setDocument({ ..._document, [name]: value });
            setValid({
                ..._valid,
                [name]: true
            });
        }
    };

    const handleSending = async () => {
        let _arry = [];
        Object.keys(_document).map((item, idx) => {
            const _newDoc = patternInput.find(id => {
                return id.type === item;
            });
            if (_newDoc) {
                _newDoc.data = Object.values(_document)[idx];
                _arry = [..._arry, _newDoc];
            }
        });

        const _docForm = {
            form_id: id,
            user_id: _userId,
            data: JSON.stringify({ inputs: _arry })
        };

        // console.log(_docForm);
        const _resDoc = await postDocumentUser(
            localStorage._authLocal,
            _docForm
        );
        if (_resDoc.created_at) {
            Swal.fire("complete. !", "ส่งเรียบร้อย", "success").then(
                async () => {
                    _history.push("/student");
                    const _newDocs = await fetchUserDoc({
                        id: _userId,
                        token: localStorage._authLocal
                    });
                    if (_newDocs) {
                        _dispatch(userDocument(_newDocs));
                    }
                }
            );
        } else {
            Swal.fire("Error !!", _resDoc.message, "error");
        }
    };

    return (
        <Form className="py-3" onSubmit={handleSending}>
            <Form.Row>
                {patternInput.map((item, idx) => {
                    if (item.tag_type === "select1") {
                        return (
                            <SelectorOfDoc
                                lang={lang}
                                inputData={item}
                                key={idx.toString()}
                                handle={handleChangeForm}
                            />
                        );
                    } else if (item.tag_type === "select2") {
                        return (
                            <SelectorOfDoc
                                lang={lang}
                                inputData={item}
                                key={idx.toString()}
                                handle={handleChangeForm}
                            />
                        );
                    } else if (item.tag_type === "select3") {
                        return (
                            <SelectOfDocApi
                                lang={lang}
                                inputData={item}
                                key={idx.toString()}
                                handle={handleChangeForm}
                            />
                        );
                    } else if (item.tag_type === "file") {
                        return (
                            <FileOfDoc
                                lang={lang}
                                inputData={item}
                                key={idx.toString()}
                                handle={handleChangeForm}
                            />
                        );
                    } else if (item.tag_type === "text") {
                        return (
                            <TextOfDoc
                                lang={lang}
                                inputData={item}
                                key={idx.toString()}
                                handle={handleChangeForm}
                            />
                        );
                    } else if (item.tag_type === "date") {
                        return (
                            <DateOfDoc
                                lang={lang}
                                inputData={item}
                                key={idx.toString()}
                                handle={handleChangeForm}
                            />
                        );
                    } else {
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
            <Button variant="info" type="submit" >
                sending
            </Button>
        </Form>
    );
};

export default TemplateDocuments;
