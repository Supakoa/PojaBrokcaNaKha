import React from "react";
import { Accordion, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import FormDocuments from "../template-Documents";

export default function ReportForm() {
    const _docTemp = useSelector(state => state.documentsTemplate);

    return (
        <Accordion defaultActiveKey="1">
            {_docTemp.map((item, idx) => {
                console.log(idx, " => ", item);
                // return (
                //     <FormDocuments
                //         key={idx.toString()}
                //         dataDocuments={item}
                //         id={idx}
                //     />
                // );
            })}
        </Accordion>
    );
}
