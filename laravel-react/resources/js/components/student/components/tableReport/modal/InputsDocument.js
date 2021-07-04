import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import ListDetailDocs from "./ListDetailDocs";
import { useTranslation } from "react-i18next";
import TemplateDocuments from "../../fromReport/template-Documents";

const InputsDocument = ({
    inputs,
    documentStatus,
    documentId,
    documentFormId,
    styles,
    setRows
}) => {
    const _subjects = useSelector(s => s.subjectsDocument);
    const { i18n } = useTranslation();

    return (
        <Container style={styles} className="py-2 ">
            {documentStatus === "edited" ? (
                <TemplateDocuments
                    patternInput={inputs.inputs}
                    lang={i18n.language}
                    id={documentFormId}
                    documentId={documentId}
                    statusDocument={documentStatus}
                    setRows={setRows}
                />
            ) : inputs !== null ? (
                inputs.inputs.map((item, idx) => {
                    return (
                        <ListDetailDocs
                            key={idx}
                            data={item}
                            subjects={_subjects}
                            inputData={inputs}
                        />
                    );
                })
            ) : (
                <div
                    style={{ minHeight: "50px" }}
                    className="d-flex align-items-center justify-content-center"
                >
                    <h6>...</h6>
                </div>
            )}
        </Container>
    );
};

export default InputsDocument;
