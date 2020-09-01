import React from "react";
import { Button, Modal, Tabs, Tab } from "react-bootstrap";
import DetailDocument from "./DetailDocument";
import InputsDocument from "./InputsDocument";
import deleteDocument from "../../../../middleware/axios/deleteDocument";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import StatusBadgeDoc from "../statusDocument";
import StepProgress from "./StepProgress";

const contentStyle = {
    maxHeight: "60vh",
    height: "40vh",
    overflowY: "scroll"
};

const UserModalDoc = ({ document, setRows }) => {
    const [show, setShow] = React.useState(false);
    const [_status, setStatus] = React.useState(false);
    const { t } = useTranslation();

    const deleteDoc = () =>
        Swal.fire({
            title: t("students.modal.swal.title"),
            text: t("students.modal.swal.text"),
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: t("students.modal.swal.yes"),
            cancelButtonText: t("students.modal.swal.no")
        }).then(async result => {
            if (result.value) {
                const _del = await deleteDocument(
                    document.id,
                    localStorage._authLocal
                );
                if (_del.id) {
                    Swal.fire(
                        t("students.modal.swal.then.title"),
                        t("students.modal.swal.then.text"),
                        "success"
                    ).then(async res => {
                        if (res.value) {
                            location.reload();
                        }
                    });
                }
            }
        });

    // console.log(document);

    return (
        <div>
            <Button variant="info" size="sm" onClick={() => setShow(true)}>
                {t("students.modal.btn-title")}
            </Button>

            <Modal
                show={show}
                size="lg"
                onHide={() => setShow(false)}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <div className="w-100 d-flex align-items-center justify-content-between">
                        <Modal.Title as="h6">
                            - {document.form_name}
                        </Modal.Title>
                        {_status ? (
                            <StatusBadgeDoc status={document.status} />
                        ) : null}
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <Tabs
                        defaultActiveKey="infoDocument"
                        id="ModalDocument"
                        onClick={e =>
                            setStatus(
                                e.target.id === "ModalDocument-tab-formDocument"
                            )
                        }
                    >
                        <Tab
                            eventKey="infoDocument"
                            title={t("students.modal.status-documents.title")}
                        >
                            <DetailDocument
                                document={document}
                                styles={contentStyle}
                            />
                            <div className="d-flex aling-items-center w-100 justify-content-center">
                                <StepProgress
                                    steps={document.max_state}
                                    stateNow={document.state}
                                    status={document.status}
                                />
                            </div>
                        </Tab>
                        <Tab
                            eventKey="formDocument"
                            title={t("students.modal.detail")}
                        >
                            <div className="border-left border-right border-bottom rounded py-2">
                                <InputsDocument
                                    styles={contentStyle}
                                    inputs={JSON.parse(document.data)}
                                    documentStatus={document.status}
                                    documentFormId={document.form_id}
                                    documentId={document.id}
                                    setRows={setRows}
                                />
                            </div>
                        </Tab>
                    </Tabs>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="outline-danger"
                        hidden={
                            document.status === "cancelled" ||
                            document.status === "approved" ||
                            document.status === "rejected"
                        }
                        onClick={deleteDoc}
                    >
                        {t("students.modal.btn.cancel")}
                    </Button>
                    <Button onClick={() => setShow(false)} variant="secondary">
                        {t("students.modal.btn.close")}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default UserModalDoc;
