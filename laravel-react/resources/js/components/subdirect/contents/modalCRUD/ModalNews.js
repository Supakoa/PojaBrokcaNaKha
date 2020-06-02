import React from "react";
import { Button, Modal } from "react-bootstrap";

export function ModalNewsAdd() {
    const [_modal, setModal] = React.useState(false);
    const [_item, setItem] = React.useState({
        loading: false,
        data: []
    });

    React.useEffect(() => {
        const abortController = new AbortController();

        return () => {
            abortController.abort();
        };
    }, []);

    return (
        <>
            <Button
                size="sm"
                onClick={() => setModal(true)}
                variant={_item.loading ? "warning" : "info"}
            >
                {_item.loading ? "แก้ไขข้อมูล" : "เพิ่มข้อมูล"}
            </Button>
            <Modal
                animation={true}
                centered={true}
                backdrop="static"
                size="lg"
                show={_modal}
                onHide={() => setModal(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {_item.loading ? "แก้ไขข้อมูล" : "เพิ่มข้อมูล"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setModal(false)}>
                        close
                    </Button>

                    <Button variant="info">save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export function ModalNewsDelete() {
    return <></>;
}
