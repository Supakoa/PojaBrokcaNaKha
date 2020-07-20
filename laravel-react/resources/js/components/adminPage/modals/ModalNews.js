import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import FormNews from "../news/FormNews";
import { colors } from "@material-ui/core";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {useTranslation} from 'react-i18next';

export default function ModalNews(props) {
    // attibute type if true are Modal Add or false are Modale Edit
    // props : isCreateProps and response are props in this ModalNews
    const { isCreateProps, response } = props;
    const [isShow, setIsShow] = React.useState(false);
    const {t} = useTranslation('', {useSuspense: false});

    // redux
    const form = useSelector(state => state.newsForm)

    const isReturnCreateForm = () => {
        return <FormNews response={response} isCreateProps={isCreateProps} />
    };

    const isCreateTitile = context => {
        return context ? t('add') : t('edit');
    };

    const apiPath = `http://localhost:8000/api/news`

    // not use ofr init
    React.useEffect(() => {
        const abortController = new AbortController();

        return () => {
            abortController.abort();
        };
    }, []);

    const saveFormToDB = ( ) => {
        const sendFormTemplate = {
            image: form.file,
            ref: form.ref
        }

        if (isCreateProps) {
            Axios.post(`${apiPath}`, sendFormTemplate, {
                Header: {
                    'Content-type': 'multipart/form-data'
                }
            }).then(res => {
                console.log(res)
            })
        } else {
            const id = response.id

            Axios.patch(`${apiPath}/${id}`, sendFormTemplate, {
                Header: {
                    'Content-type': 'multipart/form-data'
                }
            }).then(res => {
                console.log(res.data)
            })
        }
    }

    return (
        <>
            {/* button create or edit : will convert by isCreateProps state*/}
            <Button
                size="sm"
                onClick={() => setIsShow(true)}
                variant={isCreateProps ? "info" : "warning"}
                className="text-light"
            >
                {" "}
                {isCreateTitile(isCreateProps)}{" "}
            </Button>

            {/* Modal for edit or create : will convert by isCreateProps state*/}
            <Modal
                animation={true}
                centered={true}
                backdrop="static"
                size="md"
                show={isShow}
                onHide={() => setIsShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {isCreateTitile(isCreateProps)}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>{isReturnCreateForm()}</Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setIsShow(false)}> {t('close')} </Button>
                    <Button variant={isCreateProps ? "info" : "warning"} onClick={() => saveFormToDB()}> {t('save')} </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
