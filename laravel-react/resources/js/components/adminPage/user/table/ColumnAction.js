import React from "react";
import ModalUser from "../../modals/ModalUser";
import ModalDelete from "../../modals/ModalDelete";

const ColumnAction = ({idx, res, refresh}) => {
    return (
        <>
            <ModalUser key={idx} id={res.id} res={res} isCreatedProp={false} />
            {" || "}
            <ModalDelete key={idx + 1} id={res.id} api={"users"} refresh={refresh} />
        </>
    );
};

export default ColumnAction;
