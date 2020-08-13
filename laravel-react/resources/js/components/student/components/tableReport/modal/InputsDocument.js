import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useSelector } from "react-redux";

const InputsDocument = ({ inputs, lang }) => {
    const _subjects = useSelector(s => s.subjectsDocument);

    return (
        <Container className="py-2">
            {inputs !== null ? (
                <Row>
                    {inputs.inputs.map((item, idx) => {
                        switch (item.tag_type) {
                            case "select1":
                                return (
                                    <Col
                                        key={idx}
                                        lg={item.size}
                                        md={item.size}
                                        className="py-2"
                                    >
                                        <p className="mb-1">
                                            {lang === "th"
                                                ? item.th_name
                                                : item.eng_name}
                                            :{" "}
                                            {item.th_options.map((sub, idx) => {
                                                return idx === Number(item.data)
                                                    ? sub
                                                    : null;
                                            })}
                                        </p>
                                    </Col>
                                );
                            case "select2":
                                //it's has other choice
                                return (
                                    <Col
                                        key={idx}
                                        lg={item.size}
                                        md={item.size}
                                        className="py-2"
                                    >
                                        <p className="mb-1">
                                            {lang === "th"
                                                ? item.th_name
                                                : item.eng_name}
                                            :{" "}
                                            {!isNaN(item.data)
                                                ? lang === "th"
                                                    ? item.th_options.map(
                                                          (sub, idx) => {
                                                              return idx ===
                                                                  Number(
                                                                      item.data
                                                                  )
                                                                  ? sub
                                                                  : null;
                                                          }
                                                      )
                                                    : item.eng_options.map(
                                                          (sub, idx) => {
                                                              return idx ===
                                                                  Number(
                                                                      item.data
                                                                  )
                                                                  ? sub
                                                                  : null;
                                                          }
                                                      )
                                                : item.data}
                                        </p>
                                    </Col>
                                );
                            case "select3":
                                let s = {};
                                if (inputs !== null) {
                                    const _subject = inputs.inputs.find(
                                        item => {
                                            return item.tag_type === "select3";
                                        }
                                    );
                                    if (_subject) {
                                        const _theSub = _subjects.find(sub => {
                                            return (
                                                sub.id === Number(_subject.data)
                                            );
                                        });

                                        if (_theSub) {
                                            s = _theSub;
                                        }
                                    }
                                }
                                //Subject
                                return (
                                    <Col
                                        key={idx}
                                        lg={item.size}
                                        md={item.size}
                                        className="py-2"
                                    >
                                        <p className="mb-1">
                                            {lang === "th"
                                                ? item.th_name
                                                : item.eng_name}
                                            :{" "}
                                            {lang === "th"
                                                ? s.th_name
                                                : s.eng_name}
                                        </p>
                                    </Col>
                                );
                            case "file":
                                return (
                                    <Col
                                        key={idx}
                                        lg={item.size}
                                        md={item.size}
                                        className="py-2 w-100"
                                    >
                                        <p className="mb-1">
                                            {lang === "th"
                                                ? item.th_name
                                                : item.eng_name}
                                            :{" "}
                                            {item.data !== "" ? (
                                                <Image
                                                    className="d-block "
                                                    width="100"
                                                    height="100"
                                                    src={`../../../../../../../storage/${item.data}`}
                                                />
                                            ) : (
                                                "-"
                                            )}
                                        </p>
                                    </Col>
                                );
                            case "text":
                                return (
                                    <Col
                                        key={idx}
                                        lg={item.size}
                                        md={item.size}
                                        className="py-2"
                                    >
                                        <p className="mb-1">
                                            {lang === "th"
                                                ? item.th_name
                                                : item.eng_name}
                                            : {item.data}
                                        </p>
                                    </Col>
                                );

                            default:
                                null;
                        }
                    })}
                </Row>
            ) : (
                <div
                    style={{ minHeight: "50px" }}
                    className="d-flex align-items-center justify-content-center"
                >
                    <h6> You not has Data.</h6>
                </div>
            )}
        </Container>
    );
};

export default InputsDocument;
