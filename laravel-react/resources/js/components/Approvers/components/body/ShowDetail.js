import React from "react";
import { Container, Card, Spinner, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import _convertDate from "../../../middleware/method/convertDate";
import StatusBadgeDoc from "../../../student/components/tableReport/statusDocument";
import { useTranslation } from "react-i18next";
import InputsDocument from "../../../student/components/tableReport/modal/InputsDocument";

const ShowDetail = () => {
    const { id } = useParams();
    const _userDoc = useSelector(s => s.userDocument);
    const _docTemps = useSelector(s => s.documentsTemplate);
    const { i18n } = useTranslation();

    const [_detail, setDetail] = React.useState({});

    const findingDocument = (_userDoc, id) => {
        const _showDetail = _userDoc.find(item => {
            return item.id === Number(id);
        });

        if (_showDetail) {
            const _nameForm = _docTemps.find(item => {
                return item.id === _showDetail.form_id;
            });
            if (_nameForm)
                setDetail({
                    ..._showDetail,
                    eng_form_name: _nameForm.eng_name,
                    th_form_name: _nameForm.th_name
                });
        }
    };

    React.useEffect(() => {
        const abort = new AbortController();

        if (id) {
            findingDocument(_userDoc, id, { signal: abort.signal });
        }
        return () => abort.abort();
    }, [id]);
    console.log(_detail);

    if (Object.keys(_detail).length > 0) {
        return (
            <Card>
                <Card.Header className="d-flex justify-content-between">
                    <span>
                        <i className="far fa-clock"></i>{" "}
                        {_convertDate(_detail.created_at)}
                    </span>
                    <span>
                        <StatusBadgeDoc status={_detail.pivot.status} />
                    </span>
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        {i18n.language === "th"
                            ? _detail.th_form_name
                            : _detail.eng_form_name}
                    </Card.Title>

                    <InputsDocument
                        inputs={JSON.parse(_detail.data)}
                        lang={i18n.language}
                    />
                </Card.Body>
                <Card.Footer>Footer actions.</Card.Footer>
            </Card>
        );
    } else {
        return (
            <Container
                style={{ minHeight: "150px" }}
                className="d-flex align-items-center w-100 justify-content-center"
            >
                <Spinner animation="border" />
            </Container>
        );
    }
};

export default ShowDetail;
