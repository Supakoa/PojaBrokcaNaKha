import React from "react";
import { Modal, Image } from "react-bootstrap";

const ModalImage = ({ src, isNewImage }) => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Image
                rounded
                className="d-block m-auto py-2"
                width="150"
                height="170"
                src={isNewImage ? src : `/storage/${src}`}
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
                        src={isNewImage ? src : `/storage/${src}`}
                    />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalImage;
