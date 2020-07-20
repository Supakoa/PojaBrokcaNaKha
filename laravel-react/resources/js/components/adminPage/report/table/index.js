import React from "react";
import { MDBDataTable } from "mdbreact";
import dataReport from "./dataReport";
import {useTranslation} from 'react-i18next';

export default function TableReport() {
    const _data = dataReport();
    const {t} = useTranslation('', {useSuspense: false});

    return (
        <MDBDataTable
            striped
            borderless
            scrollX
            hover
            info={false}
            paging={false}
            data={_data}
            searchLabel={t('search')}
        />
    );
}
