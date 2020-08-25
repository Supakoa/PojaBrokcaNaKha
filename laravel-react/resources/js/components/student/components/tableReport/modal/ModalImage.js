import React from "react";
import { Modal, Image, Button } from "react-bootstrap";

const ModalImage = ({ src }) => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Image
                rounded
                className="d-block m-auto"
                width="250"
                height="250"
                src={`/storage/${src}`}
                onClick={() => setModalShow(true)}
            />
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                aria-labelledby="contained-modal-image"
                centered
            >
                <Modal.Body>
                    <Image
                        rounded
                        className="d-block m-auto"
                        width="100%"
                        height="100%"
                        src={`/storage/${src}`}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => setModalShow(false)}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalImage;
