import React from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import Axios from "axios";

export default function ModalDelete(props) {
    const { id } = props;

    const apiPath = `http://localhost:8000/api/news`

    const handleClick = () => {
        Swal.fire({
            title: "คุณแน่ใจไหม ?",
            text: "คุณต้องการจะลบสิ่งนี้ !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "ไม่ !",
            confirmButtonText: "ใช่, ฉันต้องการลบ !"
        }).then(result => {
            if (result.value) {
                Axios.delete(`${apiPath}/${id}`).then(res => {
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                })
            }
        });
    };

    return (
        <Button variant="danger" size="sm" onClick={handleClick}>
            ลบข้อมูล
        </Button>
    );
}
