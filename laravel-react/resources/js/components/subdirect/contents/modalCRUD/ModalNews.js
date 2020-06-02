import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export class ModalNewsAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.handleModal = this.handleModal.bind(this);
    }

    handleModal(value) {
        this.setState({
            ...this.state,
            modal: value
        });
    }

    render() {
        const { _modal } = this.state.modal;
        return (
            <>
                <Button onClick={this.handleModal(true)}>Large modal</Button>
                <Modal
                    size="lg"
                    show={_modal}
                    onHide={this.handleModal(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Large Modal
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>...</Modal.Body>
                </Modal>
            </>
        );
    }
}
