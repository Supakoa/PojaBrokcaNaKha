import React from "react";
import ModalNews from "../../modals/ModalNews";
import ModalDelete from "../../modals/ModalDelete";

const ColumnActions = (indexKey, res, refresh) => {
    return (
        <>
            <ModalNews key={indexKey} isCreateProps={false} response={res} />
            {" || "}
            <ModalDelete key={indexKey + 1} refresh={refresh} id={res.id} api="news" />
        </>
    );
};

export default ColumnActions;
