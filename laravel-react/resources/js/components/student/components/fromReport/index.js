import React from "react";
import { Accordion, Card, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../loading";
import { useTranslation } from "react-i18next";
import TemplateDocuments from "./template-Documents";
import { getSubjects } from "../../../middleware/axios/getSubject";
import { inputTemps, subjectsForDocument } from "../../../../redux/actions";

export default function ReportForm() {
    const _docTemp = useSelector(state => state.documentsTemplate);
    const _inputTemp = useSelector(s => s.inputTemps);
    const _subDoc = useSelector(s => s.subjectsDocument);
    const _token = localStorage._authLocal;
    const { i18n } = useTranslation();
    const _dispatch = useDispatch();
    const abort = new AbortController();

    const post2Inputs = _docTemp => {
        let _arrInputs = [];
        _docTemp.map(items => {
            let _newInput = JSON.parse(items.inputs);
            // console.log(_newInput);
            _arrInputs = [..._arrInputs, _newInput.inputs];
        });
        if (_arrInputs.lengt !== 0) {
            _dispatch(inputTemps({ type: "INPUTS", payload: _arrInputs }));
        }
    };

    const getSubjectsForDoc = async _token => {
        const _subjects = await getSubjects(_token);

        if (_subjects) {
            _dispatch(subjectsForDocument(_subjects));
        }
    };

    React.useEffect(() => {
        if (_docTemp.length !== 0 && _inputTemp.length === 0) {
            post2Inputs(_docTemp, { signal: abort.signal });
        }
    }, [_docTemp, _inputTemp]);

    React.useEffect(() => {
        if (_subDoc.length === 0) {
            getSubjectsForDoc(_token, { signal: abort.signal });
        }
    }, [_subDoc]);

    React.useEffect(() => {
        return () => {
            abort.abort;
        };
    }, []);

    return (
        <Accordion defaultActiveKey="1">
            {_docTemp.length !== 0 && _inputTemp.length !== 0 ? (
                _docTemp.map((item, idx) => {
                    return (
                        <Card key={idx.toString()}>
                            <Accordion.Toggle
                                as={Card.Header}
                                eventKey={item.id}
                            >
                                {item.id}
                                {". "}
                                {i18n.language === "th"
                                    ? item.th_name
                                    : item.eng_name}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={item.id}>
                                <Container fluid="lg">
                                    <TemplateDocuments
                                        lang={i18n.language}
                                        id={item.id}
                                        patternInput={_inputTemp[idx]}
                                    />
                                </Container>
                            </Accordion.Collapse>
                        </Card>
                    );
                })
            ) : (
                <Loading />
            )}
        </Accordion>
    );
}
