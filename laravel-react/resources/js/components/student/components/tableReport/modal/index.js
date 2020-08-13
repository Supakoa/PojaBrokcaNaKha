import React from "react";
import { Button, Modal, Tabs, Tab } from "react-bootstrap";
import DetailDocument from "./DetailDocument";
import InputsDocument from "./InputsDocument";

const UserModalDoc = props => {
    const { document } = props;

    const [show, setShow] = React.useState(false);
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
                                />
                            </div>
                        </Tab>
                    </Tabs>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger">Cancel Document</Button>
                    <Button onClick={() => setShow(false)} variant="secondary">
                        close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default UserModalDoc;
