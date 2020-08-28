import React from "react";
import { useTranslation } from "react-i18next";
import ModalImage from "./ModalImage";

const ListDetailDocs = ({ subjects, data, inputData }) => {
    const { i18n } = useTranslation();

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
            if (inputData !== null) {
                const _subject = inputData.inputs.find(data => {
                    return data.tag_type === "select3";
                });
                if (_subject) {
                    const _theSub = subjects.find(sub => {
                        return sub.id === Number(_subject.data);
                    });

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
                        {i18n.language === "th" ? s.th_name : s.eng_name}
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
