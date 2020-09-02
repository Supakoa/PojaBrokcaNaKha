import React from "react";
import { useTranslation } from "react-i18next";
import ModalImage from "./ModalImage";
import { getSubjects } from "../../../../middleware/axios/getSubject";

const ListDetailDocs = ({ subjects, data, inputData }) => {
    const { i18n } = useTranslation();
    const [newSubject, setNewSubject] = React.useState([]);

    const getSubjectByAttNone = async token => {
        const done = await getSubjects(token);
        if (done) {
            setNewSubject(done);
        }
    };

    React.useEffect(() => {
        if (!!subjects && newSubject.length === 0) {
            getSubjectByAttNone(localStorage._authLocal);
        }
    }, [subjects, newSubject]);

    switch (data.tag_type) {
        case "select1":
            return (
                <dl className="row mb-0">
                    <dt className="col-lg-4 col-md-4">
                        {i18n.language === "th" ? data.th_name : data.eng_name}:{" "}
                    </dt>
                    <dd className="col-lg-8 col-md-8">
                        {i18n.language === "th"
                            ? data.th_options.map((sub, idx) => {
                                  return idx === Number(data.data) ? sub : null;
                              })
                            : data.eng_options.map((sub, idx) => {
                                  return idx === Number(data.data) ? sub : null;
                              })}
                    </dd>
                </dl>
            );
        case "select2":
            //it's has other choice
            return (
                <dl className="row mb-0">
                    <dt className="col-lg-4 col-md-4">
                        {i18n.language === "th" ? data.th_name : data.eng_name}:{" "}
                    </dt>
                    <dd className="col-lg-8 col-md-8">
                        {!isNaN(data.data) &&
                        data.data < data.th_options.length - 1
                            ? i18n.language === "th"
                                ? data.th_options.map((sub, idx) => {
                                      return idx === Number(data.data)
                                          ? sub
                                          : null;
                                  })
                                : data.eng_options.map((sub, idx) => {
                                      return idx === Number(data.data)
                                          ? sub
                                          : null;
                                  })
                            : data.data}
                    </dd>
                </dl>
            );
        case "select3":
            let s = {};
            let _theSub = {};
            if (inputData !== null) {
                const _subject = inputData.inputs.find(data => {
                    return data.tag_type === "select3";
                });
                if (_subject) {
                    if (newSubject.length > 0) {
                        _theSub = newSubject.find(sub => {
                            return sub.id === Number(_subject.data);
                        });
                    } else {
                        _theSub = subjects.find(sub => {
                            return sub.id === Number(_subject.data);
                        });
                    }
                    if (_theSub) {
                        s = _theSub;
                    }
                }
            }
            //Subject
            return (
                <dl className="row mb-0">
                    <dt className="col-lg-4 col-md-4">
                        {i18n.language === "th" ? data.th_name : data.eng_name}:{" "}
                    </dt>
                    <dd className="col-lg-8 col-md-8">
                        {i18n.language === "th"
                            ? s.th_name
                                ? s.th_name
                                : "-"
                            : s.eng_name
                            ? s.th_name
                            : "-"}
                    </dd>
                </dl>
            );

        case "text":
            return (
                <dl className="row mb-0">
                    <dt className="col-lg-4 col-md-4">
                        {i18n.language === "th" ? data.th_name : data.eng_name}:{" "}
                    </dt>
                    <dd className="col-lg-8 col-md-8">
                        {!!data.data ? data.data : "-"}
                    </dd>
                </dl>
            );

        case "file":
            return (
                <dl className="row mb-0">
                    <dt className="col-lg-4 col-md-4">
                        {i18n.language === "th" ? data.th_name : data.eng_name}:{" "}
                    </dt>
                    <dd className="col-lg-8 col-md-8">
                        {!!data.data ? <ModalImage src={data.data} /> : "-"}
                    </dd>
                </dl>
            );

        case "date":
            return (
                <span className="m-0 strong">
                    {data.eng_name !== "To" ? (
                        <i className="fas fa-calendar-day"></i>
                    ) : null}{" "}
                    {i18n.language === "th" ? data.th_name : data.eng_name}{" "}
                    {!!data.data ? data.data : "-"}{" "}
                </span>
            );

        default:
            return null;
    }
};

export default ListDetailDocs;
