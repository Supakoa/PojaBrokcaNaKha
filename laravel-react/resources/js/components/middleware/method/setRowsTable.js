import React from "react";
import ConvertDate from "./convertDate";
import NameFormOnTable from "../../name-form-ontable";

export const _setRowsTable = async _props => {
    if (_props.docTemp.length !== 0) {
        return await _props.userDoc.map(item => {
            const _nameDoc = _props.docTemp.find(doc => {
                return item.form_id === doc.id;
            });
            item.form_name = (
                <NameFormOnTable
                    thName={_nameDoc.th_name}
                    engName={_nameDoc.eng_name}
                />
            );

            if (item.created_at !== null) {
                item.created_at_converted = (
                    <ConvertDate dateTime={item.created_at} />
                );
            } else {
                item.created_at_converted = "-";
            }
            if (item.updated_at !== null) {
                item.updated_at_converted = (
                    <ConvertDate dateTime={item.updated_at} />
                );
            } else {
                item.updated_at_converted = "-";
            }
            if (item.canceled_at !== null) {
                item.canceled_at_converted = (
                    <ConvertDate dateTime={item.updated_at} />
                );
            } else {
                item.canceled_at_converted = "-";
            }
            return item;
        });
    }
};
