import React from "react";

import { useTranslation } from "react-i18next";
import ConvertDate from "../../../middleware/method/convertDate";
import ReportStatus from "./ReportStatus";
import ModalReport from "../../modals/ModalReport";
import StatusBadgeDoc from "../../../student/components/tableReport/statusDocument";
import SpanSwitchLanguages from "../../../name-form-ontable";
import { vsprintf } from "sprintf-js";
import UserModalDoc from "../../../student/components/tableReport/modal";
export default function mapDocuments(datas, setRows) {
    return datas.map((res, idx) => {
        const doc = {
            id: idx + 1,
            code: vsprintf("DOC%06d", [res.id]),
            typeForm: (
                <SpanSwitchLanguages
                    thName={res.form.th_name}
                    engName={res.form.eng_name}
                />
            ),
            sender: `${res.user.title} ${res.user.first_name} ${res.user.last_name}`,
            sendTime: <ConvertDate dateTime={res.created_at} />,
            editTime: <ConvertDate dateTime={res.updated_at} />,
            status: <StatusBadgeDoc status={res.status} />,
            action: (
                <UserModalDoc document={res} key={res.id} setRows={setRows} />
            )
        };
        return doc;
    });
}
