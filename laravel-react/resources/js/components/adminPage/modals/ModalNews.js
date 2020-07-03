import React from "react";
import { Button, Modal } from "react-bootstrap";
import { textHeader } from "./methods";
import FormNews from "../news/FormNews";

export default function ModalNews(props) {
    // attibute type if true are Modal Add or false are Modale Edit

    const { type, response } = props;

    const [_modal, setModal] = React.useState(false);
    const [_item, setItem] = React.useState({
        loading: false,
        data: []
    });

    const _editOrAdd = _type => {
        if (!type) {
            return <FormNews response={response} type={type} />;
        } else {
            return <FormNews type={type} />;
        }
    };

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
                variant={type ? "info" : "warning"}
                className="text-light"
            >
                {textHeader(type)}
            </Button>
            <Modal
                animation={true}
                centered={true}
                backdrop="static"
                size="md"
                show={_modal}
                onHide={() => setModal(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {textHeader(type)}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>{_editOrAdd(type)}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setModal(false)}>
                        close
                    </Button>
                    <Button variant={type ? "info" : "warning"}>save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
