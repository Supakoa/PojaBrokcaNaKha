import React from "react";
import { Card, Accordion, Container } from "react-bootstrap";
import TemplateDocuments from "./tempDocuments";
import Loading from "../loading";

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
                    {/* {dataDocuments ? (
                        <TemplateDocuments
                            patternInput={JSON.parse(dataDocuments.inputs)}
                        />
                    ) : (
                        <Loading />
                    )} */}
                </Container>
            </Accordion.Collapse>
        </Card>
    );
}
