import React from "react";
import { Button, Modal } from "react-bootstrap";
import FormNews from "../news/FormNews";
import { colors } from "@material-ui/core";
import Axios from "axios";

export default function ModalNews(props) {

    // attibute type if true are Modal Add or false are Modale Edit
    // props : isCreateProps and response are props in this ModalNews
    const { isCreateProps, response } = props;
    const [isShow, setIsShow] = React.useState(false);

    // not use
    // const [_item, setItem] = React.useState({
    //     loading: false,
    //     data: []
    // });

    const isReturnCreateForm = ( props ) => {
        return (!props) ? <FormNews response={response} type={props} /> : <FormNews type={props} />
    }

    const isCreateTitile = (context) => {
        return (context) ? "เพิ่มข้อมูล" : "แก้ไขข้อมูล"
    }

    // not use ofr init
    // React.useEffect(() => {
    //     const abortController = new AbortController();

    //     return () => {
    //         abortController.abort();
    //     };
    // }, []);

    const saveImageToDB = ( id ) => {
        const formData = new FormData()
        Axios.patch(`http://localhost:8000/api/news/${id}`)
    }

    return (
        <>
            {/* button create and edit : will convert by isCreateProps state*/}
            <Button
                size="sm"
                onClick={() => setIsShow(true)}
                variant={isCreateProps ? "info" : "warning"}
                className="text-light"
            > { isCreateTitile(isCreateProps) } </Button>

            {/* Modal for edit and create : will convert by isCreateProps state*/}
            <Modal
                animation={true}
                centered={true}
                backdrop="static"
                size="md"
                show={ isShow }
                onHide={() => setIsShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg" >
                        { isCreateTitile(isCreateProps) }
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    { isReturnCreateForm(isCreateProps) }
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setIsShow(false)}> close </Button>
                    <Button variant={isCreateProps ? "info" : "warning"} onClick={saveImageToDB()}> save </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
