import React from "react";
import { dataTest } from "./dataTest";
import { ModalStepReport } from "../../modals/ModalStepreport";
import ModalDelete from "../../modals/ModalDelete";

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
            width: 100,
            sort: "disabled"
        }
    ];
    const [rows, setRows] = React.useState([]);

    const fetchRowData = _rows => {
        const _row = _rows.map((res, idx) => {
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
        <div>
            <ModalStepReport key={idx} response={res} />
            {" || "}
            <ModalDelete key={idx + 1} id={res.id} />
        </div>
    );
};