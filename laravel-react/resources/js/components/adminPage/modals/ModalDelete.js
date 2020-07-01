import React from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

export default function ModalDelete(props) {
    const { id } = props;
    const handleClick = _id => {
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
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    };

    return (
        <Button variant="danger" size="sm" onClick={handleClick}>
            ลบข้อมูล
        </Button>
    );
}
