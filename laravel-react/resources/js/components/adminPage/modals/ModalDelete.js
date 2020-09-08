import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import Axios from "axios";
import {useTranslation} from 'react-i18next';
import {_URL} from "../../middleware/URL";

export default function ModalDelete(props) {
    const { id, api, refresh } = props;
    const {t} = useTranslation();
    const apiPath = `${_URL}/api/${api}`

    const handleClick = () => {
        Swal.fire({
            title: t('modalDelete.title'),
            text: t('modalDelete.text'),
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: t('modalDelete.cancelButtonText'),
            confirmButtonText: t('modalDelete.confirmButtonText')
        }).then(result => {
            if (result.value) {
                Axios.post(`${apiPath}/${id}/delete`, "",{
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("_authLocal")}`,
                    }
                }).then(res => {
                    Swal.fire(t('modalDelete.deleted'),`${api} ${t('modalDelete.hasBeetDeleted')}`, t('modalDelete.success'));
                    refresh()
                    // window.location.reload(false);
                })
            }
        });
    };

    return (
        <Button variant="danger" size="sm" onClick={handleClick}>
            {t('modalDelete.btnModal')}
        </Button>
    );
}
