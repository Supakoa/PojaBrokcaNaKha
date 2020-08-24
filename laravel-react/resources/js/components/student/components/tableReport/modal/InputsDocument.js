import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import ListDetailDocs from "./ListDetailDocs";

const InputsDocument = ({ inputs }) => {
    const _subjects = useSelector(s => s.subjectsDocument);
    return (
        <Container
            style={{
                minHeight: "30vh",
                maxHeight: "60vh",
                overflowY: "scroll"
            }}
            className="py-2 "
        >
            {inputs !== null ? (
                inputs.inputs.map((item, idx) => {
                    return (
                        <ListDetailDocs
                            key={idx}
                            data={item}
                            subjects={_subjects}
                            inputData={inputs}
                        />
                    );
                })
            ) : (
                <div
                    style={{ minHeight: "50px" }}
                    className="d-flex align-items-center justify-content-center"
                >
                    <h6>...</h6>
                </div>
            )}
        </Container>
    );
};

export default InputsDocument;
