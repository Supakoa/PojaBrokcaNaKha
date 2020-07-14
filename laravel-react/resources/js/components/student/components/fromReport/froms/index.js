import React from "react";
import { Card, Accordion } from "react-bootstrap";
import FormDocument from "./FormDocument";

function FormDocuments(props) {
    const { dataDocuments, id } = props;
    // console.log(dataDocuments);
    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey={id}>
                {dataDocuments.id}
                {". "}
                {dataDocuments.th_name}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={id}>
                <FormDocument patternInput={JSON.parse(dataDocuments.inputs)} />
            </Accordion.Collapse>
        </Card>
    );
}

export default FormDocuments;
