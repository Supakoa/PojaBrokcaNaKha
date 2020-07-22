import React from "react";
import { Card, Accordion, Container } from "react-bootstrap";
import TemplateDocuments from "./tempDocuments";

export default function FormDocuments(props) {
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
                <Container fluid="lg">
                    <TemplateDocuments
                        patternInput={JSON.parse(dataDocuments.inputs)}
                    />
                </Container>
            </Accordion.Collapse>
        </Card>
    );
}
