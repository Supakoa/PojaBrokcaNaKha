import React from "react";
import { Accordion, Spinner } from "react-bootstrap";
import axios from "axios";
import { _urlDocuments } from "../../../middleware/apis";
import headerConfig from "../../../middleware/headerConfig";
import FormDocuments from "./froms";

export default function ReportForm() {
    const [_tempForm, setTempForm] = React.useState([]);
    const [_loading, setLoading] = React.useState(true);

    const fetchDocuments = async (_token, _port, setLoading) => {
        await axios
            .get(_urlDocuments(), headerConfig(localStorage._authLocal, _port))
            .then(res => {
                setTempForm(res.data);
                setLoading(false);
            });
    };

    React.useEffect(() => {
        const abort = new AbortController();
        fetchDocuments(localStorage._authLocal, 3600, setLoading, {
            signal: abort.signal
        });

        return () => {
            abort.abort();
        };
    }, []);

    return (
        <Accordion defaultActiveKey="1">
            {_loading ? (
                <div
                    style={{ minHeight: "150px" }}
                    className="d-flex align-items-center justify-content-center"
                >
                    <Spinner animation="border" />
                </div>
            ) : (
                _tempForm.map((item, idx) => {
                    return (
                        <FormDocuments
                            key={idx.toString()}
                            dataDocuments={item}
                            id={idx}
                        />
                    );
                })
            )}
        </Accordion>
    );
}
