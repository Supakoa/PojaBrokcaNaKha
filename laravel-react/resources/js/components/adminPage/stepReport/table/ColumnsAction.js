import React from "react";
import { ModalStepReport } from "../../modals/ModalStepreport";
import ModalDelete from "../../modals/ModalDelete"; // not to use

const ColumsAction = (idx, res) => {
    return (
        <>
            <ModalStepReport key={idx} step={idx} response={res} />
            {/* {" || "}
            <ModalDelete key={idx + 1} id={res.id} /> */}
        </>
    );
};

export default ColumsAction;
