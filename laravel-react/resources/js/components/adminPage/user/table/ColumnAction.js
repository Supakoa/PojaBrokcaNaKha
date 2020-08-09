import React from "react";
import ModalUser from "../../modals/ModalUser";
import ModalDelete from "../../modals/ModalDelete";

const ColumnAction = (idx, res) => {
    return (
        <>
            <ModalUser key={idx} id={res.id} isCreatedProp={false} />
            {" || "}
            <ModalDelete key={idx + 1} id={res.id} api={"users"} />
        </>
    );
};

export default ColumnAction;
