import React from "react";
import { Container, Image } from "react-bootstrap";
import { useSelector } from "react-redux";

const InputsDocument = ({ inputs, lang }) => {
    const _subjects = useSelector(s => s.subjectsDocument);
    const _styleList = {
        listStyle: "none"
    };
    return (
        <Container
            style={{ maxHeight: "60vh", overflowY: "scroll" }}
            className="py-2 "
        >
            {inputs !== null ? (
                <ul>
                    {inputs.inputs.map((item, idx) => {
                        switch (item.tag_type) {
                            case "select1":
                                return (
                                    <li
                                        style={_styleList}
                                        className="w-100 clearfix border-bottom py-2"
                                        key={idx}
                                    >
                                        <strong className="pl-2 float-left">
                                            {lang === "th"
                                                ? item.th_name
                                                : item.eng_name}
                                            :{" "}
                                        </strong>
                                        <span className="mb-1 px-2 float-right">
                                            {item.th_options.map((sub, idx) => {
                                                return idx === Number(item.data)
                                                    ? sub
                                                    : null;
                                            })}
                                        </span>
                                    </li>
                                );
                            case "select2":
                                //it's has other choice
                                return (
                                    <li
                                        style={_styleList}
                                        className="w-100 clearfix border-bottom py-2"
                                        key={idx}
                                    >
                                        <strong className="pl-2 float-left">
                                            {lang === "th"
                                                ? item.th_name
                                                : item.eng_name}
                                            :{" "}
                                        </strong>
                                        <span className="mb-1 px-2 float-right">
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
                                        </span>
                                    </li>
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
                                    <li
                                        style={_styleList}
                                        className="w-100 clearfix border-bottom py-2"
                                        key={idx}
                                    >
                                        <strong className="pl-2 float-left">
                                            {lang === "th"
                                                ? item.th_name
                                                : item.eng_name}
                                            :{" "}
                                        </strong>
                                        <span className="mb-1 px-2 float-right">
                                            {lang === "th"
                                                ? s.th_name
                                                : s.eng_name}
                                        </span>
                                    </li>
                                );

                            case "text":
                                return (
                                    <li
                                        key={idx}
                                        className="w-100 clearfix border-bottom py-2"
                                        style={_styleList}
                                    >
                                        <strong className="pl-2 float-left">
                                            {lang === "th"
                                                ? item.th_name
                                                : item.eng_name}
                                            :{" "}
                                        </strong>
                                        <span className="mb-1 px-2 float-right">
                                            {item.data}
                                        </span>
                                    </li>
                                );

                            case "file":
                                return (
                                    <li
                                        key={idx}
                                        style={_styleList}
                                        className={
                                            item.data !== ""
                                                ? "w-100 d-table py-2"
                                                : "w-100 clearfix py-2"
                                        }
                                    >
                                        <strong
                                            className={
                                                item.data !== ""
                                                    ? "pl-2"
                                                    : "pl-2 float-left"
                                            }
                                        >
                                            {lang === "th"
                                                ? item.th_name
                                                : item.eng_name}
                                            :{" "}
                                        </strong>
                                        {item.data !== "" ? (
                                            <Image
                                                rounded
                                                className="d-block m-auto"
                                                width="100"
                                                height="100"
                                                src={`../../../../../../../storage/${item.data}`}
                                            />
                                        ) : (
                                            <span className="mb-1 px-2 float-right">
                                                -
                                            </span>
                                        )}
                                    </li>
                                );

                            default:
                                return null;
                        }
                    })}
                </ul>
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
