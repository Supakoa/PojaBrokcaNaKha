import React from "react";
import { dataTest } from "./dataTest";
import { ModalStepReport } from "../modalCRUD/ModalStepreport";
import ModalDelete from "../modalCRUD/ModalDelete";

export default function dataTableStepReport() {
    const columns = [
        {
            label: "#",
            field: "id",
            sort: "desc",
            width: 50
        },
        {
            label: "รูปแบบเอกสาร",
            field: "name",
            width: 180
        },
        {
            label: "รหัสเอกสาร",
            field: "code",
            width: 150
        },
        {
            label: "actions",
            field: "action",
            width: 200,
            sort: "disabled"
        }
    ];
    const [rows, setRows] = React.useState([]);

    const fetchRowData = _rows => {
        const _row = _rows.map((res, idx) => {
            // console.log(res);

            const _response = {
                id: res.id,
                name: res.name,
                code: res.code,
                action: ColumsAction(idx, res)
            };
            return _response;
        });
        return _row;
    };

    React.useEffect(() => {
        const abort = new AbortController();
        const _row = fetchRowData(dataTest, { signal: abort.signal });
        setRows(_row);
        return () => {
            abort.abort();
        };
    }, []);
    return { columns, rows };
}

const ColumsAction = (idx, res) => {
    return (
        <div className="d-flex justify-content-start">
            <ModalStepReport key={idx} response={res} />
            {" || "}
            <ModalDelete key={idx + 1} id={res.id} />
        </div>
    );
};
