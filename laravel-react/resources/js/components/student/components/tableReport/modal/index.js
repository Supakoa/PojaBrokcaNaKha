import React from "react";
import { Button, Modal, Tabs, Tab } from "react-bootstrap";
import DetailDocument from "./DetailDocument";
import InputsDocument from "./InputsDocument";
import deleteDocument from "../../../../middleware/axios/deleteDocument";
import Swal from "sweetalert2";

const UserModalDoc = ({ document, lang }) => {
    const [show, setShow] = React.useState(false);
    const deleteDoc = () =>
        Swal.fire({
            title: "คุณแน่ใจใช่ไหม ?",
            text: "ว่าคุณต้องการยกเลิกคำร้องนี้ !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "ใช่!",
            cancelButtonText: "ใม่!"
        }).then(async result => {
            if (result.value) {
                const _del = await deleteDocument(
                    document.id,
                    localStorage._authLocal
                );
                if (_del.id) {
                    Swal.fire(
                        "Deleted!",
                        "Your file has been deleted.",
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
                ดูเพิ่ม
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
                        <Tab eventKey="infoDocument" title="สถานะเอกสาร">
                            <DetailDocument document={document} />
                        </Tab>
                        <Tab eventKey="formDocument" title="ข้อมูลเอกสาร">
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
                        hidden={document.status === "cancel" ? true : false}
                        onClick={deleteDoc}
                    >
                        Cancel Document
                    </Button>
                    <Button onClick={() => setShow(false)} variant="secondary">
                        close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default UserModalDoc;
