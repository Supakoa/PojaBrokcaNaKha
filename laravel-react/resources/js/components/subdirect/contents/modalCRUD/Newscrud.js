import React from "react";
import {
    Button,
    Container,
    Modal,
    Form,
    Image,
    Spinner
} from "react-bootstrap";
import imgUpload from "../../../middleware/axios/imageUpload";
import AddImage from "./components/news/AddImage";

export function Newsadd() {
    const [upload, setUpload] = React.useState(false);
    const [addModal, setAddModal] = React.useState(false);
    const [_newsUpload, setnewsUpload] = React.useState({
        imageUpload: null
    });
    const onClickHandle = () => {
        console.log(_newsUpload);

        setUpload(true);
        setTimeout(() => {
            setUpload(false);
        }, 2000);
    };

    return (
        <div>
            <Button
                name="modalAdd"
                variant="info"
                size="sm"
                onClick={() => setAddModal(true)}
            >
                เพิ่ม
            </Button>
            <Modal
                show={addModal}
                onHide={() => setAddModal(false)}
                aria-labelledby="modal-add-news"
                size="md"
                backdrop="static"
                animation
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>เพิ่มข่าวใหม่</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddImage
                        setImage={setnewsUpload}
                        showImage={_newsUpload}
                    />
                </Modal.Body>
                <Modal.Footer>
                    {upload ? (
                        <Button variant="primary" disabled>
                            Loading...{" "}
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                        </Button>
                    ) : (
                        <Button variant="primary" onClick={onClickHandle}>
                            save
                        </Button>
                    )}

                    <Button variant="danger" onClick={() => setAddModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export function Newsedit(props) {
    const [editModal, setEditModal] = React.useState(false);
    return (
        <div key={props.id} className="mr-1">
            <Button
                name="modalEdit"
                variant="warning"
                size="sm"
                onClick={() => setEditModal(true)}
            >
                {" "}
                แก้ไข
            </Button>
            {" || "}
            <Modal
                show={editModal}
                onHide={() => setEditModal(false)}
                aria-labelledby="modal-edit-news"
                size="md"
                backdrop="static"
                animation
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>แก้ไข้ข่าว</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className="mb-3">
                            <Image
                                src="https://sisa.ssru.ac.th/useruploads/images/20191004/2019100415701812578706.jpg"
                                fluid
                                rounded
                            />
                        </div>
                        <div className="mb-3 border p-2">
                            <Form.File id="formcheck-api-custom" custom>
                                <Form.File.Input />
                                <Form.File.Label data-browse="เลือกรูป">
                                    อัพรูปข่าใหม่
                                </Form.File.Label>
                                <Form.Control.Feedback type="valid">
                                    คุณอัพแล้ว
                                </Form.Control.Feedback>
                            </Form.File>
                            <Form.Group controlId="formNewsURL">
                                <Form.Label>URL รูปข่าว</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="www.google.com"
                                />
                            </Form.Group>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success">save</Button>
                    <Button
                        variant="danger"
                        onClick={() => setEditModal(false)}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export function Newsdelete(props) {
    const [deleteModal, setDeleteModal] = React.useState(false);
    return (
        <div key={props.id}>
            <Button
                name="modalDelete"
                variant="danger"
                size="sm"
                onClick={() => setDeleteModal(true)}
            >
                ลบ
            </Button>
            <Modal
                show={deleteModal}
                onHide={() => setDeleteModal(false)}
                aria-labelledby="modal-delete-news"
                size="sm"
                backdrop="static"
                animation
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>ลบข้อมูล</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container className="text-center">
                        <p>ยืนยันที่จะลบข้อมูลหรือไหม ?</p>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger">ยืนยัน</Button>
                    <Button
                        variant="light"
                        onClick={() => setDeleteModal(false)}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
