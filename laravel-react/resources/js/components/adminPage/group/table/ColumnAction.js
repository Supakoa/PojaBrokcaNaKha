import React from "react";
import ModalDelete from "../../modals/ModalDelete";
import ModalEditGroup from "../../modals/ModalEditGroup";

const ColumnAction = ({ indexKey, res, refresh }) => {
    return (
        <>
            <ModalEditGroup
                key={indexKey}
                isCreateProps={false}
                response={res}
            />
            {" || "}
            <ModalDelete key={indexKey + 1} refresh={refresh} id={res.id} api="groups" />
        </>
    );
};

export default ColumnAction;
