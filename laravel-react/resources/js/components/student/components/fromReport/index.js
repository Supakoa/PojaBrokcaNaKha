import React from "react";
import { Accordion, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import FormDocuments from "../template-Documents";

export default function ReportForm() {
    const _docTemp = useSelector(state => state.documentsTemplate);

    return (
        <Accordion defaultActiveKey="1">
            {_docTemp.length === 0 ? (
                <div
                    style={{ minHeight: "150px" }}
                    className="d-flex align-items-center justify-content-center"
                >
                    <Spinner animation="border" />
                </div>
            ) : (
                _docTemp.map((item, idx) => {
                    return (
                        <FormDocuments
                            key={idx.toString()}
                            dataDocuments={item}
                            id={idx}
                        />
                    );
                })
            )}
        </Accordion>
    );
}
