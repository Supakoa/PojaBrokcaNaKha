import React from "react";
import { ModalStepReport } from "../../modals/ModalStepreport";
import ModalDelete from "../../modals/ModalDelete";

const ColumsAction = (idx, res) => {
    return (
        <>
            <ModalStepReport key={idx} response={res} />
            {" || "}
            <ModalDelete key={idx + 1} id={res.id} />
        </>
    );
};

export default ColumsAction;
