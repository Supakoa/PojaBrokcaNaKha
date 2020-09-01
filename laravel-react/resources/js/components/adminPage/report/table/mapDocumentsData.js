import React from "react";

import { useTranslation } from "react-i18next";
import ConvertDate from "../../../middleware/method/convertDate";
import ReportStatus from "./ReportStatus";
import ModalReport from "../../modals/ModalReport";
import StatusBadgeDoc from "../../../student/components/tableReport/statusDocument";
import SpanSwitchLanguages from "../../../name-form-ontable";

export default function mapDocuments(datas) {

    return datas.map(res => {
        const doc = {
            id: res.id,
            typeForm: <SpanSwitchLanguages thName={res.form.th_name} engName={res.form.eng_name}/> ,
            sender: `${res.user.title} ${res.user.first_name} ${res.user.last_name}`,
            sendTime:   <ConvertDate dateTime={res.created_at} />,
            editTime:   <ConvertDate dateTime={res.updated_at} />,
            status: <StatusBadgeDoc status={res.status}/>,
            action: <ModalReport key={res.id} id={res.id}/>
        };
        return doc;
    });
}
