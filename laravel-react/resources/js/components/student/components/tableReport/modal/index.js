import React from "react";
import { Button, Modal, Tabs, Tab } from "react-bootstrap";
import DetailDocument from "./DetailDocument";
import InputsDocument from "./InputsDocument";
import deleteDocument from "../../../../middleware/axios/deleteDocument";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

const UserModalDoc = ({ document, lang }) => {
    const [show, setShow] = React.useState(false);
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
                    <Modal.Title as="h6">- {document.form_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs defaultActiveKey="infoDocument" id="ModalDocument">
                        <Tab
                            eventKey="infoDocument"
                            title={t("students.modal.status-documents.title")}
                        >
                            <DetailDocument document={document} />
                        </Tab>
                        <Tab
                            eventKey="formDocument"
                            title={t("students.modal.detail")}
                        >
                            <div className="border-left border-right border-bottom rounded">
                                <InputsDocument
                                    inputs={JSON.parse(document.data)}
                                    lang={lang}
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
