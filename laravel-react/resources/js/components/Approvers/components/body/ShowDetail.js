import React from "react";
import { Container, Card, Spinner } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ConvertDate from "../../../middleware/method/convertDate";
import StatusBadgeDoc from "../../../student/components/tableReport/statusDocument";
import { useTranslation } from "react-i18next";
import InputsDocument from "../../../student/components/tableReport/modal/InputsDocument";
import SenderDetail from "./SenderDetail";
import ActionApprovers from "./ActionApprovers";

const ShowDetail = ({ setRowsToInit }) => {
    const { id } = useParams();
    const { i18n, t } = useTranslation();
    const _history = useHistory();
    const _userDoc = useSelector(s => s.userDocument);
    const _docTemps = useSelector(s => s.documentsTemplate);
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

        if (id && _userDoc.length !== 0) {
            findingDocument(_userDoc, id, { signal: abort.signal });
        } else {
            setTimeout(() => {
                _history.push("/Approvers");
            }, 2000);
        }

        return () => abort.abort();
    }, [id, _userDoc]);

    if (Object.keys(_detail).length > 0) {
        return (
            <Card>
                <Card.Header className="d-flex justify-content-between">
                    <span>
                        <i className="far fa-clock"></i>{" "}
                        <ConvertDate dateTime={_detail.created_at} />
                    </span>
                    <span>
                        <StatusBadgeDoc status={_detail.pivot.status} />
                    </span>
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        <i className="fas fa-paperclip"></i>{" "}
                        {i18n.language === "th"
                            ? _detail.th_form_name
                            : _detail.eng_form_name}
                    </Card.Title>
                    <SenderDetail id={_detail.user_id} translate={t} />
                    <div className="border rounded">
                        <h5 className="p-3">
                            <i className="fas fa-info-circle"></i>{" "}
                            {t("approvers.show-detail.document")}
                        </h5>
                        <InputsDocument inputs={JSON.parse(_detail.data)} />
                    </div>
                </Card.Body>
                <Card.Footer>
                    <ActionApprovers
                        documentID={_detail.pivot.document_id}
                        setRows={setRowsToInit}
                        stateApprovers={_detail.pivot.state}
                        stateDocument={_detail.state}
                        statusDocument={_detail.pivot.status}
                    />
                </Card.Footer>
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
