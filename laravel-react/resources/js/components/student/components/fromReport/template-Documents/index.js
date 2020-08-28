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
import { putDocumentUser } from "../../../../middleware/axios/putDocumentUser";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userDocument } from "../../../../../redux/actions";
import { fetchUserDoc } from "../../../../middleware/axios/fetchUserDoc";
import { useTranslation } from "react-i18next";

const TemplateDocuments = ({
    patternInput,
    id,
    lang,
    statusDocument,
    setRows
}) => {
    const _dispatch = useDispatch();
    const _history = useHistory();
    const { i18n } = useTranslation();
    const _userId = useSelector(s => s.userState.id);
    const [_isRequire, setIsRequire] = React.useState({});
    const [_numRequired, setNumRequired] = React.useState(0);
    const [_isSubmit, setIsSubmit] = React.useState(false);
    const [_document, setDocument] = React.useState({});

    const handleChangeForm = async e => {
        const { value, type, name, files, id } = e.target;

        if (type === "textarea") {
            setDocument({ ..._document, [name]: value });
        } else if (type === "file") {
            const file = files[0];

            const _pathImg = await uploadsImage(file, localStorage._authLocal);
            if (_pathImg) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    onOpen: toast => {
                        toast.addEventListener("mouseenter", Swal.stopTimer);
                        toast.addEventListener("mouseleave", Swal.resumeTimer);
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Upload Success !!"
                });
                setDocument({
                    ..._document,
                    [name]: _pathImg
                });
            }
        } else {
            setIsRequire({
                ..._isRequire,
                [id]: false
            });
            setDocument({ ..._document, [name]: value });
        }
    };

    const handleSending = async () => {
        let _arry = [];
        let _newDoc = {};
        if (
            Object.keys(_isRequire).length === _numRequired ||
            !!statusDocument
        ) {
            patternInput.forEach(master => {
                let isData = false;
                Object.keys(_document).forEach((input, idx) => {
                    if (master.type === input) {
                        _arry = [
                            ..._arry,
                            { ...master, data: Object.values(_document)[idx] }
                        ];
                        isData = true;
                    }
                });
                if (!isData) {
                    _arry = [..._arry, master];
                }
            });

            const _docForm = {
                form_id: id,
                user_id: _userId,
                data: JSON.stringify({ inputs: _arry })
            };

            if (!!statusDocument) {
                _newDoc = await putDocumentUser(
                    localStorage._authLocal,
                    _docForm,
                    id
                );
            } else {
                _newDoc = await postDocumentUser(
                    localStorage._authLocal,
                    _docForm
                );
            }

            if (_newDoc.id) {
                Swal.fire("complete. !", "ส่งเรียบร้อย", "success").then(
                    async res => {
                        if (res.value) {
                            const _newDocs = await fetchUserDoc({
                                id: _userId,
                                token: localStorage._authLocal
                            });
                            if (_newDocs) {
                                _dispatch(userDocument(_newDocs));
                                _history.push("/student");
                                if (!!statusDocument) setRows([]);
                            }
                        }
                    }
                );
            }
        } else {
            setIsSubmit(true);
        }
    };

    const filterRequiredInput = patternInput => {
        const _numRequired = patternInput.filter(item => {
            return (
                item.tag_type === "select1" ||
                item.tag_type === "select2" ||
                item.tag_type === "select3" ||
                item.tag_type === "date"
            );
        });
        setNumRequired(_numRequired.length);
    };

    React.useEffect(() => {
        const abort = new AbortController();
        filterRequiredInput(patternInput, { signal: abort.signal });
        return () => abort.abort();
    });
    return (
        <Form className="py-3">
            <Form.Row>
                {patternInput.map((item, idx) => {
                    if (item.tag_type === "select1") {
                        return (
                            <SelectorOfDoc
                                isSubmit={_isSubmit}
                                required={_isRequire}
                                lang={lang}
                                inputData={item}
                                key={idx.toString()}
                                handle={handleChangeForm}
                                defaultData={item.data}
                            />
                        );
                    } else if (item.tag_type === "select2") {
                        return (
                            <SelectorOfDoc
                                required={_isRequire}
                                isSubmit={_isSubmit}
                                lang={lang}
                                inputData={item}
                                key={idx.toString()}
                                handle={handleChangeForm}
                                defaultData={item.data}
                            />
                        );
                    } else if (item.tag_type === "select3") {
                        return (
                            <SelectOfDocApi
                                required={_isRequire}
                                isSubmit={_isSubmit}
                                lang={lang}
                                inputData={item}
                                key={idx.toString()}
                                handle={handleChangeForm}
                                defaultData={item.data}
                            />
                        );
                    } else if (item.tag_type === "file") {
                        return (
                            <FileOfDoc
                                lang={lang}
                                inputData={item}
                                key={idx.toString()}
                                handle={handleChangeForm}
                                defaultData={item.data}
                            />
                        );
                    } else if (item.tag_type === "text") {
                        return (
                            <TextOfDoc
                                lang={lang}
                                inputData={item}
                                key={idx.toString()}
                                handle={handleChangeForm}
                                defaultData={item.data}
                            />
                        );
                    } else if (item.tag_type === "date") {
                        return (
                            <DateOfDoc
                                required={_isRequire}
                                isSubmit={_isSubmit}
                                lang={lang}
                                inputData={item}
                                key={idx.toString()}
                                handle={handleChangeForm}
                                defaultData={item.data}
                            />
                        );
                    } else {
                        return (
                            <Container
                                key={idx.toString()}
                                className="d-flex align-items-center justify-content-center"
                            >
                                <h6>
                                    {i18n.language === "th"
                                        ? "ไม่มีข้อมูล"
                                        : "data empty."}
                                </h6>{" "}
                            </Container>
                        );
                    }
                })}
            </Form.Row>
            <Button variant="info" onClick={handleSending}>
                {i18n.language === "th" ? "ส่ง" : "send"}{" "}
                <i className="fas fa-paper-plane"></i>
            </Button>
        </Form>
    );
};

export default TemplateDocuments;
