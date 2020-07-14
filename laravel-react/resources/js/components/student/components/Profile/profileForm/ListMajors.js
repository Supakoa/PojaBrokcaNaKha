import React from "react";
import { Col, Form, Spinner } from "react-bootstrap";
import axios from "axios";
import { _urlMajors } from "../../../../middleware/apis";

const MajorsOption = props => {
    const { facultiesId } = props;
    const [_majors, setMajors] = React.useState([]);

    const _fetchMajor = async _facId => {
        await axios.get(_urlMajors(_facId)).then(res => {
            // console.log(res.data);
            setMajors(res.data);
            // return res.data;
        });
    };

    React.useEffect(() => {
        const abort = new AbortController();
        _fetchMajor(facultiesId, { signal: abort.signal });

        return () => {
            abort.abort();
        };
    }, [facultiesId]);

    return (
        <>
            {_majors.map((item, idx) => {
                return (
                    <option
                        key={idx.toString()}
                        defaultValue={idx}
                        value={item.id}
                    >
                        {item.name}
                    </option>
                );
            })}
        </>
    );
};

const ListMajors = props => {
    const { methodHandle, userMajor, facultyId, disOption } = props;

    return (
        <Col md={5} lg={5} className="py-2">
            <Form.Label>สาขา</Form.Label>
            <Form.Control
                as="select"
                onChange={methodHandle}
                name="major_id"
                custom
                className="border-right-0 border-left-0 border-top-0 "
                disabled={disOption}
            >
                {userMajor !== undefined ? (
                    facultyId !== null ? (
                        <MajorsOption facultiesId={facultyId} />
                    ) : (
                        <option defaultValue={0}>{userMajor.name}</option>
                    )
                ) : (
                    <option>เลือกสาขา</option>
                )}
            </Form.Control>
        </Col>
    );
};

export default ListMajors;
