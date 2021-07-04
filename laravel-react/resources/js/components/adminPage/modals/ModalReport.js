import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ListDetailDocs from "../../student/components/tableReport/modal/ListDetailDocs";

const ModalReport = ({ id }) => {
    const [show, setShow] = React.useState(false);
    const { t } = useTranslation();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="warning" size="sm" onClick={handleShow}>
                {t("check")}
            </Button>
            <Modal
                show={show}
                onHide={() => handleClose}
                aria-labelledby="modal-user"
                size="lg"
                backdrop="static"
                animation
                scrollable
                centered
            >
                <Modal.Header>
                    <Modal.Title>{id}</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                    footer
                    <Button variant="secondary" onClick={handleClose}>
                        {t("close")}
                    </Button>
                    {/*<Button variant="primary">Understood</Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalReport;
