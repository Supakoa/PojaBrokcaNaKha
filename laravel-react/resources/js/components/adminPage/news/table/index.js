import React from "react";
import dataNewsTable from "./dataNewsTable";
import { MDBDataTable } from "mdbreact";
import {useTranslation} from 'react-i18next';

export default function TableNews() {
    const _data = dataNewsTable();
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
