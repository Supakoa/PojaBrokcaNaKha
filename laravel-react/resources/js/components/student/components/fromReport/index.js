import React from "react";
import { Accordion } from "react-bootstrap";
import axios from "axios";
import { _urlDocuments } from "../../../middleware/apis";
import headerConfig from "../../../middleware/headerConfig";
import FormDocuments from "./froms";

export default function ReportForm() {
    const [_tempForm, setTempForm] = React.useState([]);

    const fetchDocuments = async (_token, _port) => {
        await axios
            .get(_urlDocuments(), headerConfig(localStorage._authLocal, _port))
            .then(res => {
                setTempForm(res.data);
            });
    };

    React.useEffect(() => {
        const abort = new AbortController();
        fetchDocuments(localStorage._authLocal, 3600, { signal: abort.signal });

        return () => {
            abort.abort();
        };
    }, []);

    return (
        <Accordion defaultActiveKey="1">
            {_tempForm.map((item, idx) => {
                return (
                    <FormDocuments
                        key={idx.toString()}
                        dataDocuments={item}
                        id={idx}
                    />
                );
            })}
        </Accordion>
    );
}
